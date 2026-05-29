
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { projects } from "@/lib/projects"
import { ExternalLink, X } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  url: string
  tags: string[]
}

const ease = [0.22, 1, 0.36, 1] as const

export default function ExhibitionShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selectedProject])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null)
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [])

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-32 pt-10">

        {/* editorial background */}
        <div className="absolute inset-0 -z-10 bg-[#f7f7f4]" />

        {/* ambient gradients */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          className="absolute left-1/2 top-[-10%] -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-100 blur-[120px]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute bottom-[-20%] right-[10%] -z-10 h-[280px] w-[280px] rounded-full bg-neutral-300 blur-[100px]"
        />

        {/* subtle grid */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* soft vignette */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.03))]" />

        <div className="mx-auto grid max-w-[92rem] grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.08,
                ease,
              }}
              whileHover={{
                y: -8,
              }}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-[1.6rem] border border-black/5 bg-white/70 text-left shadow-[0_10px_60px_rgba(0,0,0,0.04)] backdrop-blur-xl"
            >

              {/* card glow */}
              <div className="absolute inset-0 rounded-[1.6rem] ring-1 ring-black/5 transition-all duration-700 group-hover:ring-orange-300/40" />

              {/* top reflection */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/40 to-transparent opacity-60" />

              <div className="relative aspect-[4/3.2] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-all duration-[1400ms] group-hover:scale-[1.04]"
                />

                {/* cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* floating glow */}
                <div className="absolute bottom-[-10%] left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-orange-400/30 blur-[90px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white">
                    {project.title}
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-7 tracking-[-0.01em] text-neutral-200">
                    {project.description}
                  </p>

                </div>
              </div>
            </motion.button>
          ))}

        </div>

        {/* floating micro element */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute bottom-10 left-1/2 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-orange-400 md:block"
        />
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-2xl"
          >

            {/* ambient backdrop */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

            <motion.div
              initial={{
                scale: 0.96,
                opacity: 0,
                y: 20,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.97,
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 0.45,
                ease,
              }}
              className="relative h-[92vh] w-full max-w-7xl overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/80 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
            >

              {/* top bar */}
              <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between border-b border-black/5 bg-white/50 px-6 py-5 backdrop-blur-2xl">

                <div>
                  <h3 className="text-sm font-medium tracking-wide text-neutral-900">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                    immersive digital experience
                  </p>
                </div>

                <div className="flex items-center gap-3">

                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-5 py-2.5 text-sm text-neutral-700 backdrop-blur-xl transition-all duration-300 hover:border-orange-300 hover:bg-orange-50"
                  >
                    Visit Site

                    <ExternalLink
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-full border border-black/10 bg-white/60 p-2.5 text-neutral-700 backdrop-blur-xl transition-all duration-300 hover:bg-black/5"
                  >
                    <X size={18} />
                  </button>

                </div>
              </div>

              {/* iframe */}
              <div className="h-full w-full overflow-hidden rounded-[2rem] bg-white pt-[76px]">
                <iframe
                  src={selectedProject.url}
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}