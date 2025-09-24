import React from "react";

export default function ServicesHeader() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 text-teal-700 mb-8">
          <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
          <span className="text-sm font-medium">Professional Services</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="block">Transform Your</span>
          <span className="block text-teal-600">
            Digital Presence
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Comprehensive digital marketing services designed to grow your
          business and dominate your market across all channels.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700">
            Get Started Today
          </button>

          <button className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg border border-teal-600 hover:bg-teal-50">
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              500+
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Projects Completed
            </div>
          </div>
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              98%
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Client Satisfaction
            </div>
          </div>
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              24/7
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Support Available
            </div>
          </div>
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              5+
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


