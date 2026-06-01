

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
      
<section className="relative w-full h-screen flex flex-col overflow-hidden">

  {/* TOP 70% */}
  <div className="flex w-full h-[70%]">

    <div className="w-1/2 flex items-start">
      <SocialHandle />
    </div>

    <div className="w-[45%] flex items-start">
      <AboutText data={aboutMessages.connect} />
    </div>

  </div>

  {/* BOTTOM 30% */}
  <div className="h-[30%] flex flex-col justify-center">

    {/* Actions */}
    
  <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-5 sm:flex-row"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-7 py-4 text-sm font-medium tracking-wide text-neutral-800 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-orange-300 hover:bg-orange-50"
          >
            <Home className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
            back home
          </Link>

          <Link
            href="/exhibition"
            className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-7 py-4 text-sm font-medium tracking-wide text-white transition-all duration-500 hover:scale-[1.03]"
          >
            <User className="h-4 w-4" />
            exhibition
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </motion.div>


    {/* Signature */}
    <motion.div className="mt-10 text-center">
      <p className="text-[10px] uppercase tracking-[0.55em] text-neutral-400">
        Designed & Developed By Akash
      </p>
    </motion.div>

  </div>

</section>
    )
}





