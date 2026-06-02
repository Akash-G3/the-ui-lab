// "use client";

// import { motion } from "framer-motion";

// const layouts = [
//   [
//     { x: 40, y: 50 },
//     { x: 150, y: 80 },
//     { x: 90, y: 180 },
//   ],
//   [
//     { x: 70, y: 50 },
//     { x: 70, y: 130 },
//     { x: 170, y: 130 },
//   ],
//   [
//     { x: 50, y: 90 },
//     { x: 150, y: 90 },
//     { x: 100, y: 180 },
//   ],
// ];

// export default function MidCard() {
//   return (
//     <div className="relative h-full w-full">

//       {layouts[0].map((_, index) => (
//         <motion.div
//           key={index}
//           animate={{
//             x: layouts.map((l) => l[index].x),
//             y: layouts.map((l) => l[index].y),
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute h-20 w-20 rounded-2xl border border-orange-100 bg-white shadow-sm"
//         />
//       ))}

//       <motion.div
//         animate={{
//           opacity: [0, 1, 0],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//         }}
//         className="absolute bottom-10 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-400"
//       />
//     </div>
//   );
// }


// "use client";

// import { motion } from "framer-motion";

// const cards = [
//   "Weather",
//   "Dashboard",
//   "Portfolio",
//   "Music",
//   "Todo",
//   "Landing",
//   "Ecommerce",
//   "Blog",
//   "Admin",
// ];

// export default function MidCard() {
//   return (
//     <div className="relative h-full w-full overflow-hidden">

//       {/* Ambient */}
//       <motion.div
//         animate={{
//           x: [-30, 40, -30],
//           y: [-20, 20, -20],
//         }}
//         transition={{
//           duration: 16,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           left-1/2
//           top-1/2
//           h-[280px]
//           w-[280px]
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-orange-300/15
//           blur-[120px]
//         "
//       />

//       {/* Masonry */}
//       <div className="absolute inset-0 p-6 pb-28">

//         <div className="grid grid-cols-3 gap-3">

//           {cards.map((card, index) => (
//             <motion.div
//               key={card}
//               initial={{
//                 opacity: 0,
//                 y: 50,
//                 scale: 0.9,
//               }}
//               animate={{
//                 opacity: [0, 1, 1],
//                 y: [50, 0, 0],
//                 scale: [0.9, 1, 1],
//               }}
//               transition={{
//                 duration: 0.8,
//                 delay: index * 0.12,
//                 repeat: Infinity,
//                 repeatDelay: 3,
//               }}
//               className={`
//                 rounded-2xl
//                 border
//                 border-black/5
//                 bg-white/80
//                 backdrop-blur-xl
//                 shadow-[0_10px_30px_rgba(0,0,0,0.05)]
//                 overflow-hidden
//                 ${
//                   index % 4 === 0
//                     ? "h-32"
//                     : index % 3 === 0
//                     ? "h-24"
//                     : "h-20"
//                 }
//               `}
//             >
//               <div className="h-full p-3">

//                 <div className="h-10 rounded-lg bg-gradient-to-br from-orange-50 to-neutral-100" />

//                 <div className="mt-3 h-2 w-3/4 rounded-full bg-neutral-200" />

//                 <div className="mt-2 h-2 w-1/2 rounded-full bg-neutral-100" />

//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>

//       {/* Counter */}
//       <motion.div
//         animate={{
//           scale: [1, 1.04, 1],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//         }}
//         className="
//           absolute
//           right-6
//           top-6
//           rounded-full
//           bg-white/80
//           backdrop-blur
//           px-4
//           py-2
//           text-xs
//           font-medium
//         "
//       >
//         27 Projects
//       </motion.div>

//       {/* Bottom */}
//       <div className="absolute bottom-0 left-0 right-0 p-6">

//         <div className="mb-4 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

//         <h3 className="text-lg font-semibold text-neutral-900">
//           Archive
//         </h3>

//         <p className="mt-2 text-sm text-neutral-500">
//           A growing collection of experiments.
//         </p>

//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cards = Array.from({ length: 6 });

const rotations = [-4, 3, -2, 5, -3, 2];

const containerVariants = {
  idle: {},
  active: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  idle: (index) => ({
    opacity: 0.55,
    scale: 0.96,
    rotate: rotations[index],
    y: 0,
  }),

  active: (index) => ({
    opacity: 1,

    y: [-40, 8, -2, 0],

    rotate: [
      rotations[index] - 8,
      rotations[index] + 2,
      rotations[index],
    ],

    scale: [0.9, 1.04, 1],

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function MidCard() {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-400/20
          blur-[120px]
        "
      />

      {/* Archive Grid */}
      <div className="absolute inset-0 p-6 pb-28">
        <motion.div
          variants={containerVariants}
          initial="idle"
          animate={active ? "active" : "idle"}
          className="grid grid-cols-2 gap-4"
        >
          {cards.map((_, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover={{
                y: -4,
                scale: 1.02,
                rotate: rotations[index] * 0.5,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-black/[0.05]
                bg-white/80
                backdrop-blur-xl
                shadow-[0_12px_30px_rgba(0,0,0,0.06)]
              "
            >
              <div className="p-3">
                {/* Thumbnail */}
                <div
                  className="
                    h-12
                    rounded-xl
                    bg-gradient-to-br
                    from-orange-50
                    via-neutral-50
                    to-neutral-100
                  "
                />

                {/* Text */}
                <div className="mt-4 h-2 w-3/4 rounded-full bg-neutral-200" />
                <div className="mt-2 h-2 w-1/2 rounded-full bg-neutral-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Counter */}
      <motion.div
        animate={
          active
            ? {
                scale: [1, 1.08, 1],
              }
            : {}
        }
        transition={{
          duration: 0.8,
        }}
        className="
          absolute
          right-6
          top-6
          rounded-full
          bg-white/80
          backdrop-blur-xl
          px-4
          py-2
          text-xs
          font-medium
          shadow-[0_8px_20px_rgba(0,0,0,0.05)]
        "
      >
        27 Projects
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="mb-4 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        <h3 className="text-lg font-semibold text-neutral-900">
          Archive
        </h3>

        <p className="mt-2 text-sm text-neutral-500">
          A growing collection of experiments.
        </p>
      </div>
    </div>
  );
}