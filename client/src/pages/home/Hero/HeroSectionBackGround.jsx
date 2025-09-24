import React, { useEffect, useState } from "react";
import { Sparkles, Zap, Target } from "lucide-react";

function HeroBackground({ pattern = "stars" }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (pattern === "stars") {
      const generatedStars = Array.from({ length: 70 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${2 + Math.random() * 3}s`,
        size: Math.random() > 0.7 ? "w-[3px] h-[3px]" : "w-[2px] h-[2px]",
      }));
      setStars(generatedStars);
    }
  }, [pattern]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 🌌 Twinkling Stars */}
      {pattern === "stars" && (
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div
              key={star.id}
              className={`absolute rounded-full bg-white opacity-60 animate-pulse ${star.size}`}
              style={{
                left: star.left,
                top: star.top,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}

          {/* Shooting stars */}
          <div
            className="absolute w-[2px] h-20 bg-gradient-to-b from-white to-transparent rotate-45 opacity-0 animate-[shoot_8s_infinite]"
            style={{ left: "50%", top: "-10px", animationDelay: "2s" }}
          />
          <div
            className="absolute w-[2px] h-20 bg-gradient-to-b from-white to-transparent rotate-45 opacity-0 animate-[shoot_8s_infinite]"
            style={{ left: "70%", top: "-10px", animationDelay: "6s" }}
          />
        </div>
      )}

      {/* 🔲 Minimal Dotted Grid */}
      {pattern === "grid" && (
        <div className="absolute inset-0 bg-slate-950">
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20" />

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute animate-[float_6s_ease-in-out_infinite]"
          style={{ left: "10%", top: "20%", animationDelay: "0s" }}>
          <Sparkles className="w-6 h-6 text-blue-400 opacity-60" />
        </div>
        <div
          className="absolute animate-[float_6s_ease-in-out_infinite]"
          style={{ right: "15%", top: "30%", animationDelay: "1s" }}>
          <Zap className="w-5 h-5 text-purple-400 opacity-50" />
        </div>
        <div
          className="absolute animate-[float_6s_ease-in-out_infinite]"
          style={{ left: "80%", bottom: "40%", animationDelay: "2s" }}>
          <Target className="w-4 h-4 text-blue-300 opacity-40" />
        </div>
      </div>
    </div>
  );
}

export default HeroBackground;

