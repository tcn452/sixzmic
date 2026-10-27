"use client";

import React, { useState } from "react";
import { GAME_VIDEOS } from "@/data/sixzmicData";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export const VideoShowcase: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState(GAME_VIDEOS[0].id);
  const currentVideo = GAME_VIDEOS.find((v) => v.id === activeVideoId) || GAME_VIDEOS[0];

  return (
    <section className="border-b border-black/10 dark:border-white/10 bg-[#f0f0ee] dark:bg-[#060608] py-16 lg:py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-sixzmic-lime">
              STUDIO TRAILERS & GAMEPLAY
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl font-display">
              Trailers, Combos & Gameplay Demos
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-sixzmic-muted max-w-xl">
              Watch real-time gameplay demos, 2D indie trailers, and prototype systems developed
              across the Sixzmic studio network.
            </p>
          </div>

          <Link
            href="/games"
            className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-sixzmic-lime hover:underline"
          >
            <span>Explore All Game Pipelines</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Video Stage Container */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Main Cinema Theater (8 cols) */}
          <div className="lg:col-span-8">
            <div
              key={currentVideo.id}
              className="animate-fadeIn relative overflow-hidden rounded-2xl border border-black/15 dark:border-white/15 bg-black shadow-2xl transition-all duration-300"
            >
              {/* Responsive Video Frame */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              {/* Video Info Bar */}
              <div className="border-t border-white/10 bg-[#0e0e14] p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-sixzmic-lime">
                      {currentVideo.type}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="text-xs text-white/50">{currentVideo.studio}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-white">{currentVideo.title}</h3>
                  <p className="mt-1 text-xs text-white/60 max-w-2xl">{currentVideo.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Selector Playlist (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-white/40">
              Select Showcase
            </div>

            {GAME_VIDEOS.map((video) => {
              const isSelected = video.id === activeVideoId;
              return (
                <button
                  key={video.id}
                  onClick={() => setActiveVideoId(video.id)}
                  className={`group relative flex flex-col rounded-xl border p-4 text-left transition-all duration-300 ease-snappy hover:-translate-y-1 ${
                    isSelected
                      ? "border-black dark:border-sixzmic-lime bg-white dark:bg-[#121218] ring-1 ring-black/15 dark:ring-sixzmic-lime/40 shadow-lg scale-101"
                      : "border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#0e0e14]/50 hover:border-black/25 dark:hover:border-white/25 hover:bg-white dark:hover:bg-[#0e0e14] shadow-xs hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-105 ${
                          isSelected
                            ? "bg-black text-white dark:bg-sixzmic-lime dark:text-black shadow-xs"
                            : "bg-black/10 dark:bg-white/10 text-neutral-800 dark:text-white/70 group-hover:bg-black group-hover:text-white dark:group-hover:bg-sixzmic-lime dark:group-hover:text-black"
                        }`}
                      >
                        <Play className="h-3.5 w-3.5 fill-current ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <span className="text-[11px] font-bold text-neutral-900 dark:text-sixzmic-lime uppercase">
                        {video.type}
                      </span>
                    </div>

                    <span className="text-[10px] text-neutral-500 dark:text-white/40">{video.studio}</span>
                  </div>

                  <h4 className="mt-2.5 text-sm font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-sixzmic-lime transition-colors duration-200">
                    {video.title}
                  </h4>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-white/60 line-clamp-2">{video.description}</p>
                </button>
              );
            })}

            {/* Banner to Studio Pipelines */}
            <div className="mt-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] p-4 text-xs text-neutral-600 dark:text-white/60">
              <span className="font-semibold text-neutral-900 dark:text-white block mb-1">
                Have a playable game build or 2D animation teaser?
              </span>
              Sixzmic finances and co-publishes indie games and animation pilots with full creator IP
              protection.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
