"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import Logo from "./logo";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "All Events",
    href: "/events/all",
  },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header
      className="flex justify-between items-center 
    border-b border-white/10 h-14 px-3
    sm:px-9"
    >
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map((route) => (
            <li
              key={route.href}
              className={clsx("hover:text-white flex items-center transition relative", {
                "text-white": activePathname === route.href,
                "text-white/50": activePathname !== route.href,
              })}
            >
              <Link href={route.href}>{route.name}</Link>

              {activePathname === route.href && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
