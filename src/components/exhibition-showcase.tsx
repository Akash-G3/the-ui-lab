// "use client"

// import Image from "next/image"
// import { useEffect, useState } from "react"
// import { AnimatePresence, motion } from "framer-motion"
// import { projects } from "@/lib/projects"
// import { ExternalLink, X } from "lucide-react"

// interface Project {
//   id: number
//   title: string
//   description: string
//   image: string
//   url: string
//   tags: string[]
// }

// export default function ExhibitionShowcase() {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null)

//   useEffect(() => {
//     if (selectedProject) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "auto"
//     }

//     return () => {
//       document.body.style.overflow = "auto"
//     }
//   }, [selectedProject])

//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         setSelectedProject(null)
//       }
//     }

//     window.addEventListener("keydown", handleEscape)

//     return () => {
//       window.removeEventListener("keydown", handleEscape)
//     }
//   }, [])

//   return (
//     <>
//       <section className="w-full px-6 pb-24">
//         <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {projects.map((project, index) => (
//             <motion.button
//               key={project.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.08 }}
//               whileHover={{ y: -6 }}
//               onClick={() => setSelectedProject(project)}
//               className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white text-left"
//             >
//               <div className="relative aspect-[4/3] overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />

//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <div className="mb-3 flex flex-wrap gap-2">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white backdrop-blur-sm"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
//                     {project.title}
//                   </h2>

//                   <p className="mt-2 max-w-md text-sm leading-6 text-neutral-200">
//                     {project.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.button>
//           ))}
//         </div>
//       </section>

//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
//           >
//             <motion.div
//               initial={{ scale: 0.96, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.96, opacity: 0, y: 20 }}
//               transition={{ duration: 0.25 }}
//               className="relative h-[92vh] w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-2xl"
//             >
//               <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
//                 <div>
//                   <h3 className="text-sm font-medium tracking-wide text-white">
//                     {selectedProject.title}
//                   </h3>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <a
//                     href={selectedProject.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
//                   >
//                     Visit Site
//                     <ExternalLink size={16} />
//                   </a>

//                   <button
//                     onClick={() => setSelectedProject(null)}
//                     className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition-colors hover:bg-white/10"
//                   >
//                     <X size={18} />
//                   </button>
//                 </div>
//               </div>

//               <div className="relative h-[calc(92vh-73px)] w-full bg-white">
//                 <iframe
//                   src={selectedProject.url}
//                   className="h-full w-full"
//                   loading="lazy"
//                 />
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }



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

export default function ExhibitionShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

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
      <section className="w-full px-6 pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 right-0 p-7">

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {project.title}
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-neutral-200">
                    {project.description}
                  </p>

                </div>
              </div>
            </motion.button>
          ))}

        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative h-[92vh] w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-2xl"
            >

              {/* floating controls */}
              <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-5">

                <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                  <h3 className="text-sm font-medium tracking-wide text-white/90">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">

                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/90 backdrop-blur-xl transition-all hover:bg-white/10"
                  >
                    Visit Site
                    <ExternalLink size={16} />
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-full border border-white/10 bg-black/30 p-2 text-white/90 backdrop-blur-xl transition-all hover:bg-white/10"
                  >
                    <X size={18} />
                  </button>

                </div>
              </div>

              {/* iframe preview */}
              <div className="relative h-full w-full bg-white">
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