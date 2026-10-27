"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070709] text-white">
      <Navbar />

      <main className="flex-1 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sixzmic-lime/30 bg-sixzmic-lime/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl font-display">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-white/50">
            Last updated: October 2026 · Sixzmic Publishing Group
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/75 border-t border-white/10 pt-8">
            <div>
              <h2 className="text-xl font-bold text-white font-display">1. Information We Collect</h2>
              <p className="mt-2 text-xs text-white/60">
                Sixzmic collects information to provide our comic reading experience, process Fan Pass
                memberships, and facilitate creator IP submissions. This includes account email
                addresses, reader bookmarks, and IP submission details. We do not sell your personal
                data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white font-display">2. How We Use Information</h2>
              <p className="mt-2 text-xs text-white/60">
                Information is used to deliver serialized comic drops, maintain subscriber accounts,
                stream audio podcasts, and communicate with institutional partners regarding
                publishing licenses.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white font-display">3. Creator IP Protection</h2>
              <p className="mt-2 text-xs text-white/60">
                All portfolios, pitch decks, and manuscript files submitted through the Creator Lab
                are treated under strict confidentiality agreements and protected under the Sixzmic
                IP Registry framework.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white font-display">4. Contact & Inquiries</h2>
              <p className="mt-2 text-xs text-white/60">
                For questions regarding your data privacy, contact our compliance officer at{" "}
                <a href="mailto:privacy@sixzmic.com" className="text-sixzmic-lime hover:underline">
                  privacy@sixzmic.com
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
