// src/components/about/AboutHero.jsx
import React from "react";
import { Target, Users, Award } from "lucide-react";
import AnimatedBackground from "../../components/test/blot/BoltAnimation";

const AboutHero = () => {
  const steps = [
    {
      id: 1,
      title: "Discover",
      icon: <Target className="w-10 h-10 text-white" />,
      desc: "We analyze your business to uncover opportunities and challenges.",
      bg: "bg-teal-600",
    },
    {
      id: 2,
      title: "Build",
      icon: <Users className="w-10 h-10 text-black" />,
      desc: "We create customized strategies and solutions tailored to your goals.",
      bg: "bg-cyan-400",
    },
    {
      id: 3,
      title: "Grow",
      icon: <Award className="w-10 h-10 text-white" />,
      desc: "We execute, monitor, and optimize to ensure long-term growth.",
      bg: "bg-teal-500",
    },
  ];

  return (
    <section className="relative bg-white/80 backdrop-blur-sm min-h-screen py-2 md:py-16 lg:py-10 overflow-hidden border-b border-white/20">
      <AnimatedBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div
            className="lg:col-span-12 mx-auto max-w-4xl ptsans-900 
                  bg-white/20 backdrop-blur-md rounded-3xl 
                  shadow-[0_10px_15px_-3px_rgba(156,163,175,0.5),0_-5px_10px_-2px_rgba(156,163,175,0.2)]
                  transition-all duration-300 transform hover:scale-105 hover:shadow-[0_20px_25px_-5px_rgba(156,163,175,0.5),0_-10px_15px_-5px_rgba(156,163,175,0.3)]
                  hover:-rotate-y-2 hover:rotate-x-1 border border-white/20 p-8 lg:p-12">
            <h2 className="text-3xl lg:text-5xl font-['PT_Sans'] font-black text-gray-600 mb-6 tracking-tight">
              About{" "}
              <span
                className="bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 
                       bg-clip-text text-gray-700 bg-[length:200%_200%] 
                       animate-[gradient-x_6s_ease_infinite] hover:scale-105 inline-block transition-transform">
                KPIVIBE
              </span>
            </h2>

            <p className="text-gray-800 leading-relaxed text-lg animate-fadeInUp">
              KPIVIBE empowers businesses with marketing that drives growth,
              builds trust, and creates lasting impact. From startups to
              enterprises, we deliver clarity and measurable outcomes. Our team
              combines creativity with data-driven strategies, ensuring every
              campaign is tailored to your unique goals. We don't just
              execute—we partner with you to innovate, optimize, and scale
              sustainable growth that lasts.
            </p>
          </div>
        </div>

        {/* Mission & Vision Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-6">
          {/* Mission */}
          <div
            className="lg:col-span-6 bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center 
                  shadow-[0_10px_15px_-3px_rgba(156,163,175,0.5),0_-5px_10px_-2px_rgba(156,163,175,0.2)]
                  hover:shadow-[0_20px_25px_-5px_rgba(156,163,175,0.5),0_-10px_15px_-5px_rgba(156,163,175,0.3)]
                  transition-all duration-300 border border-white/20">
            <span className="text-6xl mb-6 animate-bounce">🚀</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-teal-600">Mission</span>
            </h3>
            <p className="text-gray-700 text-lg">
              To equip brands with measurable, scalable, and impactful marketing
              solutions.
            </p>
          </div>

          {/* Vision */}
          <div
            className="lg:col-span-6 bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center 
                  shadow-[0_10px_15px_-3px_rgba(156,163,175,0.5),0_-5px_10px_-2px_rgba(156,163,175,0.2)]
                  hover:shadow-[0_20px_25px_-5px_rgba(156,163,175,0.5),0_-10px_15px_-5px_rgba(156,163,175,0.3)]
                  transition-all duration-300 border border-white/20">
            <span className="text-6xl mb-6 animate-pulse">🌟</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-teal-600">Vision</span>
            </h3>
            <p className="text-gray-700 text-lg">
              To be the trusted growth partner for businesses striving for
              performance and excellence.
            </p>
          </div>
        </div>

        {/* Process Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-12 bg-white/20 backdrop-blur-md rounded-3xl shadow-xl p-12 border border-white/20 transition-all duration-300 hover:shadow-2xl">
            {/* Header */}
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
                Our Process
              </h3>
              <p className="text-xl text-gray-600 mb-0">
                How we help your business grow
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="w-full max-w-sm lg:max-w-md h-96 bg-white/30 backdrop-blur-sm rounded-2xl 
                     shadow-[0_12px_20px_-5px_rgba(156,163,175,0.5),0_-6px_12px_-2px_rgba(156,163,175,0.2)]
                     transform transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_30px_-5px_rgba(156,163,175,0.5),0_-12px_18px_-5px_rgba(156,163,175,0.3)]
                     hover:-rotate-y-3 hover:rotate-x-2 hover:translate-y-1
                     flex flex-col items-center justify-center text-center p-8 cursor-pointer
                     animate-bounce-slow">
                  <div
                    className={`${step.bg} w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    {step.icon}
                  </div>

                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h4>

                  <p className="text-gray-700 text-base lg:text-lg">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
