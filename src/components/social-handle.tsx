
"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/Akash-G3" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/akash-g03/" },
  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/akash.g03/" },
  { name: "Twitter", icon: FaTwitter, url: "https://x.com/akash_g03" },
  { name: "Email", icon: FaEnvelope, url: "mailto:thisisakash481@gmail.com" },
];

export default function SocialHandle() {
  return (
    <div className="w-full h-[70%] flex items-start justify-center md:pl-24 md:pt-16 ml-6 mt-6 md:ml-0 md:mt-0">
      <div className="w-full max-w-md">

        {/* Header Section (UPGRADED) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h1 className="text-5xl font-semibold tracking-tight text-neutral-900">
            Let’s Con<span className="text-orange-500">nect</span>
          </h1>

          {/* subtle accent line like About section */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 70 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 h-px bg-gradient-to-r from-orange-500/60 to-transparent"
          />
        </motion.div>

        {/* Social List */}
        <div className="space-y-3">
          {socials.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  md:px-4
                  md:py-3
                  px-0
                  py-3
                  border
                  border-transparent
                  hover:border-neutral-200
                  hover:bg-neutral-50
                  transition-all
                "
              >
                {/* Icon */}
                <div className="text-neutral-600 group-hover:text-orange-500 transition-colors">
                  <Icon size={20} />
                </div>

                {/* Name */}
                <span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">
                  {item.name}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}