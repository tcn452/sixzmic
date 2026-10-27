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
    <div className="min-h-screen flex flex-col bg-[#f7f7f4] dark:bg-[#070709] text-neutral-900 dark:text-white transition-colors">
      <Navbar openSubmitModal={() => setIsSubmitOpen(true)} />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-sixzmic-lime">
                ACADEMIC PUBLISHING & CURRICULUM
              </div>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl font-display">
                Sixzmic Learn & Institutional Publishing
              </h1>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-white/70">
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
