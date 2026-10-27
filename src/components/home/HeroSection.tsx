"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HERO_FEATURED } from "@/data/sixzmicData";
import { Play, Sparkles, Star, Eye, ShieldCheck, ChevronRight, BookOpen, Layers } from "lucide-react";

interface HeroSectionProps {
  onReadClick: (comicId: string) => void;
  onExploreStudios: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onReadClick, onExploreStudios }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = HERO_FEATURED[selectedIndex];

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-sixzmic-bg pt-6 pb-16 lg:pt-10 lg:pb-24">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-25">
        <Image
          src="/hero/production-bg.png"
          alt="Production Background"
          fill
          className="object-cover object-center filter blur-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sixzmic-bg via-sixzmic-bg/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow: Option C Dual Gateway */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center border-b border-white/10 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-sixzmic-lime animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
              ORIGINAL IP SHOWCASE · VOL. 2026
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-xs text-white/60">
              6 Studios. Unified Publishing Powerhouse.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onExploreStudios}
              className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 transition-all hover:border-sixzmic-lime/50 hover:text-white"
            >
              <Layers className="h-3.5 w-3.5 text-sixzmic-lime" />
              <span>Publisher Umbrella</span>
              <ChevronRight className="h-3 w-3 text-white/40" />
            </button>
          </div>
        </div>

        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Comic & Lore Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md w-fit">
              <span className="h-2 w-2 rounded-full bg-sixzmic-lime" />
              <span>{current.studio}</span>
              <span className="text-white/30">•</span>
              <span className="text-white/60">{current.genre}</span>
            </div>

            {/* Title */}
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl font-display">
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
            <div className="mt-6 flex items-center gap-6 border-y border-white/10 py-4 text-xs font-medium text-white/60">
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
                className="flex items-center gap-3 rounded-xl bg-sixzmic-lime px-6 py-3.5 text-sm font-bold text-black transition-all hover:bg-sixzmic-limeHover hover:shadow-xl hover:shadow-sixzmic-lime/20"
              >
                <BookOpen className="h-4 w-4" />
                <span>Read First Chapter</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("latest-drops");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
              >
                <span>Browse All Drops</span>
                <ChevronRight className="h-4 w-4 text-white/60" />
              </button>
            </div>
          </div>

          {/* Right Column: Full-Bleed Artwork Showcase */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto aspect-[16/11] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-2xl">
              <Image
                src={current.image}
                alt={current.title}
                fill
                priority
                className="object-cover object-top transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Artwork Bottom HUD */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/15 bg-black/70 p-3.5 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-sixzmic-lime" />
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide uppercase">
                      {current.title} · Showcased
                    </div>
                    <div className="text-[11px] text-white/50">{current.studio}</div>
                  </div>
                </div>

                <button
                  onClick={() => onReadClick(current.id)}
                  className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sixzmic-lime hover:text-black transition-colors"
                >
                  Inspect Art & Story
                </button>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2">
              {HERO_FEATURED.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`group relative flex-1 min-w-[80px] overflow-hidden rounded-xl border transition-all ${
                      isSelected
                        ? "border-sixzmic-lime ring-2 ring-sixzmic-lime/50 scale-105"
                        : "border-white/15 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div className="relative aspect-[3/2] w-full bg-black">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="bg-black/90 px-2 py-1 text-center">
                      <span className="block truncate text-[11px] font-bold text-white">
                        {item.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
