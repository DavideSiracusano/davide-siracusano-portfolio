"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkTheme() {
  const [isDark, setIsDark] = useState(false);

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = savedTheme || (prefersDark ? "dark" : "light");
    setIsDark(theme === "dark");
    applyTheme(theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    applyTheme(newTheme);
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
