
"use client"

import { motion } from "framer-motion"

const ease = [0.76, 0, 0.24, 1] as const;

export default function ExhibitTitle() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0f0f10] px-6 text-white">

      {/* radial ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,120,40,0.16),transparent_35%)]" />

      {/* subtle mesh */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* moving glow */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col">

        {/* top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease,
          }}
          className="mb-10 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-white/35 md:text-xs"
        >
          <span>curated digital exhibition</span>

          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-white/15" />
            <span>2026</span>
          </div>
        </motion.div>

        {/* main hero */}
        <div className="relative">

          {/* giant background text */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{
              duration: 2,
              delay: 0.4,
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none text-[18rem] font-semibold tracking-[-0.12em] text-white lg:block"
          >
            EXHIBIT
          </motion.span>

          {/* line 1 */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: "120%",
                rotate: 4,
              }}
              animate={{
                y: "0%",
                rotate: 0,
              }}
              transition={{
                duration: 1.4,
                ease,
              }}
              className="text-[18vw] font-semibold leading-[0.85] tracking-[-0.09em] text-white sm:text-[8rem] md:text-[10rem] lg:text-[11rem]"
            >
              exhibition
            </motion.h1>
          </div>

          {/* line 2 */}
          <div className="overflow-hidden">
            <motion.div
              initial={{
                y: "120%",
                rotate: 4,
              }}
              animate={{
                y: "0%",
                rotate: 0,
              }}
              transition={{
                duration: 1.4,
                delay: 0.08,
                ease,
              }}
              className="relative inline-block"
            >
              <h1 className="relative text-[18vw] font-semibold leading-[0.85] tracking-[-0.09em] sm:text-[8rem] md:text-[10rem] lg:text-[11rem]">

                {/* outlined layer */}
                <span className="absolute left-0 top-0 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]">
                  unfolds
                </span>

                {/* filled layer */}
                <span className="relative bg-gradient-to-b from-orange-300 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                  unfolds
                </span>
              </h1>

              {/* light beam */}
              <motion.div
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{
                  delay: 1.2,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-[18%] skew-x-[-18deg] bg-white/20 blur-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* bottom row */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease,
          }}
          className="mt-14 grid gap-10 md:grid-cols-2"
        >

          {/* description */}
          <p className="max-w-xl text-sm leading-8 tracking-[-0.01em] text-white/45 md:text-[15px]">
            A curated archive of interfaces, interactions, and immersive
            experiments — crafted through exploration, visual restraint,
            motion systems, and a constant pursuit of refined digital
            experiences.
          </p>

          {/* side detail */}
          <div className="flex items-end justify-start md:justify-end">
            <div className="space-y-4 text-left md:text-right">
              <div className="h-px w-24 bg-white/10 md:ml-auto" />

              <p className="text-[11px] uppercase tracking-[0.28em] text-white/28">
                selected works & explorations
              </p>
            </div>
          </div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.6,
            duration: 1,
          }}
          className="mt-20 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
              scroll
            </span>

            <div className="h-14 w-px bg-gradient-to-b from-white/0 via-white/30 to-white/0" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}