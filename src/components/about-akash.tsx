"use client";

import { motion } from "framer-motion";
import AboutText from "./about-text";
import { aboutMessages } from "@/lib/about-messages";

export default function AboutAkash() {
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
          left-1/2
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

     <div className="w-[45%] flex justify-center items-start">
  <div className="overflow-hidden rounded-[32px]">
    <img
      src="/Avatar.png"
      alt="Avatar"
      className="
        w-full
        max-w-[400px]
        h-auto
        object-contain
        drop-shadow-[0_0_40px_rgba(255,120,20,0.25)]
        [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]
        [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]
      "
    />
  </div>
</div>
      <div className="w-[50%] h-screen">
        <AboutText data={aboutMessages.aboutme} />
      </div>

        </section>
    )
}