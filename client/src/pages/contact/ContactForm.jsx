import React, { useState } from "react";
import { toast } from "react-toastify";
import { sendContactMessage } from "../../api/contact/apiContact";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = await sendContactMessage(formData);
      toast.success(
        (data && (data.message || data.detail)) || "Message sent successfully"
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (err) {
      console.error("sendContactMessage error:", err);
      toast.error(err.message || "Failed to send message");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-2 w-full text-left">
      <div className="bg-white p-8 rounded-lg shadow-lg mx-0">
        <h3 className="text-2xl font-bold mb-4">Send Us A Message</h3>
        <p className="text-gray-600 mb-6">
          Tell us about your project and we'll get back to you within 1 business
          day.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your Company"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-2">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors">
                <option value="">Select a service</option>
                <option value="seo">SEO</option>
                <option value="content-marketing">Content Marketing</option>
                <option value="social-media">Social Media</option>
                <option value="paid-ads">Paid Ads</option>
                <option value="email-marketing">Email Marketing</option>
                <option value="analytics">Analytics</option>
                <option value="marketing-tools">Marketing Tools</option>
                <option value="ai-emerging-tech">AI & Emerging Tech</option>
                <option value="cro-websites">CRO & Websites</option>
                <option value="mobile-marketing">Mobile Marketing</option>
                <option value="full-service">Full Service Package</option>
                <option value="consultation">Free Consultation</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors">
                <option value="">Select budget range</option>
                <option value="under-1000">Under $1,000</option>
                <option value="1000-3000">$1,000 - $3,000</option>
                <option value="3000-5000">$3,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="over-10000">Over $10,000</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your business goals..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              type="submit"
              disabled={submitting}
              className={`flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                submitting
                  ? "opacity-60 cursor-not-allowed hover:shadow-none hover:scale-100"
                  : ""
              }`}>
              {submitting ? "Sending..." : "Send Message"}
            </button>

            <a
              href="/pricing"
              className="flex-1 border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center">
              View Pricing
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            * Required fields. We respect your privacy and will never share your
            information.
          </p>
        </form>
      </div>
    </div>
  );
}
