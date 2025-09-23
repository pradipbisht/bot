import React from "react";
import { Link } from "react-router-dom";

export default function ServiceSidebar() {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-8 space-y-8">
        {/* Quick Inquiry Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Inquiry
          </h3>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                <option value="">Select Service</option>
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
              </select>
            </div>
            <div>
              <textarea
                placeholder="Tell us about your project..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200">
              Get Free Quote
            </button>
          </form>
        </div>

        {/* Lead Magnet */}
        <div className="bg-gradient-to-br from-teal-600 to-blue-700 text-white rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-3">Free Marketing Audit</h3>
          <p className="text-teal-100 text-sm mb-4">
            Get a comprehensive analysis of your current marketing efforts and
            discover opportunities for growth.
          </p>
          <Link
            to="/contact"
            className="block bg-white text-teal-600 hover:bg-gray-100 text-center font-semibold py-3 rounded-lg transition-colors duration-200">
            Download Free Audit
          </Link>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Need Help Choosing?
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Our experts are here to help you select the right services for your
            business goals.
          </p>
          <div className="space-y-2">
            <div className="text-sm text-gray-600">📞 +1 (555) 123-4567</div>
            <div className="text-sm text-gray-600">
              📧 hello@digitalgrow.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
