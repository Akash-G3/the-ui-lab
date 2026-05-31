
"use client";

import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1] as const;

export default function AboutMeta() {
  return (
    <section className="relative flex h-full flex-col mt-[4vw] overflow-hidden">

      <div className="relative z-10">
        {/* Heading */}
        <div className="relative">

          {/* About */}
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
                text-neutral-800
                sm:text-[8rem]
                md:text-[10rem]
                lg:text-[11rem]
                ml-[6vw]
              "
            >
              about
            </motion.h1>
          </div>

          {/* ui.lab */}
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
              className="relative ml-[8vw] inline-block"
            >
              <h1
                className="
                  relative
                  text-[18vw]
                  font-black
                  leading-[0.90]
                  tracking-[-0.02em]
                  sm:text-[8rem]
                  md:text-[10rem]
                  lg:text-[11rem]
                "
              >
                 <span className="text-neutral-800">ui</span>
                <span className="absolute left-0 top-0 text-transparent [-webkit-text-stroke:1px_rgba(249,115,22,0.15)]">
                  ui.lab
                </span>

                <span className="relative bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                  .lab
                </span>
              </h1>

              {/* Shine Sweep */}
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

        {/* Bottom Accent */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.9,
            ease,
          }}
          className="mt-8 ml-[9.5vw]"
        >
          <div className="h-px w-24 bg-black/10" />
<p
  className="
    inline-block
    border-l-2
    border-orange-500
    pl-3
    text-[18px]
    text-neutral-700

    flex items-center justify-between uppercase tracking-[0.35em] md:text-xs
     "
>
  Where curiosity becomes{" "}
  <span className="text-orange-500 font-medium">
    craft.
  </span>
</p>
        </motion.div>
      </div>
    </section>
  );
}