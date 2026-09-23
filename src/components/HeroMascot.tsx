"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles/HeroMascot.css";

// Neck pivot in SVG user units (viewBox 0 0 240 360).
const NECK = "120 172";

// Crisp edge stroke shared by all shell parts.
const RIM = {
  stroke: "url(#hm-rim)",
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
};

export default function HeroMascot() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const q = gsap.utils.selector(root);
    const mm = gsap.matchMedia();

    mm.add(
      {
        motionOK: "(prefers-reduced-motion: no-preference)",
        finePointer: "(hover: hover) and (pointer: fine)",
      },
      (context) => {
        const { motionOK, finePointer } = context.conditions as {
          motionOK: boolean;
          finePointer: boolean;
        };

        // Reduced motion: mascot stays static.
        if (!motionOK) return;

        // Idle float, with the floor shadow shrinking as the body rises.
        const idle = { duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 };
        gsap.to(q(".hm-float"), { y: -10, ...idle });
        gsap.to(q(".hm-shadow"), { scale: 0.82, opacity: 0.45, svgOrigin: "120 332", ...idle });
        gsap.to(q(".hm-arm-left"), { rotation: 5, svgOrigin: "68 196", ...idle, duration: 2.8 });
        gsap.to(q(".hm-arm-right"), { rotation: -5, svgOrigin: "172 196", ...idle, duration: 2.8 });

        // Blink at random intervals.
        const blink = gsap.timeline({
          repeat: -1,
          repeatDelay: 3,
          onRepeat: () => blink.repeatDelay(gsap.utils.random(2, 5.5)),
        });
        blink.to(q(".hm-eye"), {
          scaleY: 0.1,
          transformOrigin: "50% 50%",
          duration: 0.08,
          yoyo: true,
          repeat: 1,
          ease: "power1.in",
        });

        // Touch / coarse pointers: no cursor to follow, keep the idle loop only.
        if (!finePointer) return;

        const follow = { duration: 0.5, ease: "power3.out" };
        const head = q(".hm-head")[0];
        gsap.set(head, { svgOrigin: NECK });
        const setters = {
          headRot: gsap.quickTo(head, "rotation", follow),
          headX: gsap.quickTo(head, "x", follow),
          headY: gsap.quickTo(head, "y", follow),
          // Face and eyes travel further than the head shell -> reads as the head turning.
          faceX: gsap.quickTo(q(".hm-face"), "x", follow),
          faceY: gsap.quickTo(q(".hm-face"), "y", follow),
          eyesX: gsap.quickTo(q(".hm-eyes"), "x", follow),
          eyesY: gsap.quickTo(q(".hm-eyes"), "y", follow),
          earsX: gsap.quickTo(q(".hm-ears"), "x", follow),
          bodyRot: gsap.quickTo(q(".hm-body"), "rotation", { duration: 0.9, ease: "power3.out" }),
        };
        gsap.set(q(".hm-body"), { svgOrigin: "120 240" });

        const lookAt = (nx: number, ny: number) => {
          setters.headRot(nx * 9);
          setters.headX(nx * 6);
          setters.headY(ny * 4);
          setters.faceX(nx * 9);
          setters.faceY(ny * 7);
          setters.eyesX(nx * 3);
          setters.eyesY(ny * 2);
          setters.earsX(-nx * 3);
          setters.bodyRot(nx * 2.5);
        };

        let pointerX = 0;
        let pointerY = 0;
        let frame = 0;

        // Runs at most once per animation frame, regardless of mousemove rate.
        const update = () => {
          frame = 0;
          const rect = root.getBoundingClientRect();
          // Aim from the head, which sits in the upper third of the mascot.
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height * 0.3;
          const nx = gsap.utils.clamp(-1, 1, (pointerX - cx) / (window.innerWidth / 2));
          const ny = gsap.utils.clamp(-1, 1, (pointerY - cy) / (window.innerHeight / 2));
          lookAt(nx, ny);
        };

        const onPointerMove = (e: PointerEvent) => {
          pointerX = e.clientX;
          pointerY = e.clientY;
          if (!frame) frame = requestAnimationFrame(update);
        };

        // Look back to neutral when the cursor leaves the window.
        const onPointerLeave = () => {
          if (frame) cancelAnimationFrame(frame);
          frame = 0;
          lookAt(0, 0);
        };

        window.addEventListener("pointermove", onPointerMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", onPointerLeave);

        return () => {
          window.removeEventListener("pointermove", onPointerMove);
          document.documentElement.removeEventListener("pointerleave", onPointerLeave);
          if (frame) cancelAnimationFrame(frame);
        };
      },
      root
    );

    return () => mm.revert();
  }, []);

  return (
    <div ref={rootRef} className="hero-mascot">
      <svg
        className="hero-mascot-svg"
        viewBox="0 0 240 360"
        shapeRendering="geometricPrecision"
        role="img"
        aria-label="Robot mascot"
      >
        <defs>
          <linearGradient id="hm-shell" x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#ECE8F6" />
            <stop offset="100%" stopColor="#C4BCDC" />
          </linearGradient>
          <linearGradient id="hm-rim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#9E94BE" />
          </linearGradient>
          <linearGradient id="hm-bezel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B7AED3" />
            <stop offset="100%" stopColor="#E9E4F5" />
          </linearGradient>
          <linearGradient id="hm-visor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1C1726" />
            <stop offset="100%" stopColor="#07060A" />
          </linearGradient>
          <radialGradient id="hm-shadow-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CF5959" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#CF5959" stopOpacity="0" />
          </radialGradient>
          <filter id="hm-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse className="hm-shadow" cx="120" cy="332" rx="46" ry="7" fill="url(#hm-shadow-grad)" />

        <g className="hm-float">
          <g className="hm-body">
            {/* Arms */}
            <g className="hm-arm-left">
              <ellipse
                cx="56" cy="232" rx="9" ry="38"
                transform="rotate(16 56 232)"
                fill="url(#hm-shell)" {...RIM}
              />
            </g>
            <g className="hm-arm-right">
              <ellipse
                cx="184" cy="232" rx="9" ry="38"
                transform="rotate(-16 184 232)"
                fill="url(#hm-shell)" {...RIM}
              />
            </g>

            {/* Torso */}
            <path
              d="M86 183 Q120 172 154 183 Q166 187 165 199 C163 244 150 284 120 288 C90 284 77 244 75 199 Q74 187 86 183 Z"
              fill="url(#hm-shell)" {...RIM}
            />
            <path
              d="M92 196 Q104 190 114 192"
              stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.8"
            />

            {/* Neck collar */}
            <ellipse cx="120" cy="176" rx="24" ry="6" fill="#2A2436" stroke="#4A4264" strokeWidth="1" />
          </g>

          <g className="hm-head">
            {/* Ears + antennae */}
            <g className="hm-ears">
              <line x1="52" y1="96" x2="52" y2="60" stroke="#3A3350" strokeWidth="4" strokeLinecap="round" />
              <line x1="188" y1="96" x2="188" y2="60" stroke="#3A3350" strokeWidth="4" strokeLinecap="round" />
              <circle cx="52" cy="58" r="4" fill="#3A3350" />
              <circle cx="188" cy="58" r="4" fill="#3A3350" />
              <rect x="43" y="92" width="20" height="42" rx="10" fill="url(#hm-shell)" {...RIM} />
              <rect x="177" y="92" width="20" height="42" rx="10" fill="url(#hm-shell)" {...RIM} />
            </g>

            {/* Head shell */}
            <rect x="56" y="62" width="128" height="106" rx="50" fill="url(#hm-shell)" {...RIM} />
            <path
              d="M84 74 Q104 66 128 68"
              stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.9"
            />

            {/* Face screen */}
            <g className="hm-face">
              <rect x="69" y="79" width="102" height="74" rx="35" fill="url(#hm-bezel)" />
              <rect x="72" y="82" width="96" height="68" rx="32" fill="url(#hm-visor)" stroke="#2E2840" strokeWidth="1" />
              <path
                d="M86 92 Q98 86 112 87"
                stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.18"
              />
              <g className="hm-eyes" filter="url(#hm-glow)">
                <ellipse className="hm-eye" cx="100" cy="112" rx="10" ry="12" fill="#E4DAFF" />
                <ellipse className="hm-eye" cx="140" cy="112" rx="10" ry="12" fill="#E4DAFF" />
                <path d="M110 128 Q120 140 130 128 Q120 132 110 128 Z" fill="#E4DAFF" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
