"use client";

import React, { useState } from "react";
import { PODCAST_EPISODES } from "@/data/sixzmicData";
import { Play, Pause, Clock, Volume2 } from "lucide-react";

export const PodcastsSection: React.FC = () => {
  const [playingCode, setPlayingCode] = useState<string | null>(null);

  const togglePlay = (code: string) => {
    setPlayingCode(playingCode === code ? null : code);
  };

  return (
    <section id="podcasts" className="border-b border-black/10 dark:border-white/10 bg-[#f7f7f4] dark:bg-[#08080C] py-16 lg:py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-sixzmic-lime">
              AUDIO BROADCASTS & DEVLOGS
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl font-display">
              Creator Conversations & Industry DevLogs
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-sixzmic-muted max-w-xl">
              Hosted across our studio teams, diving into indie comic distribution, game prototypes,
              animation pipelines, and IP rights retention.
            </p>
          </div>

          <div className="text-xs font-semibold text-neutral-500 dark:text-white/60">
            4 Production Shows Active
          </div>
        </div>

        {/* Episodes List */}
        <div className="mt-10 space-y-3">
          {PODCAST_EPISODES.map((ep) => {
            const isPlaying = playingCode === ep.code;
            return (
              <div
                key={ep.code}
                className={`group flex flex-col justify-between gap-4 rounded-xl border p-4 sm:p-5 transition-all md:flex-row md:items-center ${
                  isPlaying
                    ? "border-black dark:border-sixzmic-lime bg-white dark:bg-sixzmic-surface shadow-md"
                    : "border-black/10 dark:border-white/10 bg-white/70 dark:bg-sixzmic-surface/60 hover:border-black/20 dark:hover:border-white/20 hover:bg-white dark:hover:bg-sixzmic-surface"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Play Button */}
                  <button
                    onClick={() => togglePlay(ep.code)}
                    className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-105 ${
                      isPlaying
                        ? "bg-black text-white dark:bg-sixzmic-lime dark:text-black"
                        : "border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-neutral-900 dark:text-white hover:border-black dark:hover:border-sixzmic-lime"
                    }`}
                    aria-label={`Play ${ep.title}`}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                  </button>

                  {/* Metadata */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-black/5 dark:bg-sixzmic-lime/10 px-1.5 py-0.5 text-[10px] font-bold text-neutral-900 dark:text-sixzmic-lime">
                        {ep.code}
                      </span>
                      <span className="text-xs font-semibold text-neutral-500 dark:text-white/40">{ep.show}</span>
                      <span className="text-black/20 dark:text-white/20">•</span>
                      <div className="flex items-center gap-1 text-[11px] text-neutral-500 dark:text-white/50">
                        <Clock className="h-3 w-3" />
                        <span>{ep.duration}</span>
                      </div>
                    </div>

                    <h3 className="mt-1 text-base font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-sixzmic-lime transition-colors">
                      {ep.title}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 dark:text-white/60 line-clamp-2 max-w-2xl">
                      {ep.description}
                    </p>
                  </div>
                </div>

                {/* Right Column: Guest & Status */}
                <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pl-15 md:pl-0 border-t md:border-t-0 pt-2 md:pt-0 border-black/5 dark:border-white/5">
                  <div className="text-left md:text-right">
                    <span className="block text-[10px] uppercase font-bold text-neutral-400 dark:text-white/40">Featuring</span>
                    <span className="text-xs font-semibold text-neutral-800 dark:text-white/80">{ep.guest}</span>
                  </div>

                  {isPlaying && (
                    <div className="flex items-center gap-1 text-black dark:text-sixzmic-lime text-xs font-bold">
                      <Volume2 className="h-4 w-4" />
                      <span>Playing</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
