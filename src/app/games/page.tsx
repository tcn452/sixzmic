"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { SubmitModal } from "@/components/modals/SubmitModal";
import { Gamepad2, Film, Layers, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function GamesPage() {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#070709] text-white">
      <Navbar openSubmitModal={() => setIsSubmitOpen(true)} />

      <main className="flex-1">
        {/* Hero Header */}
        <div className="border-b border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sixzmic-lime/30 bg-sixzmic-lime/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
                <Gamepad2 className="h-3.5 w-3.5" />
                <span>INTERACTIVE GAMES & ANIMATION PIPELINES</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl font-display">
                Original Games, Combo Demos & Animated Trailers
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                From fast-paced competitive brawlers to stylized 2D adventures and real-time 3D
                animated shorts, explore the playable media and trailers crafted by our studio
                partners.
              </p>
            </div>
          </div>
        </div>

        {/* Cinematic Video Showcase Component */}
        <VideoShowcase />

        {/* Game Development Slates */}
        <div className="py-16 lg:py-24 border-b border-white/10 bg-[#070709]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold font-display sm:text-3xl">
                Active Game Projects in Production
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Interactive adaptations and standalone titles currently in prototype or pre-alpha
                stages across our studios.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-[#0e0e14] p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-sixzmic-lime bg-sixzmic-lime/10 px-2.5 py-1 rounded-md">
                    Action Brawler · In Engine
                  </span>
                  <span className="text-xs text-white/40">Studio N2K</span>
                </div>
                <h3 className="mt-4 text-xl font-bold font-display">Rank 1: Combat League</h3>
                <p className="mt-2 text-xs text-white/70 leading-relaxed">
                  Fast-paced 3D arena brawler featuring fluid kinetic strike combinations, neural
                  dashing, and stylized cel-shaded visuals directly adapted from the comic series.
                </p>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/40">Target Platforms: PC · Console</span>
                  <span className="text-sixzmic-lime font-bold">First Playable Demo 2026</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0e0e14] p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-sixzmic-lime bg-sixzmic-lime/10 px-2.5 py-1 rounded-md">
                    2D Atmospheric · Adventure
                  </span>
                  <span className="text-xs text-white/40">Dream Shards</span>
                </div>
                <h3 className="mt-4 text-xl font-bold font-display">The Traveller: Shattered Epoch</h3>
                <p className="mt-2 text-xs text-white/70 leading-relaxed">
                  Hand-illustrated 2D platforming adventure with rich lore, dynamic puzzle mechanics,
                  and a haunting orchestral score created by our transmedia sound team.
                </p>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/40">Target Platforms: Steam · Mobile</span>
                  <span className="text-sixzmic-lime font-bold">Alpha Milestone Q3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer openSubmitModal={() => setIsSubmitOpen(true)} />
      <SubmitModal isOpen={isSubmitOpen} onClose={() => setIsSubmitOpen(false)} />
    </div>
  );
}
