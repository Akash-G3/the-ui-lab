
// "use client"

// import { motion } from "framer-motion"
// import { TypeAnimation } from "react-type-animation"

// export default function HeroText() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.8,
//         delay: 2,
//         ease: "easeOut",
//       }}
//       className="text-center"
//     >
//       <section className="flex justify-center">
//         <p className="text-sm md:text-base font-medium text-gray-500 tracking-wide whitespace-nowrap">
//           <TypeAnimation
//             sequence={[
//               2000,
//               "Introducing our lab of interfaces where ideas, learnings, and experimentation turns into real UI.",
//               2000,
//             ]}
//             wrapper="span"
//             speed={60}
//             cursor={true}
//             repeat={0}
//           />
//         </p>
//       </section>
//     </motion.div>
//   )
// }



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