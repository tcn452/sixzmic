"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HERO_FEATURED } from "@/data/sixzmicData";
import { Star, Eye, ShieldCheck, ChevronRight, BookOpen } from "lucide-react";

interface HeroSectionProps {
  onReadClick: (comicId: string) => void;
  onExploreStudios: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onReadClick }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = HERO_FEATURED[selectedIndex];

  return (
    <section className="relative overflow-hidden border-b border-black/10 dark:border-white/10 bg-[#f7f7f4] dark:bg-[#070709] pt-8 pb-16 lg:pt-14 lg:pb-20 transition-colors">
      {/* Subtle Background Lighting in Dark Mode */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dark:opacity-20 transition-opacity">
        <Image
          src="/hero/production-bg.png"
          alt=""
          fill
          className="object-cover object-center filter blur-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f7f4] dark:from-[#070709] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Comic & Lore Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean Editorial Studio & Genre Header (No AI pills) */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
              <span className="font-bold text-black dark:text-sixzmic-lime tracking-widest">{current.studio}</span>
              <span className="opacity-30">/</span>
              <span>{current.genre}</span>
            </div>

            {/* Title */}
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl font-display">
              {current.title}
            </h1>

            {/* Tagline */}
            <p className="mt-3 text-lg font-medium text-neutral-800 dark:text-sixzmic-lime tracking-wide">
              {current.tagline}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-white/70 max-w-xl">
              {current.description}
            </p>

            {/* Stats */}
            <div className="mt-6 flex items-center gap-6 border-y border-black/10 dark:border-white/10 py-4 text-xs font-medium text-neutral-600 dark:text-white/60 max-w-xl">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-black dark:fill-sixzmic-lime text-black dark:text-sixzmic-lime" />
                <span className="text-neutral-900 dark:text-white font-bold">{current.rating}</span>
                <span>Reader Score</span>
              </div>
              <div className="h-3 w-px bg-black/10 dark:bg-white/15" />
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-neutral-400 dark:text-white/40" />
                <span className="text-neutral-900 dark:text-white font-bold">{current.reads}</span>
                <span>Active Readers</span>
              </div>
              <div className="h-3 w-px bg-black/10 dark:bg-white/15" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-black dark:text-sixzmic-lime" />
                <span>Original IP</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onReadClick(current.id)}
                className="flex items-center gap-2.5 rounded-xl bg-black dark:bg-sixzmic-lime px-6 py-3.5 text-xs font-bold text-white dark:text-black transition-all hover:opacity-90 shadow-md"
              >
                <BookOpen className="h-4 w-4" />
                <span>Read First Chapter</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("latest-drops");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-1.5 rounded-xl border border-black/15 dark:border-white/20 bg-black/[0.03] dark:bg-white/5 px-5 py-3.5 text-xs font-semibold text-neutral-800 dark:text-white transition-all hover:bg-black/[0.06] dark:hover:bg-white/10"
              >
                <span>Browse All Drops</span>
                <ChevronRight className="h-4 w-4 opacity-50" />
              </button>
            </div>

            {/* Series Thumbnails (Vertical Portrait Covers) */}
            <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10">
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-white/40 mb-3">
                Featured Series Slate
              </div>
              <div className="grid grid-cols-5 gap-3 max-w-lg">
                {HERO_FEATURED.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedIndex(idx)}
                      className={`group relative flex flex-col overflow-hidden rounded-xl border transition-all ${
                        isSelected
                          ? "border-black dark:border-sixzmic-lime ring-2 ring-black/20 dark:ring-sixzmic-lime/50 -translate-y-1 shadow-md"
                          : "border-black/10 dark:border-white/15 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <div className="relative aspect-[3/4] w-full bg-neutral-200 dark:bg-black">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="bg-white dark:bg-[#0e0e14] py-1 px-1 text-center border-t border-black/5 dark:border-white/5">
                        <span className="block truncate text-[10px] font-bold text-neutral-900 dark:text-white">
                          {item.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Full Comic Artwork Display (Zero Cropping) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative overflow-hidden rounded-2xl border border-black/15 dark:border-white/20 bg-white dark:bg-black shadow-2xl transition-all duration-500">
                {/* Full Portrait Container: aspect ratio ~ 1:1.41 matching comic cover pages */}
                <div className="relative aspect-[1/1.42] w-full bg-neutral-100 dark:bg-black">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    priority
                    className="object-contain object-center"
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 70vw, 90vw"
                  />
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#0e0e14]/95 p-4 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-neutral-900 dark:text-white tracking-wide uppercase">
                      {current.title}
                    </div>
                    <div className="text-[11px] text-neutral-500 dark:text-white/50">{current.studio}</div>
                  </div>

                  <button
                    onClick={() => onReadClick(current.id)}
                    className="flex items-center gap-1.5 rounded-lg bg-black/[0.05] dark:bg-white/10 px-3 py-1.5 text-xs font-semibold text-neutral-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-sixzmic-lime dark:hover:text-black transition-colors"
                  >
                    <span>Read Preview</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
