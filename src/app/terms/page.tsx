"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Scale } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070709] text-white">
      <Navbar />

      <main className="flex-1 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sixzmic-lime/30 bg-sixzmic-lime/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
            <Scale className="h-3.5 w-3.5" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl font-display">
            Terms of Use
          </h1>
          <p className="mt-2 text-xs text-white/50">
            Effective Date: October 2026 · Sixzmic Publishing Group
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/75 border-t border-white/10 pt-8">
            <div>
              <h2 className="text-xl font-bold text-white font-display">1. Platform Access & Reader Rules</h2>
              <p className="mt-2 text-xs text-white/60">
                Sixzmic grants users a personal, non-exclusive license to view serialized comic art,
                listen to podcast broadcasts, and review game trailers for personal entertainment.
                Unauthorized scraping, reproduction, or redistribution of artwork is strictly
                prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white font-display">2. Fan Pass & Subscriptions</h2>
              <p className="mt-2 text-xs text-white/60">
                Fan Pass (R120/mo) and Collector (R250/mo) memberships grant early access drops and
                digital perks. Subscriptions can be cancelled at any time without penalty or
                cancellation fees.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white font-display">3. Intellectual Property Ownership</h2>
              <p className="mt-2 text-xs text-white/60">
                All original characters, comic artwork, trade names, and story mythologies are the
                registered intellectual property of Sixzmic Publishing and its respective partner
                studios.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white font-display">4. Legal Contact</h2>
              <p className="mt-2 text-xs text-white/60">
                Official inquiries can be directed to{" "}
                <a href="mailto:legal@sixzmic.com" className="text-sixzmic-lime hover:underline">
                  legal@sixzmic.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
