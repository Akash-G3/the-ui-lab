"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const code = [
  "const uiLab = {",
  "  name: 'UI Lab',",
  "  type: 'experimental-system',",
  "  build: (idea) => {",
  "    return idea.transform('beautiful-ui');",
  "  },",
  "  output: ['interfaces', 'animations', 'systems']",
  "};",
];

export default function RightCard() {
  const [visibleLines, setVisibleLines] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setVisibleLines((p) => (p < code.length ? p + 1 : 1));
    }, 900);

    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* soft orange glow */}
      {/* <div className="absolute inset-0" /> */}

      {/* header */}
      <div className="absolute top-5 left-5 z-10">
        <p className="text-[10px] uppercase tracking-[0.25em] text-orange-400/70">
          UI Lab Engine
        </p>
        <p className="text-xs text-zinc-500 mt-1">
          turning ideas into interfaces
        </p>
      </div>

      {/* code container */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="
          w-full
          max-w-[340px]
          rounded-2xl
          border
          border-black/10
          bg-white/70
          backdrop-blur-xl
          shadow-sm
          p-4
          font-mono
        ">

          {code.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="text-[11px] leading-6 whitespace-pre"
            >
              {/* line number */}
              <span className="text-orange-500/80 mr-2">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* syntax-like coloring */}
              <span
                className={
                  line.includes("const")
                    ? "text-zinc-900 font-medium"
                    : line.includes("return")
                    ? "text-zinc-700"
                    : line.includes("'")
                    ? "text-orange-500"
                    : "text-zinc-800"
                }
              >
                {line}
              </span>
            </motion.div>
          ))}

          {/* cursor */}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
            className="inline-block w-2 h-4 bg-orange-400 ml-1"
          />
        </div>
      </div>

      {/* footer */}
      <div className="absolute bottom-5 left-5 right-5 flex justify-between">
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
          generated output
        </p>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-orange-400"
        />
      </div>
    </div>
  );
}