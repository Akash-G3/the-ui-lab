
"use client";

import Link from "next/link";
import {
  motion,
  animate,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ROUTE = `
M460 170
C460 270 310 270 310 380
C310 470 490 470 680 470
C850 470 880 520 880 620
`;

const NODE_OFFSET_X = 160;

/* ---------------- DOT PATTERN ---------------- */

function DotPattern() {
  return (
    <div className="absolute right-8 top-8 grid grid-cols-4 gap-2">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className="h-1 w-1 rounded-full bg-neutral-300" />
      ))}
    </div>
  );
}

/* ---------------- CARD ---------------- */

function Card({
  step,
  label,
  title,
  description,
  href,
  buttonText,
  className,
}: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -10 }}
      className={className}
    >
      <div className="relative overflow-hidden rounded-[32px] border border-black/[0.05] bg-white/75 backdrop-blur-xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

        <AnimatePresence>
          {hovered && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 bg-black/20 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 z-20 flex items-center justify-center"
              >
                <Link href={href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-full bg-orange-500 px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-white shadow-[0_0_40px_rgba(249,115,22,.45)]"
                  >
                    {buttonText}
                  </motion.button>
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="relative z-0">
          <DotPattern />

          <div className="flex items-center gap-4 md:gap-5">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-orange-500">
              {step}
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-orange-500">
              {label}
            </span>
          </div>

          <div className="mt-4 md:mt-5 h-px bg-black/[0.06]" />

          <h3 className="mt-5 md:mt-7 text-xl md:text-4xl font-semibold text-neutral-700">
            {title}
          </h3>

          <p className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-neutral-500">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- MAIN ---------------- */

export default function GuideRoute() {
  const progress = useMotionValue(0);
  const pathRef = useRef<SVGPathElement>(null);

  const [orb, setOrb] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1.5,
    });

    return () => controls.stop();
  }, [progress]);

  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => {
      if (!pathRef.current) return;

      const total = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(total * v);

      setOrb({
        x: point.x,
        y: point.y,
      });
    });

    return unsubscribe;
  }, [progress]);

  return (
    <section className="relative h-[750px] w-full overflow-hidden">

      {/* SVG LAYER */}
      <svg viewBox="0 0 1200 750" className="absolute inset-0 h-full w-full">
        <defs>
          <filter id="glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path ref={pathRef} d={ROUTE} fill="none" stroke="transparent" />

        <motion.path
          d={ROUTE}
          fill="none"
          stroke="rgba(249,115,22,.12)"
          strokeWidth="18"
          strokeLinecap="round"
          filter="url(#glow)"
          style={{ pathLength: progress }}
        />

        <motion.path
          d={ROUTE}
          fill="none"
          stroke="#f97316"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="12 14"
          filter="url(#glow)"
          style={{ pathLength: progress }}
        />

        {/* MOVING ORB */}
        <circle cx={orb.x} cy={orb.y} r="18" fill="#fb923c" opacity="0.25" />
        <circle cx={orb.x} cy={orb.y} r="7" fill="#fb923c" filter="url(#glow)" />

        {/* FIXED NODES (desktop only shift) */}
        {[
          { x: 620, y: 170 },
          { x: 470, y: 380 },
          { x: 1040, y: 620 },
        ].map((node, i) => {
          const x = node.x - NODE_OFFSET_X;

          return (
            <g key={i}>
              <motion.circle
                cx={x}
                cy={node.y}
                r="16"
                fill="transparent"
                stroke="#f97316"
                strokeWidth="2"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i,
                }}
              />

              <circle cx={x} cy={node.y} r="5" fill="#f97316" />
            </g>
          );
        })}
      </svg>

      {/* CARDS (DESKTOP ABSOLUTE + MOBILE STACK) */}

      <Card
        step="01"
        label="START"
        title="Introduction"
        description="a short welcome to the lab and the way I build modern digital experiences."
        href="/"
        buttonText="Welcome"
        className="
          absolute left-1/2 top-8 w-[450px] -translate-x-1/2

          max-md:static
          max-md:translate-x-0
          max-md:w-[90%]
          max-md:mx-auto
          max-md:mt-6
        "
      />

      <Card
        step="02"
        label="EXHIBIT"
        title="Exhibition"
        description="a curated collection of interfaces, animations and frontend experiments."
        href="/exhibition"
        buttonText="View Projects"
        className="
          absolute left-[8%] top-[360px] w-[420px]

          max-md:static
          max-md:w-[90%]
          max-md:mx-auto
          max-md:mt-6
        "
      />

      <Card
        step="03"
        label="ABOUT"
        title="About"
        description="the person behind the work, the process and the philosophy driving each project."
        href="/about"
        buttonText="Meet The Builder"
        className="
          absolute right-[8%] bottom-8 w-[420px]

          max-md:static
          max-md:w-[90%]
          max-md:mx-auto
          max-md:mt-6
        "
      />
    </section>
  );
}