"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import DarkTheme from "./DarkTheme";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Projects", href: "/Projects" },
  ];

  // Chiude menu al cambio pagina
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname === path;

  return (
    <nav className="animate-gradient p-4 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto ">
        {/* Desktop menu */}
        <ul className="hidden md:flex md:gap-6 md:justify-end lg:flex lg:justify-end">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-white px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[crimson] ${
                  isActive(link.href) ? "bg-[crimson] font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <DarkTheme />
          </li>
        </ul>

        {/* Mobile hamburger + DarkTheme */}
        <div className="md:hidden lg:hidden flex justify-end gap-3">
          <DarkTheme />
          <input
            id="my-drawer"
            type="checkbox"
            className="hidden"
            checked={open}
            onChange={() => setOpen(!open)}
          />
          <label htmlFor="my-drawer" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-8 h-8 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <>
          {/* Overlay */}
          <label
            htmlFor="my-drawer"
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed right-0 top-0 w-64 min-h-full bg-black text-white p-4 z-50">
            {/* Bottone X per chiudere */}
            <label
              htmlFor="my-drawer"
              className="absolute right-4 top-4 w-8 h-8 rounded-full bg-red-600 text-white hover:bg-red-700 flex items-center justify-center cursor-pointer"
              onClick={() => setOpen(false)}
            >
              ✕
            </label>

            <ul className="mt-20 space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg transition-colors duration-300 hover:bg-[crimson] ${
                      isActive(link.href) ? "bg-[crimson] font-semibold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
