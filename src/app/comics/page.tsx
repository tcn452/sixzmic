"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DropsSection } from "@/components/home/DropsSection";
import { MembershipSection } from "@/components/home/MembershipSection";
import { ReaderModal } from "@/components/modals/ReaderModal";
import { CheckoutModal } from "@/components/modals/CheckoutModal";
import { SubmitModal } from "@/components/modals/SubmitModal";
import { ComicDrop } from "@/data/sixzmicData";
import { BookOpen, Flame, Sparkles } from "lucide-react";

export default function ComicsPage() {
  const [selectedComic, setSelectedComic] = useState<ComicDrop | null>(null);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f4] dark:bg-[#070709] text-neutral-900 dark:text-white transition-colors">
      <Navbar openSubmitModal={() => setIsSubmitOpen(true)} />

      <main className="flex-1">
        {/* Hero Header */}
        <div className="border-b border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-sixzmic-lime">
                COMIC ARCHIVES & CATALOG
              </div>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl font-display">
                Original Comic Series, Graphic Novels & Variant Drops
              </h1>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-white/70">
                Explore serialized indie releases from our partner studios. Read first chapters
                free, discover upcoming drops, or unlock 24-hour early access with a Fan Pass.
              </p>
            </div>
          </div>
        </div>

        {/* Drops Grid Component */}
        <DropsSection onSelectComic={(comic) => setSelectedComic(comic)} />

        {/* Membership Passes */}
        <MembershipSection onSelectTier={(tier) => setSelectedTier(tier)} />
      </main>

      <Footer openSubmitModal={() => setIsSubmitOpen(true)} />

      {/* Modals */}
      <ReaderModal
        comic={selectedComic}
        onClose={() => setSelectedComic(null)}
        onOpenMembership={() => {
          setSelectedComic(null);
          setSelectedTier("Fan Pass");
        }}
      />
      <CheckoutModal tierName={selectedTier} onClose={() => setSelectedTier(null)} />
      <SubmitModal isOpen={isSubmitOpen} onClose={() => setIsSubmitOpen(false)} />
    </div>
  );
}
