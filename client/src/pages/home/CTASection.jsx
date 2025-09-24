import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";

function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have scaled their growth
            with our proven digital marketing strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105 flex items-center">
              <Phone className="w-5 h-5 mr-3" />
              Schedule Free Consultation
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="group border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center">
              <Mail className="w-5 h-5 mr-3" />
              Get Custom Strategy
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white mb-2">Free</div>
              <div>Initial Consultation</div>
            </div>
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white mb-2">30-Day</div>
              <div>Money Back Guarantee</div>
            </div>
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div>Priority Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

