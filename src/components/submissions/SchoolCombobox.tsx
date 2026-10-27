"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { SA_UNIVERSITIES, OTHER_INSTITUTION, University } from "@/data/saUniversities";
import { GraduationCap, ChevronDown, Check } from "lucide-react";

interface SchoolComboboxProps {
  value: string;
  onChange: (val: string) => void;
  error?: string;
}

function normalizeSearch(str: string): string {
  return str
    .toLocaleLowerCase("en-ZA")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export const SchoolCombobox: React.FC<SchoolComboboxProps> = ({ value, onChange, error }) => {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  const filtered = useMemo(() => {
    const norm = normalizeSearch(query);
    const all = [...SA_UNIVERSITIES, OTHER_INSTITUTION];
    if (!norm || query === value) return all;

    return all.filter((u) => {
      const haystack = normalizeSearch([u.name, u.abbreviation, u.province, ...u.aliases].join(" "));
      return haystack.includes(norm);
    });
  }, [query, value]);

  useEffect(() => {
    setHighlightIndex(0);
  }, [filtered]);

  const handleSelect = (uni: University) => {
    setQuery(uni.name);
    onChange(uni.name);
    setIsOpen(false);
  };

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400 dark:text-white/40">
          <GraduationCap className="h-4 w-4" />
        </div>
        <input
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange(e.target.value);
            setIsOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setIsOpen(true);
              setHighlightIndex((prev) => (prev + 1) % filtered.length);
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setIsOpen(true);
              setHighlightIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
            } else if (e.key === "Enter" && isOpen && filtered[highlightIndex]) {
              e.preventDefault();
              handleSelect(filtered[highlightIndex]);
            } else if (e.key === "Escape") {
              setIsOpen(false);
            }
          }}
          placeholder="Search South African universities or institution..."
          className={`w-full rounded-xl border bg-white dark:bg-[#0c0c12] py-3 pl-10 pr-10 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 transition-all duration-200 focus:outline-none ${
            error
              ? "border-red-500 ring-1 ring-red-500/20"
              : "border-black/15 dark:border-white/15 focus:border-black dark:focus:border-sixzmic-lime"
          }`}
        />
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 dark:text-white/40 hover:text-black dark:hover:text-white"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="animate-slideUp absolute z-50 mt-1 max-h-60 w-full overflow-y-auto rounded-xl border border-black/15 dark:border-white/20 bg-white dark:bg-[#121218] p-1.5 shadow-2xl backdrop-blur-xl">
          {filtered.length === 0 ? (
            <div className="p-3 text-center text-xs text-neutral-500 dark:text-white/50">
              No matching universities. You can keep &quot;{query}&quot; as a custom institution.
            </div>
          ) : (
            filtered.map((uni, idx) => {
              const isSelected = value === uni.name;
              const isHighlighted = idx === highlightIndex;

              return (
                <button
                  key={uni.name}
                  type="button"
                  onClick={() => handleSelect(uni)}
                  onMouseEnter={() => setHighlightIndex(idx)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs transition-colors duration-150 ${
                    isHighlighted
                      ? "bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white font-semibold"
                      : "text-neutral-700 dark:text-white/80"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-neutral-900 dark:text-white">
                        {uni.name}
                      </span>
                      {uni.abbreviation && (
                        <span className="rounded bg-black/5 dark:bg-white/10 px-1.5 py-0.5 text-[10px] font-bold text-neutral-600 dark:text-sixzmic-lime">
                          {uni.abbreviation}
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 text-[10px] text-neutral-400 dark:text-white/40">
                      {uni.province}
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="h-4 w-4 text-black dark:text-sixzmic-lime shrink-0" />
                  )}
                </button>
              );
            })
          )}
        </div>
      )}

      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
};
