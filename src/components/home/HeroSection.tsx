"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HERO_FEATURED } from "@/data/sixzmicData";
import { Star, Eye, ShieldCheck, ChevronRight, BookOpen, Layers, Maximize2 } from "lucide-react";

interface HeroSectionProps {
  onReadClick: (comicId: string) => void;
  onExploreStudios: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onReadClick, onExploreStudios }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = HERO_FEATURED[selectedIndex];

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#070709] pt-8 pb-16 lg:pt-12 lg:pb-20">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <Image
          src="/hero/production-bg.png"
          alt=""
          fill
          className="object-cover object-center filter blur-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-sixzmic-lime animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
              FEATURED ORIGINAL IP
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-xs text-white/60">
              6 Independent Studios Under One Unified Publishing House
            </span>
          </div>

          <button
            onClick={onExploreStudios}
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 transition-all hover:border-sixzmic-lime/50 hover:text-white"
          >
            <Layers className="h-3.5 w-3.5 text-sixzmic-lime" />
            <span>View All Studios</span>
            <ChevronRight className="h-3 w-3 text-white/40" />
          </button>
        </div>

        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Comic & Lore Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md w-fit">
              <span className="h-2 w-2 rounded-full bg-sixzmic-lime" />
              <span>{current.studio}</span>
              <span className="text-white/30">•</span>
              <span className="text-white/60">{current.genre}</span>
            </div>

            {/* Title */}
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl font-display">
              {current.title}
            </h1>

            {/* Tagline */}
            <p className="mt-3 text-lg font-medium text-sixzmic-lime tracking-wide">
              {current.tagline}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-xl">
              {current.description}
            </p>

            {/* Stats */}
            <div className="mt-6 flex items-center gap-6 border-y border-white/10 py-4 text-xs font-medium text-white/60 max-w-xl">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-sixzmic-lime text-sixzmic-lime" />
                <span className="text-white font-bold">{current.rating}</span>
                <span>Reader Score</span>
              </div>
              <div className="h-3 w-px bg-white/15" />
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-white/40" />
                <span className="text-white font-bold">{current.reads}</span>
                <span>Active Reads</span>
              </div>
              <div className="h-3 w-px bg-white/15" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-sixzmic-lime" />
                <span>Original IP</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onReadClick(current.id)}
                className="flex items-center gap-2.5 rounded-xl bg-sixzmic-lime px-6 py-3.5 text-xs font-bold text-black transition-all hover:bg-sixzmic-limeHover shadow-lg shadow-sixzmic-lime/20"
              >
                <BookOpen className="h-4 w-4" />
                <span>Read First Chapter</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("latest-drops");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-xs font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
              >
                <span>Browse Drops & Catalog</span>
                <ChevronRight className="h-4 w-4 text-white/60" />
              </button>
            </div>

            {/* Series Thumbnails (Vertical Portrait Covers) */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-3">
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
                          ? "border-sixzmic-lime ring-2 ring-sixzmic-lime/50 -translate-y-1 shadow-lg shadow-sixzmic-lime/15"
                          : "border-white/15 opacity-60 hover:opacity-100 hover:border-white/40"
                      }`}
                    >
                      <div className="relative aspect-[3/4] w-full bg-black">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                      </div>
                      <div className="bg-[#0e0e14] py-1 px-1 text-center border-t border-white/5">
                        <span className="block truncate text-[10px] font-bold text-white">
                          {item.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Full Comic Artwork Display (Complete Height, Zero Cropping) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glow & Ambient Light */}
              <div className="absolute -inset-4 rounded-3xl bg-sixzmic-lime/10 opacity-50 blur-2xl pointer-events-none" />

              {/* Comic Poster Card (Full Aspect Ratio of the Comic) */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/15 bg-black shadow-2xl transition-all duration-500 hover:border-sixzmic-lime/60">
                {/* Full Portrait Container: aspect ratio ~ 1:1.41 matching standard graphic novel pages */}
                <div className="relative aspect-[1/1.42] w-full bg-black">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    priority
                    className="object-contain object-center"
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 70vw, 90vw"
                  />
                </div>

                {/* Bottom Overlay Label */}
                <div className="border-t border-white/10 bg-[#0e0e14]/95 p-4 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-sixzmic-lime" />
                      <span className="text-xs font-bold text-white tracking-wide uppercase">
                        {current.title}
                      </span>
                    </div>
                    <div className="text-[11px] text-white/50">{current.studio}</div>
                  </div>

                  <button
                    onClick={() => onReadClick(current.id)}
                    className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sixzmic-lime hover:text-black transition-colors"
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
