// export default function HeroVid() {
//   return (
//     <section className="w-full mt-10 flex justify-center">
//       <video
//         className="mx-w-4xl h-[417px] object-cover"
//         autoPlay={true}
//         muted={true}
//         loop={true}
//         playsInline={true}
//         preload="auto"
//       >
//         <source
//           src="/the-ui-lab.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </section>
//   )
// }


// "use client"

// import { motion } from "framer-motion"

// export default function HeroVid() {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 1,
//         delay: 3.4,
//         ease: "easeOut",
//       }}
//       className="w-full mt-10 flex justify-center"
//     >
//       <video
//         className="w-full max-w-5xl max-h-[417px] object-cover rounded-t-2xl"
//         autoPlay={true}
//         muted={true}
//         loop={true}
//         playsInline={true}
//         preload="auto"
//       >
//         <source
//           src="/the-ui-lab.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </motion.section>
//   )
// }

"use client"

import { motion } from "framer-motion"

export default function HeroVid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 3.4,
        ease: "easeOut",
      }}
      className="w-full mt-10 flex justify-center px-6"
    >
      <div className="w-full max-w-5xl max-h-[417px] overflow-hidden rounded-t-2xl shadow-2xl shadow-black/10">
        
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/the-ui-lab.mp4"
            type="video/mp4"
          />
        </video>

      </div>
    </motion.section>
  )
}