"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LATEST_DROPS, ComicDrop } from "@/data/sixzmicData";
import { Star, Eye, BookOpen, Clock, Flame, Sparkles } from "lucide-react";

interface DropsSectionProps {
  onSelectComic: (comic: ComicDrop) => void;
}

export const DropsSection: React.FC<DropsSectionProps> = ({ onSelectComic }) => {
  const [selectedGenre, setSelectedGenre] = useState<string>("All");

  const genres = ["All", "Sci-Fi", "Fantasy", "Mystery", "Martial Arts", "New IP"];

  const filtered = selectedGenre === "All"
    ? LATEST_DROPS
    : LATEST_DROPS.filter((item) =>
        item.genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );

  return (
    <section id="latest-drops" className="border-b border-white/10 bg-sixzmic-bg py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
              <Flame className="h-4 w-4" />
              <span>LATEST 24 HOURS & CATALOG</span>
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-display">
              New Releases & Ongoing Series
            </h2>
            <p className="mt-2 text-sm text-sixzmic-muted max-w-xl">
              Fresh chapter drops, exclusive variants, and original pilot concepts from Sixzmic&#39;s
              creator network.
            </p>
          </div>

          {/* Genre Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGenre(g)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  selectedGenre === g
                    ? "bg-sixzmic-lime text-black font-bold shadow-md shadow-sixzmic-lime/20"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Drops Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filtered.map((comic) => (
            <div
              key={comic.id}
              onClick={() => onSelectComic(comic)}
              className="group relative flex flex-col cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-sixzmic-card transition-all duration-300 hover:-translate-y-1 hover:border-sixzmic-lime/50 hover:shadow-xl hover:shadow-sixzmic-lime/10"
            >
              {/* Cover Aspect Ratio */}
              <div className="relative aspect-[2/3] w-full overflow-hidden bg-black">
                <Image
                  src={comic.coverImage}
                  alt={comic.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge if present */}
                {comic.badge && (
                  <div className="absolute top-2 left-2 rounded-md bg-sixzmic-lime px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-black shadow-md">
                    {comic.badge}
                  </div>
                )}

                {/* Quick Read Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/40 backdrop-blur-xs">
                  <div className="flex items-center gap-1.5 rounded-full bg-sixzmic-lime px-3 py-1.5 text-xs font-bold text-black shadow-lg">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Read</span>
                  </div>
                </div>

                {/* Bottom Cover Metadata */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-white/80">
                  <div className="flex items-center gap-1 font-semibold">
                    <Star className="h-3 w-3 fill-sixzmic-lime text-sixzmic-lime" />
                    <span>{comic.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/60">
                    <Eye className="h-3 w-3" />
                    <span>{comic.reads}</span>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-sixzmic-lime truncate">
                  {comic.studio}
                </div>
                <h3 className="mt-0.5 text-xs font-bold text-white truncate group-hover:text-sixzmic-lime transition-colors">
                  {comic.title}
                </h3>
                <p className="text-[11px] text-white/50">{comic.episode}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
