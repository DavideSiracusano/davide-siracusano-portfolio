"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Controlla tema salvato
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.body.className = savedTheme;
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      // Preferenza sistema
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
      document.body.className = prefersDark ? "dark" : "light";
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);

    // Applica su body (per CSS custom)
    document.body.className = newTheme;

    // Applica su html (per Tailwind dark:*)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Salva preferenza
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-transparent text-yellow-400 p-2 rounded-full hover:scale-110 transition-transform duration-300 focus:outline-none"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaSun size={20} color="#fbbf24" />
      ) : (
        <FaMoon size={20} color="#fbbf24" />
      )}
    </button>
  );
}
