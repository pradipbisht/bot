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
            AI-Powered Platform
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            AI-Powered{" "}
            <span className="text-teal-600">Marketing Solutions</span>
          </h2>

          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              KPIVIBE combines cutting-edge AI technology with strategic
              marketing expertise to deliver automated, intelligent solutions
              that drive real business growth. Our bot-powered platform
              transforms how businesses connect with their audience.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From AI-driven chatbots and automated customer engagement to
              intelligent analytics and personalized marketing campaigns, we
              leverage technology to create seamless, data-driven experiences
              that convert visitors into loyal customers.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              {
                value: "24/7",
                label: "AI Support",
              },
              {
                value: "500+",
                label: "Automated Tasks",
              },
              {
                value: "98%",
                label: "Customer Satisfaction",
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
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full shadow-lg overflow-hidden border-4 border-teal-200">
              <img
                src="/botwebimage.jpg"
                alt="KPIVIBE Bot Web Platform - AI-Powered Marketing Solutions"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
              <h4 className="text-xl font-semibold text-teal-600">
                Our Mission
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To revolutionize digital marketing through intelligent automation
              and AI-driven insights. We empower businesses to achieve
              unprecedented growth by seamlessly integrating advanced bot
              technology with proven marketing strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutS;
