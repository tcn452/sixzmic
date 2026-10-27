"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LATEST_DROPS, ComicDrop } from "@/data/sixzmicData";
import { Star, Eye, BookOpen } from "lucide-react";

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
    <section id="latest-drops" className="border-b border-black/10 dark:border-white/10 bg-[#f7f7f4] dark:bg-sixzmic-bg py-16 lg:py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-sixzmic-lime">
              SERIALIZED RELEASES
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl font-display">
              New Releases & Ongoing Series
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-sixzmic-muted max-w-xl">
              Fresh chapter drops, exclusive variants, and original pilot concepts from Sixzmic&#39;s
              creator network.
            </p>
          </div>

          {/* Genre Filters (Clean architectural buttons, not AI pills) */}
          <div className="flex flex-wrap items-center gap-2">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGenre(g)}
                className={`tactile-btn rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                  selectedGenre === g
                    ? "bg-black text-white dark:bg-sixzmic-lime dark:text-black font-bold shadow-xs"
                    : "border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 text-neutral-700 dark:text-white/70 hover:border-black/25 dark:hover:border-white/20 hover:text-black dark:hover:text-white"
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
              className="cover-sheen group relative flex flex-col cursor-pointer overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0e0e14] transition-all duration-300 ease-snappy hover:-translate-y-1.5 hover:border-black/30 dark:hover:border-sixzmic-lime/50 shadow-xs hover:shadow-xl"
            >
              {/* Cover Aspect Ratio */}
              <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-200 dark:bg-black">
                <Image
                  src={comic.coverImage}
                  alt={comic.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-snappy group-hover:scale-108"
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Badge if present */}
                {comic.badge && (
                  <div className="absolute top-2 left-2 rounded bg-black dark:bg-sixzmic-lime px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white dark:text-black shadow-md">
                    {comic.badge}
                  </div>
                )}

                {/* Quick Read Overlay Button with slide-up microtransition */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/40 backdrop-blur-xs">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-snappy flex items-center gap-1.5 rounded-lg bg-white text-black dark:bg-sixzmic-lime dark:text-black px-3.5 py-1.5 text-xs font-bold shadow-lg">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Read</span>
                  </div>
                </div>

                {/* Bottom Cover Metadata */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-white">
                  <div className="flex items-center gap-1 font-semibold">
                    <Star className="h-3 w-3 fill-sixzmic-lime text-sixzmic-lime" />
                    <span>{comic.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/80">
                    <Eye className="h-3 w-3" />
                    <span>{comic.reads}</span>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-sixzmic-lime truncate">
                  {comic.studio}
                </div>
                <h3 className="mt-0.5 text-xs font-bold text-neutral-900 dark:text-white truncate group-hover:text-black dark:group-hover:text-sixzmic-lime transition-colors duration-200">
                  {comic.title}
                </h3>
                <p className="text-[11px] text-neutral-500 dark:text-white/50">{comic.episode}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
