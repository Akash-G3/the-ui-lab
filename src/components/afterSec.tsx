

"use client";

import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1] as const;

export default function AfterSec() {
  return (
    <section className="relative flex h-[30vh] items-center justify-center overflow-hidden px-6">

      {/* LIGHT EDITORIAL BASE (same as ExhibitionShowcase) */}
      <div className="absolute inset-0 -z-10 bg-[#f7f7f4]" />

      {/* ambient orange glow */}
      <div className="absolute left-1/2 top-[-20%] -z-10 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-orange-100 blur-[120px]" />

      {/* soft neutral glow */}
      {/* <div className="absolute bottom-[-30%] right-[10%] -z-10 h-[250px] w-[250px] rounded-full bg-neutral-300 blur-[100px]" /> */}

      {/* light grid (same system) */}
      {/* <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      /> */}

      {/* vignette */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.03))]" />

      {/* FLOATING CONTENT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
        className="relative text-center rounded-[2rem]  px-10 py-8 shadow-[0_10px_60px_rgba(0,0,0,0.05)] backdrop-blur-xl"
      >

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-neutral-800">
          intro&apos;s over{" "}
          <span className="text-orange-500">_gentleman</span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-4 text-sm md:text-[15px] leading-7 tracking-[-0.01em] text-neutral-500">
          enough of introduction — explore the work ahead.
        </p>

      </motion.div>

    </section>
  );
}