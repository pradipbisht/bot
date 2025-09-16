import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config({ path: new URL("../.env", import.meta.url).pathname });

const host = process.env.SMTP_HOST || "";
const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const user = process.env.SMTP_USER || "";
const pass = process.env.SMTP_PASS || "";
const receiver =
  process.env.CONTACT_RECEIVER || user || "usefakeemail@example.com";

console.log("SMTP test starting with config:", { host, port, user, receiver });

if (!host || !port || !user || !pass) {
  console.error(
    "Missing SMTP configuration in .env. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_RECEIVER."
  );
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465, // true for 465, false for other ports (STARTTLS)
  auth: {
    user,
    pass,
  },
});

async function run() {
  try {
    console.log("Verifying transporter... (this checks basic connection/auth)");
    await transporter.verify();
    console.log("Transporter verified. Attempting to send test message...");

    const info = await transporter.sendMail({
      from: `${user}`,
      to: receiver,
      subject: "SMTP Test Message from local bot repo",
      text: `This is a test message sent at ${new Date().toISOString()} using host=${host} user=${user}`,
    });

    console.log("Message sent. Info:", info);
    process.exit(0);
  } catch (err) {
    console.error("SMTP test failed:", err && err.stack ? err.stack : err);
    // Show nested error info if available
    if (err && err.response) console.error("SMTP response:", err.response);
    process.exit(2);
  }
}

run();
