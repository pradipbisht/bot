import nodemailer from "nodemailer";

// Using a fake SMTP transporter for development; replace with real creds later
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.example.com",
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "usefakeemail@example.com",
    pass: process.env.SMTP_PASS || "fakepassword",
  },
});

// Verify transporter connection on startup (best effort)
transporter
  .verify()
  .then(() => {
    console.log("Contact transporter verified");
  })
  .catch((err) => {
    console.warn(
      "Contact transporter not verified - emails will be logged locally:",
      err && err.message ? err.message : err
    );
  });

export const sendContactMessage = async (req, res, next) => {
  try {
    console.log("Contact form incoming:", req.body);
    const { name, email, phone, company, service, budget, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "Name, email and message are required" });
    }

    const mailOptions = {
      from: `"${name}" <${
        process.env.SMTP_USER || process.env.SMTP_USER || "no-reply@example.com"
      }>`,
      replyTo: email,
      to:
        process.env.CONTACT_RECEIVER ||
        process.env.SMTP_USER ||
        "usefakeemail@example.com",
      subject: `New contact from ${name} — ${service || "General"}`,
      text: `You received a new message from the contact form:\n\n
  Name: ${name}
  Email: ${email}
  Phone: ${phone || "-"}
  Company: ${company || "-"}
  Service: ${service || "-"}
  Budget: ${budget || "-"}
  
  Message:
  ${message}`,
    };

    // Try sending the email; if it fails due to transporter issues, fallback to logging
    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Message sent successfully" });
    } catch (sendErr) {
      console.warn(
        "sendMail failed, falling back to console log:",
        sendErr && sendErr.message ? sendErr.message : sendErr
      );
      console.log("CONTACT FORM MESSAGE:", mailOptions);
      // Return success-like response so frontend treats it as accepted for dev
      return res
        .status(200)
        .json({
          message: "Message received (logged).",
          detail: sendErr && sendErr.message ? sendErr.message : undefined,
        });
    }
  } catch (err) {
    console.error("Contact send error:", err);
    return res
      .status(500)
      .json({
        message: "Failed to send message",
        error: err && err.message ? err.message : undefined,
      });
  }
};
