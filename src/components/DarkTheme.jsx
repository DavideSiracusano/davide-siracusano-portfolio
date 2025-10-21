"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Controlla tema salvato
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const dark = savedTheme === "dark";
      setIsDark(dark);
      // Mantieni altre classi: aggiungi/rimuovi solo `dark`/`light` su body per globals.css
      if (dark) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      }
      // Tailwind usa la classe `dark` su html
      if (dark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } else {
      // Preferenza sistema
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
      if (prefersDark) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        document.documentElement.classList.add("dark");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);

    // Applica su body (per CSS custom)
    // Imposta body 'dark' o 'light' (senza sovrascrivere altre classi) e html.dark per Tailwind
    if (newTheme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
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
