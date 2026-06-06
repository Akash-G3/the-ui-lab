

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Home,
  User,
  Sparkles,
} from "lucide-react"


import AboutText from "./about-text"
import { aboutMessages } from "@/lib/about-messages"
import SocialHandle from "./social-handle"

export default function Connect() {
    return (
      
<section className="relative w-full min-h-screen md:h-screen flex flex-col overflow-hidden">

  {/* TOP 70% */}
  <div className="flex w-full md:h-[70%] flex-1">

    <div className="md:w-1/2 w-[26%] flex items-start">
      <SocialHandle />
    </div>

    <div className="md:w-[45%] md:mt-0 mt-14 flex items-start">
      <AboutText data={aboutMessages.connect} />
    </div>

  </div>

  {/* BOTTOM 30% */}
  {/* <div className="md:h-[30%] flex flex-col justify-center py-8 md:py-0"> */}
  <div className="md:h-[30%] flex flex-col justify-center py-8 md:py-0 -translate-y-16 md:translate-y-0">

    {/* Actions */}
    
  <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-5 sm:flex-row items-center"
        >
          <Link
            href="/"
            className="relative z-50 group inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-7 py-4 text-sm font-medium tracking-wide text-neutral-800 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-orange-300 hover:bg-orange-50"
          >
            <Home className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
            back home
          </Link>

          <Link
            href="/exhibition"
            className="relative z-50 group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-7 py-4 text-sm font-medium tracking-wide text-white transition-all duration-500 hover:scale-[1.03]"
          >
            <User className="h-4 w-4" />
            exhibition
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </motion.div>


    {/* Signature */}
     <motion.div className="mt-10 text-center">
      <p className="md:text-[10px] text-[7px] uppercase tracking-[0.55em] text-neutral-400">
        Designed & Developed By Akash
      </p>
    </motion.div>

  </div> 

</section>
    )
}





