import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "./boltMotion";
import AnimatedBackground from "./BoltAnimation";

const BoltHero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000);
    setEmail("");
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Gradient Overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"
        style={{ zIndex: 2 }}
      />
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-10 left-5 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-10 right-5 w-56 h-56 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div
        className="relative flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 lg:px-8 py-12 container mx-auto max-w-6xl min-h-screen"
        style={{ zIndex: 10 }}>
        {/* Left Column */}
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          className="w-full lg:w-1/2 space-y-6 z-20">
          <motion.div
            variants={fadeIn("right", 0.2)}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-md w-fit px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer group border border-white/20">
            <motion.span
              className="text-blue-600 text-lg group-hover:scale-110 transition-transform"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.6 }}>
              🚀
            </motion.span>
            <span className="text-xs font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
              #1 AI-Powered Marketing Platform
            </span>
          </motion.div>

          <motion.h1
            variants={textVariant(0.3)}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-gray-900">
            Transform Your{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-purple-600 to-cyan-600">
                Digital Growth
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-amber-600 via-purple-600 to-cyan-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              />
            </span>{" "}
            with Smart AI
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            className="text-gray-700 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
            Unlock explosive growth with our AI-driven marketing suite.
            <span className="text-blue-600 font-semibold"> 10x your leads</span>
            , boost conversions by{" "}
            <span className="text-purple-600 font-semibold">300%</span>, and
            dominate your market with intelligent automation.
          </motion.p>

          <motion.form
            variants={fadeIn("up", 0.5)}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your business email"
              required
              className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 placeholder-gray-500 bg-white/90 backdrop-blur-sm font-medium shadow-md"
            />
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-500 via-teal-700 to-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl active:shadow-lg flex items-center justify-center gap-2 min-w-[140px] shadow-md">
              {isSubmitted ? (
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="text-green-300">
                  ✓ Success!
                </motion.span>
              ) : (
                <>
                  Get Started
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}>
                    →
                  </motion.span>
                </>
              )}
            </motion.button>
          </motion.form>

          <motion.div
            variants={fadeIn("up", 0.6)}
            className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="font-semibold">Free 30-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="font-semibold">No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="font-semibold">Cancel anytime</span>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            className="flex items-center gap-4 pt-2">
            <div className="text-sm text-gray-600">
              <span className="font-bold text-xl text-gray-900">50K+</span>
              <br />
              <span>Active Users</span>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-bold text-xl text-gray-900">$2.5B+</span>
              <br />
              <span>Revenue Generated</span>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-bold text-xl text-gray-900">99.9%</span>
              <br />
              <span>Uptime</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Enhanced Image Section */}
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView="show"
          className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-8 z-20">
          <div className="relative">
            {/* Main image with enhanced styling */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI-powered digital marketing dashboard with analytics and growth metrics"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/10 rounded-2xl" />
            </motion.div>

            {/* Enhanced floating stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, ease: "backOut" }}
              className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-lg p-4 rounded-2xl shadow-xl border border-white/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">+347%</div>
                <div className="text-sm text-gray-700 font-semibold">
                  ROI Boost
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
              className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-lg p-4 rounded-2xl shadow-xl border border-white/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-gray-700 font-semibold">
                  Success Stories
                </div>
              </div>
            </motion.div>

            {/* Enhanced decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 -left-8 w-16 h-16 border-2 border-blue-300/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 -right-6 w-12 h-12 border-2 border-purple-300/30 rounded-full"
            />

            {/* Additional floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-md"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/3 -left-3 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-md"
            />
          </div>
        </motion.div>
      </div>

      {/* Enhanced bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full" style={{ zIndex: 3 }}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 fill-white">
          <path d="M0,120 L1200,120 L1200,60 C1000,20 800,80 600,50 C400,20 200,80 0,60 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default BoltHero;
