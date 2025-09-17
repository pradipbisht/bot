import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroBackground from "./HeroSectionBackGround";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center mx-auto justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background */}
      <HeroBackground />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-2">
            <h1 className="font-bold text-xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              Scale Your Business with
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Smart Marketing
              </span>
            </h1>
            <p className="text-2xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl">
              We help ambitious businesses grow faster with data-driven digital
              marketing strategies. Get more leads, increase sales, and dominate
              your market.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-md transition-all duration-300 shadow-xl hover:shadow-blue-500/25 hover:scale-105 text-center overflow-hidden">
                <span className="relative z-10 inline-flex items-center">
                  Get Free Strategy Call
                  <ArrowRight className="ml-3 w-5 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Content - Dashboard Card */}
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white font-bold text-xl">
                  Marketing Dashboard
                </h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-150" />
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-300" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-blue-400/10">
                  <div className="text-blue-400 text-3xl font-bold">285%</div>
                  <div className="text-slate-300 text-sm">Traffic Growth</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-4 border border-green-400/10">
                  <div className="text-green-400 text-3xl font-bold">$2.4M</div>
                  <div className="text-slate-300 text-sm">
                    Revenue Generated
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-400/10">
                  <div className="text-purple-400 text-3xl font-bold">450+</div>
                  <div className="text-slate-300 text-sm">New Leads</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-4 border border-orange-400/10">
                  <div className="text-orange-400 text-3xl font-bold">98%</div>
                  <div className="text-slate-300 text-sm">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl p-6 h-32 flex items-center justify-center border border-blue-400/10">
                <div className="text-blue-300 text-lg font-medium">
                  📈 Growth Analytics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keep CSS for animations */}
      <style>{`
        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite;
        }
        .star-medium {
          width: 3px;
          height: 3px;
          background: #60a5fa;
        }
        .shooting-star {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, #fff, transparent);
          animation: shooting 3s infinite;
        }
        .floating-element {
          position: absolute;
          animation: float 6s ease-in-out infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes shooting {
          0% {
            transform: translateX(-100px) translateY(-100px);
            width: 0;
            opacity: 0;
          }
          10% { opacity: 1; width: 100px; }
          90% { opacity: 1; width: 100px; }
          100% {
            transform: translateX(100vw) translateY(100vh);
            width: 0;
            opacity: 0;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
