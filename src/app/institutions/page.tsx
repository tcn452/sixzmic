"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InstitutionsSection } from "@/components/home/InstitutionsSection";
import { SubmitModal } from "@/components/modals/SubmitModal";
import { GraduationCap, BookOpen, Layers } from "lucide-react";

export default function InstitutionsPage() {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#070709] text-white">
      <Navbar openSubmitModal={() => setIsSubmitOpen(true)} />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sixzmic-lime/30 bg-sixzmic-lime/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
                <GraduationCap className="h-3.5 w-3.5" />
                <span>ACADEMIC & LIBRARY DISTRIBUTIONS</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl font-display">
                Sixzmic Learn & Institutional Publishing
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Partnering with universities, high schools, creative arts academies, and library
                systems to license contemporary visual storytelling, comic archives, and production
                decks.
              </p>
            </div>
          </div>
        </div>

        <InstitutionsSection />
      </main>

      <Footer openSubmitModal={() => setIsSubmitOpen(true)} />
      <SubmitModal isOpen={isSubmitOpen} onClose={() => setIsSubmitOpen(false)} />
    </div>
  );
}
