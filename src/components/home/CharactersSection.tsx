"use client";

import React from "react";
import Image from "next/image";
import { CHARACTERS_LIST } from "@/data/sixzmicData";

export const CharactersSection: React.FC = () => {
  return (
    <section id="characters" className="border-b border-black/10 dark:border-white/10 bg-[#f7f7f4] dark:bg-sixzmic-bg py-16 lg:py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-sixzmic-lime">
            CANONICAL LORE & DOSSIERS
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl font-display">
            The Icons of the Sixzmic Universe
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-sixzmic-muted">
            Explore the protagonists, rogue factions, and protectors anchoring our serialized
            universes.
          </p>
        </div>

        {/* Character Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {CHARACTERS_LIST.map((char) => (
            <div
              key={char.name}
              className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-sixzmic-surface transition-all duration-300 hover:border-black/30 dark:hover:border-sixzmic-lime/50 hover:-translate-y-1 shadow-xs hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200 dark:bg-black">
                <Image
                  src={char.image}
                  alt={char.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Studio Label */}
                <div className="absolute top-3 left-3 rounded-md bg-black/70 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-white/90">
                  {char.studio}
                </div>

                {/* Character Metadata */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-sixzmic-lime">
                    {char.series}
                  </div>
                  <h3 className="text-lg font-extrabold text-white group-hover:text-sixzmic-lime transition-colors">
                    {char.name}
                  </h3>
                  <p className="text-[11px] text-white/70 line-clamp-1">{char.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
