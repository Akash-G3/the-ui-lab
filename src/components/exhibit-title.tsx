
"use client"

import { motion } from "framer-motion"

const ease = [0.76, 0, 0.24, 1] as const

export default function ExhibitTitle() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f6f3ee] px-6 text-neutral-900">

      {/* Background */}
      <div className="absolute inset-0">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "58px 58px",
          }}
        />

        {/* Center Atmosphere */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-orange-300/25
            blur-[180px]
          "
        />

        {/* Peach Mesh */}
        <div
          className="
            absolute
            -left-32
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-orange-200/20
            blur-[140px]
          "
        />

        {/* Neutral Mesh */}
        <div
          className="
            absolute
            bottom-0
            right-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-neutral-300/20
            blur-[120px]
          "
        />

        {/* Noise */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            mix-blend-multiply
            [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]
          "
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col">

        {/* Top Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease,
          }}
          className="mb-10 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-neutral-500 md:text-xs"
        >
          <span>curated digital exhibition</span>

          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-black/10" />
            <span>2026</span>
          </div>
        </motion.div>

        {/* Main Hero */}
        <div className="relative">

          {/* Background Word */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              delay: 0.4,
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              -translate-x-1/2
              -translate-y-1/2
              select-none
              text-[18rem]
              font-black
              tracking-[-0.12em]
              text-black/[0.03]
              lg:block
            "
          >
            EXHIBIT
          </motion.span>

          {/* Heading 1 */}
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
              className="
                text-[18vw]
                font-black
                leading-[0.85]
                tracking-[-0.09em]
                text-neutral-900
                sm:text-[8rem]
                md:text-[10rem]
                lg:text-[11rem]
              "
            >
              exhibition
            </motion.h1>
          </div>

          {/* Heading 2 */}
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
              <h1
                className="
                  relative
                  text-[18vw]
                  font-black
                  leading-[0.85]
                  tracking-[-0.09em]
                  sm:text-[8rem]
                  md:text-[10rem]
                  lg:text-[11rem]
                "
              >
                <span className="absolute left-0 top-0 text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,0.12)]">
                  unfolds
                </span>

                <span className="relative bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                  unfolds
                </span>
              </h1>

              <motion.div
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{
                  delay: 1.2,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-y-0
                  w-[18%]
                  skew-x-[-18deg]
                  bg-white/50
                  blur-2xl
                "
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Row */}
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
          <p className="max-w-xl text-sm leading-8 tracking-[-0.01em] text-neutral-600 md:text-[15px]">
            a curated archive of interfaces, interactions, and immersive
            experiments — crafted through exploration, visual restraint,
            motion systems, and a constant pursuit of refined digital
            experiences.
          </p>

          <div className="flex items-end justify-start md:justify-end">
            <div className="space-y-4 text-left md:text-right">
              <div className="h-px w-24 bg-black/10 md:ml-auto" />

              <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                selected works & explorations
              </p>
            </div>
          </div>
        </motion.div>

        {/* Scroll */}
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
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              scroll
            </span>

            <div className="h-14 w-px bg-gradient-to-b from-black/0 via-black/30 to-black/0" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}