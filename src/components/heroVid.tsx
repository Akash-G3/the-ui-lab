

"use client";

import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1] as const;

export default function HeroVid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 1.6, // 🔥 reduced heavily
        ease,
      }}
      className="relative w-full px-10 pb-8 overflow-hidden"
    >
      {/* ambient */}
      <div className="absolute inset-0 " />
      {/* bg-[radial-gradient(circle_at_center,rgba(255,120,40,0.12),transparent_40%)] */}

      {/* <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      /> */}

      {/* GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 1.65,
            ease,
          }}
          className="h-[460px] rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl shadow-black/30 relative overflow-hidden"
        />

        {/* CENTER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 1.7,
            ease,
          }}
          className="h-[460px] rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-md shadow-2xl shadow-black/40 relative overflow-hidden scale-[1.02]"
        />

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 1.75,
            ease,
          }}
          className="h-[460px] rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl shadow-black/30 relative overflow-hidden"
        />

      </div>
    </motion.section>
  );
}