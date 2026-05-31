
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   {
//     href: "/",
//     label: "home",
//   },
//   {
//     href: "/exhibition",
//     label: "exhibition",
//   },
//   {
//     href: "/about",
//     label: "about",
//   },
// ];

// export default function Navbar() {
//   const pathname = usePathname();

//   return (
//     <div className="flex h-16 items-center justify-center">
//       <nav aria-label="Main Navigation">
//         <ul className="flex items-center gap-12">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;

//             return (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   className={`group relative inline-flex items-center overflow-hidden pb-1 text-[15px] font-medium tracking-[0.18em] transition-all duration-500 ${
//                     isActive
//                       ? "text-neutral-50"
//                       : "text-neutral-500 hover:text-neutral-200"
//                   }`}
//                 >
//                   {/* Subtle glow layer */}
//                   <span
//                     className={`absolute inset-0 opacity-0 blur-xl transition-opacity duration-500 ${
//                       isActive
//                         ? "bg-white/10 opacity-100"
//                         : "group-hover:opacity-100 bg-white/[0.03]"
//                     }`}
//                   />

//                   {/* Text */}
//                   <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-[1px]">
//                     {link.label}
//                   </span>

//                   {/* Premium underline */}
//                   <span
//                     className={`absolute bottom-0 left-0 h-[1.5px] rounded-full bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 transition-all duration-500 ease-out ${
//                       isActive
//                         ? "w-full opacity-100"
//                         : "w-0 opacity-70 group-hover:w-full group-hover:opacity-100"
//                     }`}
//                   />

//                   {/* Soft shimmer */}
//                   <span
//                     className={`absolute bottom-0 left-0 h-[1.5px] w-8 bg-white/60 blur-sm transition-all duration-700 ${
//                       isActive
//                         ? "translate-x-[250%]"
//                         : "translate-x-[-150%] group-hover:translate-x-[250%]"
//                     }`}
//                   />
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/exhibition",
    label: "exhibition",
  },
  {
    href: "/about",
    label: "about",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex h-14 items-center justify-center">
      <nav aria-label="Main Navigation">
        <ul className="flex items-center gap-14">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    group
                    relative
                    inline-flex
                    items-center
                    justify-center
                    overflow-hidden
                    py-2
                    text-[11px]
                    tracking-[0.32em]
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isActive
                         ? "text-neutral-950"
                         : "text-neutral-600 hover:text-neutral-900" 
                    }
                  `}
                >
                  {/* Ambient Glow */}
                  <span
                    className={`
                      absolute
                      inset-0
                      rounded-full
                      opacity-0
                      blur-2xl
                      transition-all
                      duration-700
                      ${
                        isActive
                          ? "bg-white/10 opacity-100"
                          : "bg-orange-500/10 group-hover:opacity-100"
                      }
                    `}
                  />

                  {/* Top Fade Line */}
                  <span
                    className={`
                      absolute
                      top-0
                      left-1/2
                      h-px
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-white/50
                      to-transparent
                      transition-all
                      duration-700
                      ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }
                    `}
                  />

                  {/* Text */}
                  <span
                    className={`
                      relative
                      z-10
                      transition-all
                      duration-700
                      ease-out
                      ${
                        isActive
                          ? "translate-y-0 text-neutral-950"
                          : "group-hover:-translate-y-[1px]"
                      }
                    `}
                  >
                    {link.label}
                  </span>

                  {/* Bottom Premium Line */}
                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-[1px]
                      rounded-full
                      bg-gradient-to-r
                      from-orange-500/0
                      via-orange-300
                      to-orange-500/0
                      transition-all
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }
                    `}
                  />

                  {/* Cinematic Sweep */}
                  <span
                    className={`
                      absolute
                      inset-y-0
                      left-[-120%]
                      w-[55%]
                      rotate-12
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                      blur-md
                      transition-all
                      duration-1000
                      ease-out
                      group-hover:left-[140%]
                    `}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}