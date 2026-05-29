
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Home,
  User,
  Sparkles,
} from "lucide-react"
import { projects } from "@/lib/projects"
export default function ExhibitionClosing() {
  const projectCount = String(projects.length).padStart(2, "0")
  return (
    
    <section className="relative overflow-hidden border-t border-black/5 bg-[#f6f3ee] px-6 pb-8 md:px-10">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Soft Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "58px 58px",
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/30 blur-[140px]" />

        {/* Soft Mesh Blur */}
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-orange-200/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-neutral-300/30 blur-[100px]" />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Huge Background Typography */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[18vw] font-black tracking-[-0.09em] text-black/[0.03]"
      >
        continues
      </motion.h1>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20 h-px origin-left bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"
        />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-neutral-700 shadow-sm backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-orange-500" />
            Building New Experiences
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.08em] text-neutral-900 sm:text-7xl md:text-8xl">
            exhibition
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 bg-clip-text text-transparent">
              continues
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed tracking-wide text-neutral-600 sm:text-base">
            the showcase continues to evolve through interaction design, visual storytelling, and creative engineering — already taking shape behind the scenes.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >
          {[
            {
              number: projectCount,
              label: "Projects Exhibited",
            },
            {
              number: "∞",
              label: "Ideas In Progress",
            },
            {
              number: "24/7",
              label: "Creative Exploration",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-300/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <h3 className="text-4xl font-black tracking-[-0.06em] text-neutral-900">
                  {item.number}
                </h3>

                <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-7 py-4 text-sm font-medium tracking-wide text-neutral-800 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-orange-300 hover:bg-orange-50"
          >
            <Home className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
            back home
          </Link>

          <Link
            href="/about"
            className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-7 py-4 text-sm font-medium tracking-wide text-white transition-all duration-500 hover:scale-[1.03]"
          >
            <User className="h-4 w-4" />
            about me
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.55em] text-neutral-400">
            Designed & Developed By Akash
          </p>
        </motion.div>
      </div>
    </section>
  )
}