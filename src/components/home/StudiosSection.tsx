"use client";

import React from "react";
import Image from "next/image";
import { STUDIOS_LIST } from "@/data/sixzmicData";
import { Building2, Sparkles, Layers, ShieldCheck, ArrowRight, Gamepad2, Film, Palette } from "lucide-react";

interface StudiosSectionProps {
  onSelectStudio?: (studioId: string) => void;
  openSubmitModal: () => void;
}

export const StudiosSection: React.FC<StudiosSectionProps> = ({ openSubmitModal }) => {
  return (
    <section id="studios" className="border-b border-white/10 bg-[#09090D] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
            <Building2 className="h-4 w-4" />
            <span>PUBLISHER ECOSYSTEM</span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
            Creative Powerhouses Under the Sixzmic Umbrella
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sixzmic-muted">
            Sixzmic houses a roster of specialized creative studios — each dedicated to comics,
            real-time animation, game mechanics, or visual identity, united by our parent publishing
            and IP rights framework.
          </p>
        </div>

        {/* 6 Studios Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STUDIOS_LIST.map((studio) => (
            <div
              key={studio.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-sixzmic-surface p-6 transition-all duration-300 hover:border-sixzmic-lime/50 hover:bg-sixzmic-surfaceHover hover:shadow-2xl hover:shadow-sixzmic-lime/5"
            >
              <div>
                {/* Header with Logo */}
                <div className="flex items-center justify-between">
                  <div className="relative h-14 w-28 overflow-hidden rounded-xl bg-white/5 p-2 border border-white/10 transition-transform group-hover:scale-105">
                    <Image
                      src={studio.logo}
                      alt={studio.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {studio.focus.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-white/70 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Studio Name & Role */}
                <h3 className="mt-5 text-xl font-bold text-white group-hover:text-sixzmic-lime transition-colors">
                  {studio.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-white/50">{studio.role}</p>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-white/70">
                  {studio.description}
                </p>
              </div>

              {/* Active Projects Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-white/40">Active Slate</span>
                  <span className="font-semibold text-white/90">{studio.activeProjects}</span>
                </div>
                <div className="h-7 w-7 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-sixzmic-lime group-hover:text-black transition-colors">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Publisher Pitch Banner */}
        <div className="mt-12 rounded-2xl border border-white/15 bg-gradient-to-r from-white/5 via-white/[0.02] to-transparent p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sixzmic-lime">
              <ShieldCheck className="h-4 w-4" />
              <span>CREATOR IP ACQUISITIONS & CO-PUBLISHING</span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl font-display">
              Are you an independent comic creator, animator, or game developer?
            </h3>
            <p className="mt-2 text-sm text-white/60 leading-relaxed">
              Sixzmic partners with emerging creative voices to fund production, manage global
              licensing, and distribute serialized IP worldwide while protecting your rights.
            </p>
          </div>

          <button
            onClick={openSubmitModal}
            className="shrink-0 flex items-center gap-2 rounded-xl bg-sixzmic-lime px-6 py-3.5 text-sm font-bold text-black transition-all hover:bg-sixzmic-limeHover hover:shadow-lg hover:shadow-sixzmic-lime/20"
          >
            <span>Submit Your IP for Review</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
