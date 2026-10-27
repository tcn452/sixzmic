"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("sixzmic-theme");
    if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("sixzmic-theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("sixzmic-theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="tactile-btn relative flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 transition-all hover:border-black/25 dark:hover:border-white/30 hover:scale-105 active:scale-95"
      aria-label="Toggle color theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <span
        className={`transition-all duration-300 ease-snappy ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0 pointer-events-none absolute"
        }`}
      >
        <Sun className="h-4 w-4 text-sixzmic-lime" />
      </span>
      <span
        className={`transition-all duration-300 ease-snappy ${
          !isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0 pointer-events-none absolute"
        }`}
      >
        <Moon className="h-4 w-4 text-neutral-800" />
      </span>
    </button>
  );
};
