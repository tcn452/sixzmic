"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/navigation";
import {
  BookOpen,
  Building2,
  Headphones,
  GraduationCap,
  Sparkles,
  Menu,
  X,
  UploadCloud,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openSubmitModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  openSubmitModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "read", label: "Home Base", icon: BookOpen, desc: "Comics & Drops" },
    { id: "studios", label: "Studios & IP", icon: Building2, desc: "6 Creative Houses" },
    { id: "characters", label: "Characters", icon: Sparkles, desc: "Lore Dossiers" },
    { id: "podcasts", label: "Podcasts", icon: Headphones, desc: "Audio Network" },
    { id: "institutions", label: "Institutions", icon: GraduationCap, desc: "Learn & Plans" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              setActiveTab("read");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-1 transition-transform group-hover:scale-105">
              <Image
                src="/logo/sixzmic-submark.png"
                alt="Sixzmic Icon"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="relative h-7 w-28 sm:w-32">
              <Image
                src="/logo/sixzmic-logo.png"
                alt="Sixzmic"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </button>

          {/* Badge */}
          <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-sixzmic-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-sixzmic-lime animate-pulse" />
            <span>ENTERTAINMENT PUBLISHER</span>
          </div>
        </div>

        {/* Desktop Portal Switcher */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-sixzmic-surface/80 p-1 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-sixzmic-lime text-black shadow-lg shadow-sixzmic-lime/20"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? "text-black" : "text-white/60"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={openSubmitModal}
            className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:border-sixzmic-lime/50 hover:bg-white/10"
          >
            <UploadCloud className="h-4 w-4 text-sixzmic-lime" />
            <span>Submit IP</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("read");
              const el = document.getElementById("membership-tiers");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 rounded-xl bg-sixzmic-lime px-4 py-2.5 text-xs font-bold text-black transition-all hover:bg-sixzmic-limeHover hover:shadow-lg hover:shadow-sixzmic-lime/25"
          >
            <span>Fan Pass</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={openSubmitModal}
            className="rounded-lg border border-white/15 bg-white/5 p-2 text-sixzmic-lime"
            title="Submit IP"
          >
            <UploadCloud className="h-5 w-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/15 bg-white/5 p-2 text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-sixzmic-bg/95 px-4 pb-6 pt-2 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-xl p-3 text-left transition-colors ${
                    isActive
                      ? "bg-sixzmic-lime text-black font-bold"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-4 w-4 ${isActive ? "text-black" : "text-sixzmic-lime"}`} />
                    <div>
                      <div className="text-sm font-semibold">{item.label}</div>
                      <div className={`text-xs ${isActive ? "text-black/70" : "text-white/40"}`}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openSubmitModal();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white"
            >
              <UploadCloud className="h-4 w-4 text-sixzmic-lime" />
              <span>Submit IP to Publishers</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveTab("read");
                const el = document.getElementById("membership-tiers");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-sixzmic-lime py-3 text-sm font-bold text-black"
            >
              <span>Explore Fan Passes</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
