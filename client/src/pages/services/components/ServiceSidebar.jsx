import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Gift, Phone, Mail, MessageCircle } from "lucide-react";

export default function ServiceSidebar() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-8 space-y-8">
        {/* Quick Inquiry Form */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 p-2 rounded-lg mr-3">
                <MessageCircle className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Quick Inquiry
              </h3>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option value="">Select Service</option>
                  <option value="website-funnel">
                    Website & Funnel Marketing
                  </option>
                  <option value="search-marketing">Search Marketing</option>
                  <option value="social-media">Social Media Marketing</option>
                  <option value="content-brand">
                    Content & Brand Marketing
                  </option>
                  <option value="performance-marketing">
                    Performance Marketing
                  </option>
                  <option value="reputation-growth">
                    Reputation & Growth Services
                  </option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white font-semibold py-3 rounded-lg hover:bg-teal-700">
                <div className="flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Get Free Quote
                </div>
              </button>
            </form>
          </div>
        </div>

        {/* Lead Magnet */}
        <div className="bg-teal-600 text-white rounded-lg shadow-md">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-white bg-opacity-20 p-2 rounded-lg mr-3">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Free Marketing Audit</h3>
            </div>

            <p className="text-teal-100 mb-4">
              Get a comprehensive analysis of your current marketing efforts and
              discover opportunities for growth.
            </p>

            <Link
              to="/contact"
              className="block bg-white text-teal-600 font-semibold py-3 rounded-lg hover:bg-gray-100 text-center">
              Download Free Audit
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-3 text-teal-600" />
              Need Help Choosing?
            </h3>

            <p className="text-gray-600 mb-4">
              Our experts are here to help you select the right services for
              your business goals.
            </p>

            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-teal-600 mr-3" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-teal-600 mr-3" />
                <span className="text-gray-700">hello@digitalgrow.com</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-teal-50 rounded-lg border border-teal-200">
              <p className="text-sm text-teal-700 text-center">
                🎉 Free consultation available this month!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


