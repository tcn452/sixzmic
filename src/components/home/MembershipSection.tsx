"use client";

import React, { useState } from "react";
import { MEMBERSHIP_TIERS } from "@/data/sixzmicData";
import { Check, Sparkles, Shield, Zap, ArrowRight } from "lucide-react";

interface MembershipSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="membership-tiers" className="border-b border-white/10 bg-sixzmic-bg py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sixzmic-lime/20 bg-sixzmic-lime/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
            <Zap className="h-3.5 w-3.5" />
            <span>FAN PASS & COLLECTOR MEMBERSHIPS</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
            Support the Studios. Own the Drops.
          </h2>
          <p className="mt-4 text-sm text-sixzmic-muted">
            Direct-to-creator funding model. 80% of membership revenue directly supports independent
            comic artists, animators, and game builders.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 transition-all duration-300 ${
                tier.popular
                  ? "border-sixzmic-lime bg-sixzmic-surface shadow-2xl shadow-sixzmic-lime/10 md:-translate-y-2"
                  : "border-white/10 bg-sixzmic-surface/60 hover:border-white/20 hover:bg-sixzmic-surface"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sixzmic-lime px-3 py-0.5 text-[11px] font-black uppercase tracking-wider text-black shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white font-display">{tier.name}</h3>
                <p className="mt-1 text-xs text-white/50">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-white tracking-tight font-display">
                    {tier.price}
                  </span>
                  <span className="text-xs uppercase font-medium text-white/40">
                    {tier.frequency}
                  </span>
                </div>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <ul className="space-y-3 text-xs text-white/80">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 shrink-0 text-sixzmic-lime mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onSelectTier(tier.name)}
                className={`mt-8 w-full rounded-xl py-3 text-center text-xs font-bold tracking-wide transition-all ${
                  tier.popular
                    ? "bg-sixzmic-lime text-black hover:bg-sixzmic-limeHover hover:shadow-lg hover:shadow-sixzmic-lime/20"
                    : "border border-white/15 bg-white/5 text-white hover:border-sixzmic-lime hover:text-sixzmic-lime"
                }`}
              >
                {tier.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
