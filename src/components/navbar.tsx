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
    <div className="flex h-16 items-center justify-center">
      <nav aria-label="Main Navigation">
        <ul className="flex items-center gap-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative inline-block pb-1 text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-black"
                      : "text-neutral-500 hover:text-black"
                  }`}
                >
                  {link.label}

                  {/* Bottom Bar */}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-orange-500 transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}