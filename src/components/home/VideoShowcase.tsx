"use client";

import React, { useState } from "react";
import { GAME_VIDEOS } from "@/data/sixzmicData";
import { Gamepad2, Play, Sparkles, Film, ArrowRight } from "lucide-react";
import Link from "next/link";

export const VideoShowcase: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState(GAME_VIDEOS[0].id);
  const currentVideo = GAME_VIDEOS.find((v) => v.id === activeVideoId) || GAME_VIDEOS[0];

  return (
    <section className="border-b border-white/10 bg-[#060608] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
              <Gamepad2 className="h-4 w-4" />
              <span>GAMES & ANIMATION THEATER</span>
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-display">
              Trailers, Combos & Gameplay Showcases
            </h2>
            <p className="mt-2 text-sm text-sixzmic-muted max-w-xl">
              Watch real-time gameplay demos, 2D indie trailers, and prototype systems developed
              across the Sixzmic studio network.
            </p>
          </div>

          <Link
            href="/games"
            className="flex items-center gap-1.5 text-xs font-bold text-sixzmic-lime hover:underline"
          >
            <span>Explore All Games & Pipelines</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Video Stage Container */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Main Cinema Theater (8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl border-2 border-white/15 bg-black shadow-2xl shadow-sixzmic-lime/5">
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
              <div className="border-t border-white/10 bg-[#0a0a0f] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sixzmic-lime animate-pulse" />
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
            <div className="text-xs font-bold uppercase tracking-wider text-white/40">
              Select Showcase
            </div>

            {GAME_VIDEOS.map((video) => {
              const isSelected = video.id === activeVideoId;
              return (
                <button
                  key={video.id}
                  onClick={() => setActiveVideoId(video.id)}
                  className={`group relative flex flex-col rounded-xl border p-4 text-left transition-all ${
                    isSelected
                      ? "border-sixzmic-lime bg-sixzmic-surface ring-1 ring-sixzmic-lime/40 shadow-lg shadow-sixzmic-lime/10"
                      : "border-white/10 bg-sixzmic-surface/50 hover:border-white/25 hover:bg-sixzmic-surface"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
                          isSelected
                            ? "bg-sixzmic-lime text-black"
                            : "bg-white/10 text-white/70 group-hover:bg-white/20"
                        }`}
                      >
                        <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                      </div>
                      <span className="text-[11px] font-bold text-sixzmic-lime uppercase">
                        {video.type}
                      </span>
                    </div>

                    <span className="text-[10px] text-white/40">{video.studio}</span>
                  </div>

                  <h4 className="mt-2.5 text-sm font-bold text-white group-hover:text-sixzmic-lime transition-colors">
                    {video.title}
                  </h4>
                  <p className="mt-1 text-xs text-white/60 line-clamp-2">{video.description}</p>
                </button>
              );
            })}

            {/* Banner to Studio Pipelines */}
            <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs text-white/60">
              <span className="font-semibold text-white block mb-1">
                Have a game build or 2D animation teaser?
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
