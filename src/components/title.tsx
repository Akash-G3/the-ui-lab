// export default function Title() {
//   return (
//     <div className="select-none">
//       <h1 className="text-9xl text-neutral-800 font-bold tracking-[0.10em] text-black text-center">
//         the.ui<span className="text-orange-500">.lab</span>
//       </h1>
//     </div>
//   );
// }


"use client"

import { motion } from "framer-motion"

export default function Title() {
  return (
    <div className="relative w-fit mx-auto overflow-hidden">
      
      <h1 className="text-7xl md:text-9xl font-bold tracking-[0.10em] whitespace-nowrap text-neutral-300 select-none">
        the.ui
        <span className="text-orange-300">.lab</span>
      </h1>

      <motion.h1
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          overflow-hidden
          whitespace-nowrap
          text-7xl
          md:text-9xl
          font-bold
          tracking-[0.10em]
          text-neutral-800
          select-none
        "
      >
        the.ui
        <span className="text-orange-500">.lab</span>
      </motion.h1>

    </div>
  )
}
