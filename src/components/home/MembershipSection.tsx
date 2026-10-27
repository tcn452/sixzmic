"use client";

import React from "react";
import { MEMBERSHIP_TIERS } from "@/data/sixzmicData";
import { Check } from "lucide-react";

interface MembershipSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="membership-tiers" className="border-b border-black/10 dark:border-white/10 bg-[#f7f7f4] dark:bg-sixzmic-bg py-16 lg:py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-sixzmic-lime">
            MEMBERSHIPS & CREATOR SUPPORT
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl font-display">
            Support the Studios. Own the Drops.
          </h2>
          <p className="mt-4 text-sm text-neutral-600 dark:text-sixzmic-muted">
            Direct-to-creator funding model. 80% of membership revenue directly supports independent
            comic artists, animators, and game builders.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 transition-all duration-300 ease-snappy ${
                tier.popular
                  ? "border-black dark:border-sixzmic-lime bg-white dark:bg-sixzmic-surface shadow-xl md:-translate-y-2 ring-1 ring-black/10 dark:ring-sixzmic-lime/30 hover:-translate-y-3 hover:shadow-2xl"
                  : "border-black/10 dark:border-white/10 bg-white/70 dark:bg-sixzmic-surface/60 hover:border-black/25 dark:hover:border-white/20 hover:-translate-y-1 hover:shadow-lg"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-black dark:bg-sixzmic-lime px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-white dark:text-black shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">{tier.name}</h3>
                <p className="mt-1 text-xs text-neutral-500 dark:text-white/50">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight font-display">
                    {tier.price}
                  </span>
                  <span className="text-xs uppercase font-medium text-neutral-500 dark:text-white/40">
                    {tier.frequency}
                  </span>
                </div>

                <div className="mt-6 border-t border-black/10 dark:border-white/10 pt-6">
                  <ul className="space-y-3 text-xs text-neutral-700 dark:text-white/80">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 shrink-0 text-black dark:text-sixzmic-lime mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onSelectTier(tier.name)}
                className={`tactile-btn mt-8 w-full rounded-xl py-3 text-center text-xs font-bold tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                  tier.popular
                    ? "bg-black text-white dark:bg-sixzmic-lime dark:text-black hover:opacity-90 shadow-md hover:shadow-lg"
                    : "border border-black/15 dark:border-white/15 bg-black/[0.03] dark:bg-white/5 text-neutral-900 dark:text-white hover:border-black/30 dark:hover:border-sixzmic-lime hover:bg-black/[0.06] dark:hover:bg-white/10"
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
