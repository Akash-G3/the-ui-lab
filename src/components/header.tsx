import Navbar from "./navbar";
import Logo from "./logo";

export default function Header() {
  return (
    // <header className="sticky top-0 z-50 bg-white/95 relative flex items-center justify-center pt-4"> //  use this when u want the navbar to be sticky.
    <header className="relative flex items-center justify-center pt-4 bg-[#0f0f10] bg-[radial-gradient(circle_at_top,rgba(255,120,40,0.16),transparent_40%)]">

      {/* Logo */}
      <div className="absolute left-14">
        <Logo />
      </div>

      {/* Centered Navbar */}
      <Navbar />

    </header>
  );
}


// // header.tsx
// "use client"

// import { motion } from "framer-motion"
// import Navbar from "./navbar"
// import Logo from "./logo"

// const ease = [0.16, 1, 0.3, 1]

// export default function Header() {
//   return (
//     // use this if you want sticky
//     // <header className="sticky top-0 z-50 w-full">

//     <header className="absolute left-0 top-0 z-50 w-full overflow-hidden">

//       {/* atmospheric background */}
//       <div className="pointer-events-none absolute inset-0">

//         {/* orange glow */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.45 }}
//           transition={{
//             duration: 2,
//             ease,
//           }}
//           className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[160px]"
//         />

//         {/* subtle top fade */}
//         <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent" />

//         {/* orbital ring */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.94,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//           }}
//           transition={{
//             duration: 2,
//             ease,
//           }}
//           className="absolute left-1/2 top-[-250px] h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/[0.015]"
//         />

//         {/* mesh texture */}
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>

//       {/* content */}
//       <div className="relative flex items-center justify-center px-14 pt-5">

//         {/* logo */}
//         <div className="absolute left-14 z-20">
//           <Logo />
//         </div>

//         {/* navbar */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: -12,
//             filter: "blur(10px)",
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//             filter: "blur(0px)",
//           }}
//           transition={{
//             duration: 1.2,
//             ease,
//           }}
//           className="relative z-20"
//         >
//           <Navbar />
//         </motion.div>
//       </div>
//     </header>
//   )
// }