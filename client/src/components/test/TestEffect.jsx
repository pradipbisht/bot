import React, { useEffect } from "react";

function StarBackground() {
  useEffect(() => {
    const container = document.getElementById("star-container");
    const numStars = 200;

    // Clear old stars if re-rendered
    container.innerHTML = "";

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";

      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;

      star.style.animationDelay = `${Math.random() * 5}s, ${
        Math.random() * 10
      }s`;
      star.style.animationDuration = `${Math.random() * 4 + 3}s, ${
        Math.random() * 10 + 5
      }s`;

      star.style.setProperty("--dx", `${(Math.random() - 0.5) * 400}px`);
      star.style.setProperty("--dy", `${(Math.random() - 0.5) * 400}px`);

      container.appendChild(star);
    }
  }, []);

  return (
    <div className="w-full h-full relative" id="star-container">
      <style>
        {`
          body, html {
            height: 100%;
            margin: 0;
            overflow: hidden;
            background-color: #fff;
            font-family: 'Inter', sans-serif;
            cursor: default;
          }

          #star-container {
            transition: transform 0.2s ease-out;
          }

          @keyframes pulse {
            0% {
              opacity: 0.3;
              transform: scale(0.6);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.1);
            }
            100% {
              opacity: 0.3;
              transform: scale(0.6);
            }
          }

          @keyframes drift {
            0% { transform: translate(0, 0); }
            100% { transform: translate(var(--dx), var(--dy)); }
          }

          .star {
            position: absolute;
            background-color: #1a1a1a;
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 
              0 0 2px rgba(0, 0, 0, 0.2), 
              0 0 8px rgba(0, 0, 0, 0.15), 
              0 0 15px rgba(0, 0, 0, 0.1);
            animation-name: pulse, drift;
            animation-iteration-count: infinite, infinite;
            animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94), linear;
            animation-direction: normal, alternate;
          }
        `}
      </style>
    </div>
  );
}

export default StarBackground;
