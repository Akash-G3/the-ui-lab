
"use client";

import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1] as const;

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 1.6,
        ease,
      }}
      className="text-center mt-6"
    >
      {/* MASK WRAPPER */}
      <div className="overflow-hidden inline-block">
        <motion.p
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 1.2,
            delay: 1.9,
            ease,
          }}
          className="
            max-w-2xl
            text-sm md:text-base
            font-medium
            leading-7
            tracking-[-0.01em]
            text-white/35
          "
        >
          Introducing our lab of interfaces where ideas, learnings, and
          experimentation turn into real UI systems.
        </motion.p>
      </div>
    </motion.div>
  );
}