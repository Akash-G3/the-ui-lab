
// "use client";

// import { motion, animate, useMotionValue } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const cards = [
//   { id: 1, title: "Project Alpha", img: "https://picsum.photos/900/600?1" },
//   { id: 2, title: "Neon UI", img: "https://picsum.photos/900/600?2" },
//   { id: 3, title: "3D Dashboard", img: "https://picsum.photos/900/600?3" },
//   { id: 4, title: "Motion Lab", img: "https://picsum.photos/900/600?4" },
//   { id: 5, title: "Portfolio X", img: "https://picsum.photos/900/600?5" },
// ];

// const CARD_WIDTH = 240;
// const CARD_HEIGHT = 300;
// const GAP = 18;
// const ITEM = CARD_WIDTH + GAP;

// export default function LeftCard() {
//   const containerRef = useRef(null);
//   const x = useMotionValue(0);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // LEFT → RIGHT AUTO FLOW
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
//     }, 2400);

//     return () => clearInterval(interval);
//   }, []);

//   // smooth camera movement
//   useEffect(() => {
//     animate(x, -activeIndex * ITEM, {
//       type: "spring",
//       stiffness: 120,
//       damping: 20,
//       mass: 1,
//     });
//   }, [activeIndex]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-full overflow-hidden flex items-center justify-center"
//     >
//       {/* ambient glow */}
//       <div className="absolute inset-0 bg-gradient-radial from-orange-400/5 via-transparent to-transparent" />

//       {/* rail */}
//       <motion.div
//         className="flex gap-[28px] absolute left-1/2 top-1/2 -translate-y-1/2"
//         style={{ x, xPercent: -50 }}
//       >
//         {cards.map((card, i) => (
//           <FocusCard
//             key={card.id}
//             card={card}
//             index={i}
//             activeIndex={activeIndex}
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// /* ---------------- CARD ---------------- */

// function FocusCard({ card, index, activeIndex }) {
//   const distance = Math.abs(index - activeIndex);

//   // 🎯 smooth focus curve (no hard jumps)
//   const scale =
//     distance === 0 ? 1.22 :
//     distance === 1 ? 0.95 :
//     0.82;

//   const opacity =
//     distance === 0 ? 1 :
//     distance === 1 ? 0.55 :
//     0.25;

//   const y =
//     distance === 0 ? -12 : 0;

//   const blur =
//     distance === 0 ? "0px" :
//     distance === 1 ? "1px" :
//     "2px";

//   return (
//     <motion.div
//       animate={{ scale, opacity, y }}
//       transition={{
//         duration: 0.65,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       style={{
//         width: CARD_WIDTH,
//         height: CARD_HEIGHT,
//         filter: `blur(${blur})`,
//         zIndex: distance === 0 ? 50 : 1,
//       }}
//       className="relative rounded-2xl overflow-hidden"
//     >
//       {/* image */}
//       <img
//         src={card.img}
//         className="w-full h-full object-cover scale-[1.08]"
//       />

//       {/* cinematic overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

//       {/* top bar */}
//       <div className="absolute top-0 left-0 right-0 h-10 bg-black/40 backdrop-blur-md flex items-center px-3 gap-2">
//         <span className="w-2 h-2 rounded-full bg-red-400/80" />
//         <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
//         <span className="w-2 h-2 rounded-full bg-green-400/80" />

//         <div className="ml-3 text-[10px] text-white/40">
//           preview.dev
//         </div>
//       </div>

//       {/* title only center */}
//       {distance === 0 && (
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="absolute bottom-4 left-4 text-white"
//         >
//           <p className="text-sm font-medium tracking-tight">
//             {card.title}
//           </p>
//           <p className="text-[10px] text-white/50">
//             click to explore
//           </p>
//         </motion.div>
//       )}

//       {/* glow depth */}
//       <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgba(255,120,40,0.08)]" />
//     </motion.div>
//   );
// }



// "use client";

// import { motion, animate, useMotionValue } from "framer-motion";
// import { useEffect, useState } from "react";

// const cards = [
//   { id: 1, title: "Project Alpha", img: "https://picsum.photos/900/600?1" },
//   { id: 2, title: "Neon UI", img: "https://picsum.photos/900/600?2" },
//   { id: 3, title: "3D Dashboard", img: "https://picsum.photos/900/600?3" },
//   { id: 4, title: "Motion Lab", img: "https://picsum.photos/900/600?4" },
//   { id: 5, title: "Portfolio X", img: "https://picsum.photos/900/600?5" },
// ];

// const CARD_WIDTH = 360;
// const CARD_HEIGHT = 240;
// const GAP = 94;
// const ITEM = CARD_WIDTH + GAP;

// /* ---------------- MAIN ---------------- */

// export default function LeftCard() {
//   const x = useMotionValue(0);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // LEFT → RIGHT FLOW
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
//     }, 2400);

//     return () => clearInterval(interval);
//   }, []);

//   // camera movement
//   useEffect(() => {
//     animate(x, -activeIndex * ITEM, {
//       type: "spring",
//       stiffness: 120,
//       damping: 20,
//       mass: 1,
//     });
//   }, [activeIndex]);

//   return (
//     <div className="relative w-full h-full overflow-visible flex items-center justify-center">
      
//       {/* ambient glow */}
//       <div className="absolute inset-0 bg-gradient-radial from-orange-400/5 via-transparent to-transparent" />

//       {/* rail */}
//       <motion.div
//         className="flex gap-[22px] absolute left-1/2 top-1/2 -translate-y-1/2"
//         style={{ x }}
//       >
//         {cards.map((card, i) => (
//           <FocusCard
//             key={card.id}
//             card={card}
//             index={i}
//             activeIndex={activeIndex}
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// /* ---------------- FOCUS CARD (INLINE) ---------------- */

// function FocusCard({ card, index, activeIndex }) {
//   const distance = Math.abs(index - activeIndex);

//   const scale =
//     distance === 0 ? 1.28 :
//     distance === 1 ? 0.86 :
//     0.72;

//   const opacity =
//     distance === 0 ? 1 :
//     distance === 1 ? 0.55 :
//     0.2;

//   const blur =
//     distance === 0 ? "0px" :
//     distance === 1 ? "2px" :
//     "3px";

//   const y =
//     distance === 0 ? -14 : 0;

//   return (
//     <motion.div
//       animate={{ scale, opacity, y }}
//       transition={{
//         duration: 0.65,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       style={{
//         width: CARD_WIDTH,
//         height: CARD_HEIGHT,
//         filter: `blur(${blur})`,
//         zIndex: distance === 0 ? 50 : 1,
//       }}
//       className="relative rounded-2xl overflow-hidden bg-black/20"
//     >

//       {/* 🔥 browser frame */}
//       <div className="absolute top-0 left-0 right-0 h-9 bg-black/50 backdrop-blur-md flex items-center px-3 gap-2 z-20">
//         <span className="w-2 h-2 rounded-full bg-red-400/80" />
//         <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
//         <span className="w-2 h-2 rounded-full bg-green-400/80" />
//         <div className="ml-2 text-[10px] text-white/40">
//           {card.title.toLowerCase().replace(" ", "")}.dev
//         </div>
//       </div>

//       {/* 🔥 image container (important fix) */}
//       <div className="absolute inset-0 pt-9">
//         <img
//           src={card.img}
//           className="w-full h-full object-cover object-top scale-[1.05]"
//         />
//       </div>

//       {/* 🔥 depth overlay (better realism) */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

//       {/* center text */}
//       {distance === 0 && (
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="absolute bottom-4 left-4 text-white z-30"
//         >
//           <p className="text-sm font-medium tracking-tight">
//             {card.title}
//           </p>
//           <p className="text-[10px] text-white/50">
//             live preview
//           </p>
//         </motion.div>
//       )}

//       {/* subtle inner glow */}
//       <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_90px_rgba(255,120,40,0.10)]" />

//     </motion.div>
//   );
// }





"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const cards = [
  {
    id: 1,
    title: "Project Alpha",
    img: "https://picsum.photos/900/600?1",
  },
  {
    id: 2,
    title: "Neon UI",
    img: "https://picsum.photos/900/600?2",
  },
  {
    id: 3,
    title: "3D Dashboard",
    img: "https://picsum.photos/900/600?3",
  },
  {
    id: 4,
    title: "Motion Lab",
    img: "https://picsum.photos/900/600?4",
  },
  {
    id: 5,
    title: "Portfolio X",
    img: "https://picsum.photos/900/600?5",
  },
];

const POSITIONS = {
  left: {
    x: -240,
    scale: 0.75,
    opacity: 0.25,
    filter: "blur(4px)",
    zIndex: 1,
  },

  center: {
    x: 0,
    y: -10,
    scale: 1.15,
    opacity: 1,
    filter: "blur(0px)",
    zIndex: 10,
  },

  right: {
    x: 240,
    scale: 0.75,
    opacity: 0.25,
    filter: "blur(4px)",
    zIndex: 1,
  },
};

export default function LeftCard() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  const prev =
    (active - 1 + cards.length) % cards.length;

  const next =
    (active + 1) % cards.length;

  const visibleCards = [
    {
      ...cards[prev],
      slot: "left",
    },
    {
      ...cards[active],
      slot: "center",
    },
    {
      ...cards[next],
      slot: "right",
    },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">

      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,40,0.08),transparent_65%)]" />

      <AnimatePresence mode="popLayout">
        {visibleCards.map((card) => (
          <motion.div
            key={`${card.id}-${card.slot}`}
            layout
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            animate={POSITIONS[card.slot]}
            exit={{
              opacity: 0,
              scale: 0.6,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute"
            style={{
              width: 360,
              height: 240,
            }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm">

              {/* browser frame */}
              <div className="absolute top-0 left-0 right-0 h-9 bg-black/50 backdrop-blur-md flex items-center px-3 gap-2 z-20">
                <span className="w-2 h-2 rounded-full bg-red-400/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                <span className="w-2 h-2 rounded-full bg-green-400/80" />

                <div className="ml-2 text-[10px] text-white/40">
                  {card.title.toLowerCase().replace(/\s/g, "")}.dev
                </div>
              </div>

              {/* image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover object-top"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* center card content */}
              {card.slot === "center" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                  }}
                  className="absolute bottom-4 left-4 z-30 text-white"
                >
                  <p className="text-sm font-medium tracking-tight">
                    {card.title}
                  </p>

                  <p className="text-[11px] text-white/50">
                    Live Preview
                  </p>
                </motion.div>
              )}

              {/* glow */}
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_90px_rgba(255,120,40,0.08)]" />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}