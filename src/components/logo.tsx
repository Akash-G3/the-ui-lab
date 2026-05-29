export default function Logo() {
  return (
    <div className="select-none">
      <h1 className="text-5xl text-neutral-100 font-bold tracking-[0.10em] text-black">
        ui<span className="text-orange-500">.lab</span>
      </h1>
    </div>
  );
}



// // logo.tsx
// // logo.tsx
// "use client"

// import Link from "next/link"
// import { motion } from "framer-motion"

// export default function Logo() {
//   return (
//     <Link
//       href="/"
//       className="group relative block select-none"
//     >

//       {/* ambient glow */}
//       <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

//       <motion.h1
//         initial={{
//           opacity: 0,
//           y: -10,
//           filter: "blur(8px)",
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//           filter: "blur(0px)",
//         }}
//         transition={{
//           duration: 1.2,
//           ease: [0.16, 1, 0.3, 1],
//         }}
//         className="relative text-5xl font-semibold tracking-[-0.11em] text-white"
//       >
//         ui

//         <span className="relative text-orange-500">
//           .lab

//           {/* glossy sweep */}
//           <motion.span
//             initial={{ x: "-120%" }}
//             animate={{ x: "220%" }}
//             transition={{
//               delay: 1.1,
//               duration: 1.8,
//               ease: "easeInOut",
//             }}
//             className="absolute inset-0 w-[30%] skew-x-[-20deg] bg-white/40 blur-xl"
//           />
//         </span>
//       </motion.h1>
//     </Link>
//   )
// }