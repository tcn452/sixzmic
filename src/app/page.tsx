"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { DropsSection } from "@/components/home/DropsSection";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { StudiosSection } from "@/components/home/StudiosSection";
import { CharactersSection } from "@/components/home/CharactersSection";
import { MembershipSection } from "@/components/home/MembershipSection";
import { SubmitModal } from "@/components/modals/SubmitModal";
import { ReaderModal } from "@/components/modals/ReaderModal";
import { CheckoutModal } from "@/components/modals/CheckoutModal";
import { ComicDrop, LATEST_DROPS } from "@/data/sixzmicData";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [selectedComic, setSelectedComic] = useState<ComicDrop | null>(null);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleHeroReadClick = (comicId: string) => {
    const found = LATEST_DROPS.find(
      (c) => c.series.toLowerCase().includes(comicId.toLowerCase()) || c.id === comicId
    ) || LATEST_DROPS[0];
    setSelectedComic(found);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#070709] text-white">
      {/* Persistent Navigation */}
      <Navbar openSubmitModal={() => setIsSubmitOpen(true)} />

      {/* Main Frontdoor Experience */}
      <main className="flex-1">
        {/* Full Uncropped Hero Stage */}
        <HeroSection
          onReadClick={handleHeroReadClick}
          onExploreStudios={() => router.push("/studios")}
        />

        {/* Comic Drops & Series Catalog */}
        <DropsSection onSelectComic={(comic) => setSelectedComic(comic)} />

        {/* YouTube Game Trailers & Animation Showcase */}
        <VideoShowcase />

        {/* 6 Creative Studio Houses */}
        <StudiosSection openSubmitModal={() => setIsSubmitOpen(true)} />

        {/* Character Lore & Archives */}
        <CharactersSection />

        {/* Membership Passes (R120 Fan Pass & R250 Collector) */}
        <MembershipSection onSelectTier={(tier) => setSelectedTier(tier)} />
      </main>

      {/* Universal Multi-Page Footer */}
      <Footer openSubmitModal={() => setIsSubmitOpen(true)} />

      {/* Modals */}
      <SubmitModal
        isOpen={isSubmitOpen}
        onClose={() => setIsSubmitOpen(false)}
      />

      <ReaderModal
        comic={selectedComic}
        onClose={() => setSelectedComic(null)}
        onOpenMembership={() => {
          setSelectedComic(null);
          setSelectedTier("Fan Pass");
        }}
      />

      <CheckoutModal
        tierName={selectedTier}
        onClose={() => setSelectedTier(null)}
      />
    </div>
  );
}
