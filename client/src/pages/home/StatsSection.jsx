import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TrendingUp, Users, Award, Target } from "lucide-react";

function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: 500,
      suffix: "+",
      label: "Happy Clients",
      description: "Businesses we've helped grow",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: 285,
      suffix: "%",
      label: "Average ROI",
      description: "Return on investment",
      color: "text-teal-600",
      bgColor: "bg-teal-100",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: 99,
      suffix: "%",
      label: "Success Rate",
      description: "Client satisfaction score",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: 24,
      suffix: "/7",
      label: "Support",
      description: "Always here to help",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Numbers That Tell Our
            <span className="text-teal-300"> Success Story</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Real results from real campaigns. See why businesses trust us with
            their growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-xl mb-6`}>
                <div className={stat.color}>{stat.icon}</div>
              </div>

              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                <CountUp end={stat.number} duration={2.5} delay={index * 0.2} />
                <span className="text-teal-300">{stat.suffix}</span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>

              <p className="text-blue-200 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">
                Live Stats Updated Daily
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;

