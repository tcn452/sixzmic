"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { DropsSection } from "@/components/home/DropsSection";
import { StudiosSection } from "@/components/home/StudiosSection";
import { CharactersSection } from "@/components/home/CharactersSection";
import { PodcastsSection } from "@/components/home/PodcastsSection";
import { MembershipSection } from "@/components/home/MembershipSection";
import { InstitutionsSection } from "@/components/home/InstitutionsSection";
import { SubmitModal } from "@/components/modals/SubmitModal";
import { ReaderModal } from "@/components/modals/ReaderModal";
import { CheckoutModal } from "@/components/modals/CheckoutModal";
import { ComicDrop, LATEST_DROPS } from "@/data/sixzmicData";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>("read");
  const [selectedComic, setSelectedComic] = useState<ComicDrop | null>(null);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === "read") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(tabId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleHeroReadClick = (comicId: string) => {
    const found = LATEST_DROPS.find(
      (c) => c.series.toLowerCase().includes(comicId.toLowerCase()) || c.id === comicId
    ) || LATEST_DROPS[0];
    setSelectedComic(found);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-sixzmic-bg text-sixzmic-white">
      {/* Persistent Universal Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        openSubmitModal={() => setIsSubmitOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Option C: Dual-Portal Hero Stage */}
        <HeroSection
          onReadClick={handleHeroReadClick}
          onExploreStudios={() => handleTabChange("studios")}
        />

        {/* Comic Drops & Series Catalog */}
        <DropsSection onSelectComic={(comic) => setSelectedComic(comic)} />

        {/* 6 Creative Studio Houses */}
        <StudiosSection openSubmitModal={() => setIsSubmitOpen(true)} />

        {/* Character Lore & Archives */}
        <CharactersSection />

        {/* Membership Tiers (Working Passes R120 & R250) */}
        <MembershipSection onSelectTier={(tier) => setSelectedTier(tier)} />

        {/* Podcast Network & Audio Player */}
        <PodcastsSection />

        {/* Institutional Publishing & Learn */}
        <InstitutionsSection />
      </main>

      {/* Universal Footer */}
      <Footer
        setActiveTab={handleTabChange}
        openSubmitModal={() => setIsSubmitOpen(true)}
      />

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
