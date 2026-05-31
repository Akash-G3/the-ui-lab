

"use client";

import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1] as const;

export default function Title() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#f6f3ee] py-24">

      {/* radial ambience */}
      <div className="absolute inset-0" />   
      {/* bg-[radial-gradient(circle_at_center,rgba(255,120,40,0.12),transparent_40%)] */}

      {/* subtle mesh */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* floating glow */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full text-center">

        {/* ghost background text */}
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
    whitespace-nowrap
    text-[20rem]
    font-black
    tracking-[-0.14em]
    text-black/[0.03]
    lg:block
  "
>
  UI LAB
</motion.span>

        {/* TITLE WRAPPER */}
        <div className="relative inline-block overflow-hidden">

          {/* base layer */}
          <motion.h1
            initial={{ y: "120%", rotate: 3 }}
            animate={{ y: "0%", rotate: 0 }}
            transition={{ duration: 1.4, ease }}
           className="text-[14vw] md:text-8xl lg:text-9xl font-semibold tracking-[-0.04em] text-[#e7c9b2]"
          >
            the.ui<span className="text-orange-300">.lab</span>
          </motion.h1>

          {/* overlay reveal layer */}
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease,
            }}
            className="
              absolute
              inset-0
              overflow-hidden
              whitespace-nowrap
              text-[14vw]
              md:text-8xl
              lg:text-9xl
              font-semibold
              tracking-[-0.04em]
              text-neutral-800
            "
          >
            the.ui<span className="text-orange-500">.lab</span>

            {/* shimmer sweep */}
            <motion.span
              initial={{ x: "-120%" }}
              animate={{ x: "220%" }}
              transition={{
                delay: 1,
                duration: 1.6,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 left-0 w-[30%] rotate-12 bg-white/10 blur-2xl"
            />
          </motion.h1>
        </div>

        {/* caption */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-6 text-[11px] uppercase tracking-[0.35em] text-neutral-500"
        >
          crafted interfaces • motion systems • experiments
        </motion.p>
      </div>
    </section>
  );
}











