// "use client";

// import { motion } from "framer-motion";

// const nodes = [
//   { x: 90, y: 80 },
//   { x: 180, y: 120 },
//   { x: 110, y: 220 },
//   { x: 230, y: 220 },
// ];

// export default function RightCard() {
//   return (
//     <div className="relative h-full w-full">

//       <svg className="absolute inset-0 h-full w-full">

//         <motion.line
//           x1="90"
//           y1="80"
//           x2="180"
//           y2="120"
//           stroke="#FDBA74"
//           strokeWidth="1.5"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//           }}
//         />

//         <motion.line
//           x1="180"
//           y1="120"
//           x2="230"
//           y2="220"
//           stroke="#FDBA74"
//           strokeWidth="1.5"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{
//             duration: 2,
//             delay: 0.4,
//             repeat: Infinity,
//           }}
//         />

//         <motion.line
//           x1="90"
//           y1="80"
//           x2="110"
//           y2="220"
//           stroke="#FDBA74"
//           strokeWidth="1.5"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{
//             duration: 2,
//             delay: 0.8,
//             repeat: Infinity,
//           }}
//         />
//       </svg>

//       {nodes.map((node, i) => (
//         <motion.div
//           key={i}
//           className="absolute h-4 w-4 rounded-full bg-orange-300"
//           style={{
//             left: node.x,
//             top: node.y,
//           }}
//           animate={{
//             scale: [1, 1.4, 1],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             delay: i * 0.25,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";

const snippets = [
  "<Button />",
  "<Card />",
  "<Navbar />",
  "<Dashboard />",
];

export default function RightCard() {
  return (
    <div className="relative h-full w-full overflow-hidden">

      {/* Ambient Glow */}
      <motion.div
        animate={{
          x: [-20, 30, -20],
          y: [-20, 30, -20],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-300/20
          blur-[120px]
        "
      />

      <div className="grid h-full grid-cols-2 gap-4 p-6 pb-28">

        {/* CODE EDITOR */}

        <div
          className="
            rounded-2xl
            border
            border-black/5
            bg-white/80
            backdrop-blur-xl
            overflow-hidden
          "
        >
          <div className="flex gap-2 border-b border-black/5 p-3">
            <div className="h-2 w-2 rounded-full bg-red-300" />
            <div className="h-2 w-2 rounded-full bg-yellow-300" />
            <div className="h-2 w-2 rounded-full bg-green-300" />
          </div>

          <div className="p-4 space-y-3 font-mono text-xs">

            {snippets.map((line, index) => (
              <motion.div
                key={line}
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index,
                }}
                className="text-neutral-500"
              >
                {line}
              </motion.div>
            ))}

          </div>
        </div>

        {/* LIVE PREVIEW */}

        <div
          className="
            relative
            rounded-2xl
            border
            border-black/5
            bg-white/80
            backdrop-blur-xl
            overflow-hidden
          "
        >

          {/* Navbar */}
          <motion.div
            animate={{
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              left-4
              right-4
              top-4
              h-8
              rounded-lg
              bg-orange-100
            "
          />

          {/* Card */}
          <motion.div
            animate={{
              opacity: [0, 0, 1, 1],
              scale: [0.9, 0.9, 1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              left-4
              right-4
              top-16
              h-20
              rounded-xl
              bg-neutral-100
            "
          />

          {/* Button */}
          <motion.div
            animate={{
              opacity: [0, 0, 0, 1],
              y: [10, 10, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-6
              left-1/2
              h-10
              w-24
              -translate-x-1/2
              rounded-full
              bg-orange-300
            "
          />
        </div>
      </div>

      {/* Badge */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          right-6
          top-6
          rounded-full
          bg-white/80
          px-3
          py-1
          text-xs
          backdrop-blur
        "
      >
        Live Preview
      </motion.div>

      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6">

        <div className="mb-4 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        <h3 className="text-lg font-semibold text-neutral-900">
          Creation
        </h3>

        <p className="mt-2 text-sm text-neutral-500">
          Ideas become interfaces.
        </p>

      </div>
    </div>
  );
}