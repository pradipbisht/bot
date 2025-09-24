// src/components/about/About-Diff.jsx
import React from "react";
import { Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import AnimatedBackground from "../../components/test/blot/BoltAnimation";

const AboutDifference = () => {
  const points = [
    {
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      title: "Innovative Approach",
      desc: "We blend data-driven insights with creative storytelling, ensuring your brand stands out in a competitive market.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
      title: "Transparency & Trust",
      desc: "We prioritize honesty and measurable outcomes. You'll always know where your budget goes and how it performs.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: "Results That Matter",
      desc: "We focus on ROI-driven campaigns that don't just reach people—they move them, driving growth and lasting impact.",
      color: "from-orange-500 to-pink-500",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br bg-white overflow-hidden border-b border-white/20">
      <AnimatedBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-12 rounded-3xl shadow-xl p-8 lg:p-12 border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why We're{" "}
                <span className="text-teal-600 border-b-4 border-teal-500">
                  Different
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                We don't just deliver campaigns—we build partnerships designed
                for long-term growth.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {points.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                  <div
                    className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${item.color} mb-6 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {item.desc}
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

export default AboutDifference;

