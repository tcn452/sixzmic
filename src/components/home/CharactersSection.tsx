"use client";

import React from "react";
import Image from "next/image";
import { CHARACTERS_LIST } from "@/data/sixzmicData";
import { Sparkles, Shield, ArrowUpRight } from "lucide-react";

interface CharactersSectionProps {
  onSelectCharacter?: (name: string) => void;
}

export const CharactersSection: React.FC<CharactersSectionProps> = () => {
  return (
    <section id="characters" className="border-b border-white/10 bg-sixzmic-bg py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
            <Sparkles className="h-4 w-4" />
            <span>CHARACTER ARCHIVES & LORE</span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-display">
            The Icons of the Sixzmic Universe
          </h2>
          <p className="mt-2 text-sm text-sixzmic-muted">
            Explore the protagonists, anti-heroes, and rogue factions anchoring our serialized
            universes.
          </p>
        </div>

        {/* Character Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {CHARACTERS_LIST.map((char) => (
            <div
              key={char.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-sixzmic-surface transition-all duration-300 hover:border-sixzmic-lime/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-sixzmic-lime/10"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                <Image
                  src={char.image}
                  alt={char.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Studio Pill */}
                <div className="absolute top-3 left-3 rounded-md bg-black/60 backdrop-blur-md border border-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/80">
                  {char.studio}
                </div>

                {/* Character Metadata */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-sixzmic-lime">
                    {char.series}
                  </div>
                  <h3 className="text-lg font-extrabold text-white group-hover:text-sixzmic-lime transition-colors">
                    {char.name}
                  </h3>
                  <p className="text-[11px] text-white/60 line-clamp-1">{char.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
