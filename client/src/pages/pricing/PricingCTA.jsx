import React from "react";
import { Link } from "react-router-dom";

export default function PricingCTA() {
  return (
    <section className="py-20 bg-teal-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Grow Your Business?
        </h2>
        <p className="text-xl text-teal-100 mb-8">
          Start with a free consultation to determine the best plan for your
          business goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Get Free Consultation
          </Link>
          <Link
            to="/case-studies"
            className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            View Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}

