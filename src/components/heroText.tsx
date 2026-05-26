
"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 2,
        ease: "easeOut",
      }}
      className="text-center"
    >
      <section className="flex justify-center">
        <p className="text-sm md:text-base font-medium text-gray-700 tracking-wide whitespace-nowrap">
          <TypeAnimation
            sequence={[
              2000,
              "Introducing our lab of interfaces where ideas, learnings, and experimentation turns into real UI.",
              2000,
            ]}
            wrapper="span"
            speed={60}
            cursor={true}
            repeat={0}
          />
        </p>
      </section>
    </motion.div>
  )
}