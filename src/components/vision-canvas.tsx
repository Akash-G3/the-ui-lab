
"use client";

import { motion } from "framer-motion";
import LeftCard from "./cards/h-card-left";
import MidCard from "./cards/h-card-mid";
import RightCard from "./cards/h-card-right";

const ease = [0.76, 0, 0.24, 1] as const;

export default function VisionCanvas() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 1.6, // 🔥 reduced heavily
        ease,
      }}
      className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,120,40,0.12),transparent_40%)]"
    >
      {/* ambient */}
      {/* <div className="absolute inset-0 " /> */}
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
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 ">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 1.65,
            ease,
          }}
          className="h-[460px] border-r border-orange-400 relative overflow-hidden"
        >
          <LeftCard />
        </motion.div>

        {/* CENTER card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 1.7,
            ease,
          }}
          className="h-[460px] border-r border-orange-400 relative overflow-hidden"
        >
          <MidCard />
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 1.75,
            ease,
          }}
          className="h-[460px] relative overflow-hidden"
        >
          <RightCard />
        </motion.div>

      </div>
    </motion.section>
  );
}

