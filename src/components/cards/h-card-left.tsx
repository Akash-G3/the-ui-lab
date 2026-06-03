

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Motion Lab",
    category: "Frontend Engineering",
    image: "https://picsum.photos/1200/800?1",
  },
  {
    id: 2,
    title: "Neon UI",
    category: "Design Systems",
    image: "https://picsum.photos/1200/800?2",
  },
  {
    id: 3,
    title: "Dashboard X",
    category: "Data Visualization",
    image: "https://picsum.photos/1200/800?3",
  },
  {
    id: 4,
    title: "Portfolio X",
    category: "Creative Development",
    image: "https://picsum.photos/1200/800?4",
  },
  {
    id: 5,
    title: "Studio One",
    category: "Interactive Systems",
    image: "https://picsum.photos/1200/800?5",
  },
];

export default function LeftCard() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const project = projects[active];

  return (
    <div className="relative h-full w-full overflow-hidden p-5">
      {/* Ambient */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,40,0.08),transparent_70%)]"
      />

      {/* Top Label */}
      <div className="relative z-20 mb-4">
        <p className="text-[10px] uppercase tracking-[0.25em] text-orange-400/70">
          Featured Project
        </p>
      </div>

      {/* Browser Window */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md">
        {/* Browser Header */}
        <div className="flex h-8 items-center gap-2 border-b border-white/5 bg-black/40 px-3">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />

          <span className="ml-2 text-[9px] text-neutral-800">
            preview.live
          </span>
        </div>

        <div className="relative h-[240px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={project.id}
              src={project.image}
              alt={project.title}
              initial={{
                opacity: 0,
                scale: 1.08,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.8,
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* Slow cinematic pan */}
          <motion.div
            animate={{
              x: [0, -25, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Reflection Sweep */}
          <motion.div
            animate={{
              x: ["-120%", "180%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 w-[35%] skew-x-12 bg-white/[0.04] blur-xl"
          />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="mt-5 flex items-end justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <h3 className="text-lg font-medium text-neutral-700">
              {project.title}
            </h3>

            <p className="text-sm text-neutral-500">
              {project.category}
            </p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="text-right"
          >
            <p className="text-2xl font-light text-neutral-500">
              {String(active + 1).padStart(2, "0")}
            </p>

            <p className="text-[10px] text-neutral-500">
              / {String(projects.length).padStart(2, "0")}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <motion.div
        key={active}
        initial={{
          width: 0,
        }}
        animate={{
          width: "100%",
        }}
        transition={{
          duration: 5,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 h-[2px] bg-orange-500"
      />

      {/* Corner Glow */}
      <motion.div
        animate={{
          opacity: [0.1, 0.35, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl"
      />
    </div>
  );
}