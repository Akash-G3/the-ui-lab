//     "use client";

// import { motion } from "framer-motion";

// const ease = [0.22, 1, 0.36, 1] as const;

// export default function AboutText() {
//   return (
//     <div className="relative flex min-h-screen items-center">

//       {/* Ambient Glow */}
//       <motion.div
//         animate={{
//           scale: [1, 1.08, 1],
//           opacity: [0.3, 0.55, 0.3],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           left-1/2
//           top-1/2
//           -z-10
//           h-[500px]
//           w-[500px]
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-orange-300/20
//           blur-[120px]
//         "
//       />

//       {/* Sender Anchor */}
//       <div className="absolute left-0 top-24 z-20 flex items-center">
//         <div className="h-3 w-3 rounded-full bg-orange-500 shadow-lg shadow-orange-500/40" />

//         <div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent" />
//       </div>

//       {/* Message Panel */}
//       <motion.div
//         initial={{
//           opacity: 0,
//           x: 40,
//           scale: 0.96,
//         }}
//         animate={{
//           opacity: 1,
//           x: 0,
//           scale: 1,
//           y: [0, -4, 0],
//         }}
//         transition={{
//           opacity: {
//             duration: 1.1,
//             ease,
//           },
//           x: {
//             duration: 1.1,
//             ease,
//           },
//           scale: {
//             duration: 1.1,
//             ease,
//           },
//           y: {
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           },
//         }}
//         className="
//           relative
//           ml-16
//           w-full
//           overflow-hidden
//           rounded-[42px]
//           border
//           border-white/30
//           bg-white/35
//           backdrop-blur-2xl
//           px-10
//           py-12
//           shadow-[0_40px_120px_rgba(0,0,0,0.08)]
//         "
//       >
//         {/* Background Quote */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             right-6
//             top-0
//             select-none
//             text-[14rem]
//             font-black
//             leading-none
//             text-black/[0.03]
//           "
//         >
//           "
//         </div>

//         {/* Top Meta */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             delay: 0.4,
//             duration: 0.8,
//           }}
//           className="mb-10 flex items-center justify-between"
//         >
//           <div>
//             <p className="text-sm font-medium text-neutral-800">
//               Akash
//             </p>

//             <p
//               className="
//                 mt-1
//                 text-[11px]
//                 uppercase
//                 tracking-[0.25em]
//                 text-neutral-500
//               "
//             >
//               software engineer
//             </p>
//           </div>

//           <p
//             className="
//               text-[10px]
//               uppercase
//               tracking-[0.35em]
//               text-neutral-400
//             "
//           >
//             personal note
//           </p>
//         </motion.div>

//         {/* Opening Statement */}
//         <motion.p
//           initial={{
//             opacity: 0,
//             y: 24,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.4,
//           }}
//           transition={{
//             duration: 0.8,
//             ease,
//           }}
//           className="
//             text-[1.45rem]
//             leading-[1.8]
//             tracking-[-0.04em]
//             text-neutral-800
//           "
//         >
//           I build thoughtful digital experiences where
//           design, engineering, and storytelling intersect.
//         </motion.p>

//         {/* Paragraph 2 */}
//         <motion.p
//           initial={{
//             opacity: 0,
//             y: 24,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.4,
//           }}
//           transition={{
//             delay: 0.15,
//             duration: 0.8,
//             ease,
//           }}
//           className="
//             mt-8
//             text-[1.05rem]
//             leading-[2]
//             text-neutral-600
//           "
//         >
//           Every project begins with curiosity and evolves
//           through experimentation, iteration, and
//           craftsmanship. I enjoy transforming ideas into
//           systems that feel intuitive, refined, and
//           meaningful.
//         </motion.p>

//         {/* Paragraph 3 */}
//         <motion.p
//           initial={{
//             opacity: 0,
//             y: 24,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.4,
//           }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease,
//           }}
//           className="
//             mt-8
//             text-[1.05rem]
//             leading-[2]
//             text-neutral-600
//           "
//         >
//           My work sits at the intersection of frontend
//           engineering, backend systems, motion design,
//           user experience, and visual storytelling.
//           I'm driven by the challenge of creating products
//           that are both functional and memorable.
//         </motion.p>

//         {/* Signature */}
//         <motion.div
//           initial={{
//             opacity: 0,
//           }}
//           whileInView={{
//             opacity: 1,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             delay: 0.6,
//             duration: 0.8,
//           }}
//           className="mt-14"
//         >
//           <motion.div
//             initial={{
//               width: 0,
//             }}
//             whileInView={{
//               width: 80,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 1,
//               delay: 0.7,
//               ease,
//             }}
//             className="h-px bg-orange-500/40"
//           />

//           <p className="mt-4 text-sm text-neutral-500">
//             — Akash
//           </p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }



// "use client";

// import { motion } from "framer-motion";

// const ease = [0.22, 1, 0.36, 1] as const;

// type AboutMessageData = {
//   name: string;
//   role: string;
//   label?: string;
//   heading: string;
//   paragraphs: string[];
//   signature?: string;
// };

// export default function AboutMessage({
//   data,
// }: {
//   data: AboutMessageData;
// }) {
//   return (
//     <div className="relative flex min-h-screen items-center">

//       {/* Glow */}
//       <motion.div
//         animate={{
//           scale: [1, 1.08, 1],
//           opacity: [0.3, 0.55, 0.3],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/20 blur-[120px]"
//       />

//       {/* Panel */}
//       <motion.div
//         initial={{ opacity: 0, x: 40, scale: 0.96 }}
//         animate={{ opacity: 1, x: 0, scale: 1 }}
//         transition={{ duration: 1.1, ease }}
//         className="ml-16 w-full rounded-[42px] border border-white/30 bg-white/35 backdrop-blur-2xl px-10 py-12"
//       >
//         {/* Meta */}
//         <div className="mb-10 flex justify-between">
//           <div>
//             <p className="text-sm font-medium text-neutral-800">
//               {data.name}
//             </p>
//             <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
//               {data.role}
//             </p>
//           </div>

//           <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
//             {data.label}
//           </p>
//         </div>

//         {/* Heading */}
//         <p className="text-[1.45rem] leading-[1.8] text-neutral-800">
//           {data.heading}
//         </p>

//         {/* Paragraphs */}
//         {data.paragraphs.map((text, i) => (
//           <p key={i} className="mt-8 text-[1.05rem] leading-[2] text-neutral-600">
//             {text}
//           </p>
//         ))}

//         {/* Signature */}
//         <div className="mt-14">
//           <div className="h-px w-20 bg-orange-500/40" />
//           <p className="mt-4 text-sm text-neutral-500">
//             — {data.signature || data.name}
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
    





"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type AboutMessageData = {
  name: string;
  role: string;
  label?: string;
  heading: string;
  paragraphs: string[];
  signature?: string;
};

export default function AboutMessage({
  data,
}: {
  data: AboutMessageData;
}) {
  return (
    <div className="relative flex min-h-screen items-center">

      {/* Ambient Glow (UNCHANGED vibe) */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-300/20
          blur-[120px]
        "
      />

      {/* Sender Anchor (UNCHANGED EXACT POSITION & STYLE) */}
      <div className="absolute left-0 top-24 z-20 flex items-center">
        <div className="h-3 w-3 rounded-full bg-orange-500 shadow-lg shadow-orange-500/40" />
        <div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent" />
      </div>

      {/* Message Panel (ONLY subtle refinement) */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.1, ease }}
        className="
          relative
          ml-16
          w-full
          overflow-hidden
          rounded-[42px]
          border
          border-white/30
          bg-white/35
          backdrop-blur-2xl
          px-10
          py-12
          shadow-[0_40px_120px_rgba(0,0,0,0.08)]
        "
      >
        {/* Background Quote (unchanged) */}
        <div className="pointer-events-none absolute right-6 top-0 select-none text-[14rem] font-black leading-none text-black/[0.03]">
          "
        </div>

        {/* Meta (slight typography refinement only) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-10 flex items-center justify-between"
        >
          <div>
            <p className="text-sm font-medium text-neutral-900">
              {data.name}
            </p>

            <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
              {data.role}
            </p>
          </div>

          <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
            {data.label ?? "personal note"}
          </p>
        </motion.div>

        {/* Heading (kept same, only readability polish) */}
        <p className="text-[1.45rem] leading-[1.8] tracking-[-0.04em] text-neutral-800">
          {data.heading}
        </p>

        {/* Paragraphs (NO layout change, only smoother tone) */}
        {data.paragraphs.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delay: i * 0.12,
              duration: 0.8,
              ease,
            }}
            className="mt-8 text-[1.05rem] leading-[2] text-neutral-600"
          >
            {text}
          </motion.p>
        ))}

        {/* Signature (UNCHANGED structure) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-14"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="h-px bg-orange-500/40"
          />

          <p className="mt-4 text-sm text-neutral-500">
            — {data.signature || data.name}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}