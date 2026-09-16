"use client";

import { useEffect, useState } from "react";

export function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduce) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const done = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 2100);

    return () => {
      window.clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="intro" id="intro" aria-hidden="true">
      <div className="intro__road" />

      <div className="intro__stage">
        <div className="intro__kicker">
          <KickerSvg />
        </div>
        <div className="intro__ball">
          <FootballSvg />
        </div>
      </div>

      <span className="intro__mark">Yeti Sporting Club</span>
    </div>
  );
}

function KickerSvg() {
  return (
    <svg
      className="intro__kicker-svg"
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* head */}
      <circle cx="48" cy="22" r="12" fill="#e8eef2" />
      {/* torso */}
      <path
        d="M40 36c2 22 4 34 8 48"
        stroke="#e8eef2"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* standing leg */}
      <path
        d="M48 84 L42 128 L38 152"
        stroke="#e8eef2"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* kicking leg — pivoted near hip */}
      <g className="intro__kick-leg">
        <path
          d="M48 82 L78 98 L102 88"
          stroke="#c5e0ea"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse cx="106" cy="86" rx="7" ry="4.5" fill="#c5e0ea" />
      </g>
      {/* arms */}
      <path
        d="M46 48 L28 68"
        stroke="#e8eef2"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d="M50 50 L68 42"
        stroke="#e8eef2"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FootballSvg() {
  return (
    <svg viewBox="0 0 100 100" className="intro__ball-svg">
      <defs>
        <radialGradient id="yetiBallShade" cx="30%" cy="26%" r="72%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#f2f4f6" />
          <stop offset="100%" stopColor="#8b959e" />
        </radialGradient>
        <radialGradient id="yetiBallGloss" cx="28%" cy="22%" r="40%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sphere */}
      <circle cx="50" cy="50" r="47" fill="url(#yetiBallShade)" />

      {/* classic black panels */}
      <polygon points="50,22 62,30 58,44 42,44 38,30" fill="#12171c" />
      <polygon points="22,42 34,36 40,48 32,60 20,54" fill="#12171c" />
      <polygon points="78,42 80,54 68,60 60,48 66,36" fill="#12171c" />
      <polygon points="36,70 44,62 56,62 64,70 58,82 42,82" fill="#12171c" />

      {/* seam lines */}
      <path
        d="M50 22 L62 30 L74 24 M62 30 L58 44 L68 56 L80 54
           M58 44 L42 44 L32 56 L20 54
           M42 44 L38 30 L26 24
           M38 30 L50 22 L54 12
           M42 44 L44 62 L36 70
           M58 44 L56 62 L64 70
           M44 62 L56 62 L62 74
           M36 70 L42 82 L50 88 L58 82 L64 70"
        fill="none"
        stroke="#12171c"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* rim + gloss */}
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="none"
        stroke="#1a2228"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <circle cx="50" cy="50" r="47" fill="url(#yetiBallGloss)" />
    </svg>
  );
}
