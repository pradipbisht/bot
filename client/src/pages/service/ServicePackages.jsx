import React from "react";
import { Link } from "react-router-dom";
import { Target, Users, Zap } from "lucide-react";

export default function ServicePackages() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Specialized Growth Packages
          </h2>
          <p className="text-xl text-gray-600">
            Tailored solutions for specific business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* E-commerce Package */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              E-commerce Growth Package
            </h3>
            <p className="text-gray-600 mb-6">
              Complete solution for online stores including Shopify/WooCommerce
              optimization, product advertising, and conversion optimization.
            </p>
            <Link
              to="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block">
              Learn More
            </Link>
          </div>

          {/* B2B Package */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              B2B Growth Package
            </h3>
            <p className="text-gray-600 mb-6">
              LinkedIn marketing, cold email campaigns, CRM automation, and lead
              nurturing specifically designed for B2B businesses.
            </p>
            <Link
              to="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block">
              Learn More
            </Link>
          </div>

          {/* Startup Package */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Startup Launch Package
            </h3>
            <p className="text-gray-600 mb-6">
              Everything you need to launch: branding, website development,
              marketing funnel setup, and initial campaign management.
            </p>
            <Link
              to="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
