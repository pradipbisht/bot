// src/components/HeroAbout.jsx
import React from "react";

const HeroAboutS = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Who <span className="text-teal-500">We Are</span>
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            KPIVIBE empowers businesses with marketing that drives growth,
            builds trust, and creates lasting impact. From startups to
            enterprises, we deliver clarity and measurable outcomes. Our team
            combines creativity with data-driven strategies, ensuring every
            campaign is tailored to your unique goals. We don't just execute—we
            partner with you to innovate, optimize, and scale sustainable growth
            that lasts.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We build lasting partnerships, understanding unique challenges and
            crafting solutions that drive real business growth through
            transparent, results-focused approaches.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "150+", label: "Happy Clients" },
              { value: "95%", label: "Success Rate" },
              { value: "5+", label: "Years Experience" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 text-center transform transition-transform duration-300 hover:rotate-3 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-2xl font-bold text-teal-600">
                  {item.value}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative group">
          <div className="overflow-hidden rounded-3xl shadow-xl transform transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
              alt="Marketing Strategy"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Vision Card */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg p-6 w-11/12 md:w-3/4 transform transition-transform duration-500 hover:scale-105 hover:-rotate-1">
            <h4 className="text-lg font-semibold text-teal-600 mb-2">
              Our Vision
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              To equip brands with measurable, scalable, and impactful marketing
              solutions.
              <br /> To be the trusted growth partner for businesses striving
              for performance and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutS;
