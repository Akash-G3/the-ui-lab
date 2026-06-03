
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const experiments = [
  { title: "refokus", x: 40, y: 90 },
  { title: "obys", x: 230, y: 70 },
  { title: "lenis-scroll", x: 45, y: 280 },
  { title: "layerd UI", x: 240, y: 260 },
];

export default function MidCard() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => (p + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const centerX = 180;
  const centerY = 190;

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* soft orange glow (background only) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          w-[300px]
          h-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white-400/20
          blur-[110px]
          pointer-events-none
        "
      />

      {/* title */}
      <div className="absolute top-5 left-5 z-20">
        <p className="text-[10px] uppercase tracking-[0.25em] text-orange-400/70">
          UI Lab Evolution
        </p>

        <p className="text-xs text-zinc-500 mt-1">
          experiments become systems
        </p>
      </div>

      {/* experiment cards */}
      <AnimatePresence>
        {phase < 2 &&
          experiments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
              }}
              transition={{
                delay: i * 0.08,
              }}
              className="
                absolute
                w-[110px]
                h-[80px]
                rounded-xl
                border
                border-black/10
                
                backdrop-blur-md
                shadow-sm
              "
              style={{
                left: item.x,
                top: item.y,
              }}
            >
              <div className="h-11 bg-orange-400/10 rounded-t-xl bg-orange-400" />

              <p className="text-[11px] text-zinc-700 px-3 pt-2">
                {item.title}
              </p>
            </motion.div>
          ))}
      </AnimatePresence>

      {/* connection lines */}
      {phase >= 1 && phase < 3 && (
        <svg className="absolute inset-0 w-full h-full">
          {experiments.map((item) => (
            <motion.line
              key={item.title}
              x1={item.x + 55}
              y1={item.y + 35}
              x2={centerX}
              y2={centerY}
              stroke="rgba(251,146,60,.35)"
              strokeWidth="1.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9 }}
            />
          ))}
        </svg>
      )}

      {/* merging cards */}
      {phase >= 2 && phase < 3 && (
        <>
          {experiments.map((item) => (
            <motion.div
              key={item.title}
              initial={{
                x: item.x,
                y: item.y,
                opacity: 1,
              }}
              animate={{
                x: centerX - 55,
                y: centerY - 35,
                opacity: 0,
                scale: 0.3,
              }}
              transition={{
                duration: 0.9,
              }}
              className="
                absolute
                w-[110px]
                h-[70px]
                rounded-xl
                border
                border-black/10
               
                backdrop-blur-md
              "
            />
          ))}
        </>
      )}

      {/* final UI LAB card */}
      <AnimatePresence>
        {phase >= 3 && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              w-[300px]
              h-[260px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-2xl
              border
              border-black/10
              bg-white/70
              backdrop-blur-xl
              shadow-lg
              overflow-hidden
            "
          >
            <div className="h-12 border-b border-black/10 px-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-orange-400 mr-2" />
              <span className="text-sm text-zinc-900 font-medium">
                UI LAB
              </span>
            </div>

            <div className="p-4">
              <div className="flex gap-6">
                <div>
                  <p className="text-xl text-zinc-900 font-bold">
                    10+
                  </p>
                  <p className="text-[10px] text-zinc-500 uppercase">
                    Experiments
                  </p>
                </div>

                <div>
                  <p className="text-xl text-zinc-900 font-bold">
                    7+
                  </p>
                  <p className="text-[10px] text-zinc-500 uppercase">
                    Animations
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-5">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.4, 0.9, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                    className="
                      h-10
                      rounded-lg
                      bg-black/[0.03]
                      border
                      border-black/5
                    "
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* bottom caption */}
      <div className="absolute bottom-5 left-5 right-5">
        <motion.div
          key={phase}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-zinc-500"
        >
          {phase < 1 && "Collecting experiments"}
          {phase === 1 && "Connecting ideas"}
          {phase === 2 && "Merging into system"}
          {phase === 3 && "UI Lab emerges"}
        </motion.div>
      </div>
    </div>
  );
}