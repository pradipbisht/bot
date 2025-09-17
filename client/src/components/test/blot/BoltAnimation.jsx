import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create optimized number of particles for performance
    const numParticles = 50;
    container.innerHTML = "";

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.className = "floating-particle";

      // Random size and position
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // Random animation delays and durations
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particle.style.animationDuration = `${Math.random() * 6 + 8}s`;

      // Random movement direction
      particle.style.setProperty(
        "--move-x",
        `${(Math.random() - 0.5) * 200}px`
      );
      particle.style.setProperty(
        "--move-y",
        `${(Math.random() - 0.5) * 200}px`
      );

      container.appendChild(particle);
    }

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(calc(var(--move-x) * 0.3), calc(var(--move-y) * 0.3)) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translate(calc(var(--move-x) * 0.7), calc(var(--move-y) * 0.7)) scale(0.9);
            opacity: 0.8;
          }
          75% {
            transform: translate(var(--move-x), var(--move-y)) scale(1.05);
            opacity: 0.4;
          }
        }

        .floating-particle {
          position: absolute;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          animation: float linear infinite;
          will-change: transform, opacity;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </>
  );
};

export default AnimatedBackground;
