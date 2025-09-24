// src/components/HeroAbout.jsx
import React from "react";

const HeroAboutS = () => {
  return (
    <section className="bg-white py-10 px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-medium">
            <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
            About Our Agency
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Who <span className="text-teal-600">We Are</span>
          </h2>

          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              KPIVIBE empowers businesses with marketing that drives growth,
              builds trust, and creates lasting impact. From startups to
              enterprises, we deliver clarity and measurable outcomes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team combines creativity with data-driven strategies, ensuring
              every campaign is tailored to your unique goals. We don't just
              execute—we partner with you to innovate, optimize, and scale
              sustainable growth that lasts.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              {
                value: "150+",
                label: "Happy Clients",
              },
              {
                value: "95%",
                label: "Success Rate",
              },
              {
                value: "5+",
                label: "Years Experience",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
                <h3 className="text-3xl font-bold text-teal-600 mb-2">
                  {item.value}
                </h3>
                <p className="text-gray-600 font-medium text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          {/* Image */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
              alt="Marketing Strategy"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
              <h4 className="text-xl font-semibold text-teal-600">
                Our Vision
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To equip brands with measurable, scalable, and impactful marketing
              solutions. To be the trusted growth partner for businesses
              striving for performance and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutS;

