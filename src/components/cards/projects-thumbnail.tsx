"use client";

import { motion } from "framer-motion";

interface ProjectThumbnailProps {
  title: string;
  tag: string;
  image?: string;
  className?: string;
}

export default function ProjectThumbnail({
  title,
  tag,
  image,
  className = "",
}: ProjectThumbnailProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`
        absolute
        overflow-hidden
        rounded-3xl
        border border-black/5
        bg-white/80
        backdrop-blur-xl
        shadow-[0_15px_50px_rgba(0,0,0,0.08)]
        ${className}
      `}
    >
      {/* Thumbnail */}
      <div className="relative h-[140px] overflow-hidden">

        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-orange-100 via-orange-50 to-neutral-100" />
        )}

        {/* shine */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-y-0
            w-20
            bg-white/30
            blur-xl
            rotate-12
          "
        />
      </div>

      <div className="p-4">
        <p className="font-medium text-neutral-900">
          {title}
        </p>

        <span className="mt-2 inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs text-orange-700">
          {tag}
        </span>
      </div>
    </motion.div>
  );
}