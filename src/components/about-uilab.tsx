
"use client";

import { motion } from "framer-motion";

import AboutMeta from "./about-meta"

export default function AboutUILab() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex">
                 {/* Ghost Word */}
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
          left-2/5
          top-2/5
          hidden
          -translate-x-1/2
          -translate-y-1/2
          select-none
          text-[20rem]
          font-black
          tracking-[-0.12em]
          text-black/[0.03]
          lg:block
        "
      >
        ABOUT
      </motion.span>
            <div className="w-[45%] h-screen">
            <AboutMeta />
            </div>
            <div className="w-[45%] h-screen">

            </div>

        </section>
    )
}