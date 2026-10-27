"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  UploadCloud,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface NavbarProps {
  openSubmitModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ openSubmitModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/comics", label: "Comics & Drops" },
    { href: "/studios", label: "Studios" },
    { href: "/games", label: "Games & Videos" },
    { href: "/characters", label: "Characters" },
    { href: "/podcasts", label: "Podcasts" },
    { href: "/institutions", label: "Institutions" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#070709]/95 backdrop-blur-2xl transition-all">
      <div className="mx-auto flex h-22 sm:h-24 max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Brand / Logo (Bold, Prominent & Legible) */}
        <Link
          href="/"
          className="group flex items-center gap-3.5 transition-transform hover:scale-[1.02] shrink-0"
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-xl border border-white/15 bg-white/5 p-1.5 transition-colors group-hover:border-sixzmic-lime/50 shadow-md">
            <Image
              src="/logo/sixzmic-submark.png"
              alt="Sixzmic Icon"
              fill
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="relative h-8 w-36 sm:h-9 sm:w-44">
            <Image
              src="/logo/sixzmic-logo.png"
              alt="Sixzmic"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Spacious, Elegant Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[15px] font-semibold tracking-wide transition-all ${
                  isActive
                    ? "text-sixzmic-lime"
                    : "text-white/75 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-sixzmic-lime shadow-sm shadow-sixzmic-lime" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          {openSubmitModal && (
            <button
              onClick={openSubmitModal}
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:border-sixzmic-lime/50 hover:bg-white/10"
            >
              <UploadCloud className="h-4 w-4 text-sixzmic-lime" />
              <span>Submit IP</span>
            </button>
          )}

          <Link
            href="/comics#membership-tiers"
            className="flex items-center gap-1.5 rounded-xl bg-sixzmic-lime px-5 py-2.5 text-xs sm:text-sm font-bold text-black transition-all hover:bg-sixzmic-limeHover shadow-lg shadow-sixzmic-lime/20 hover:scale-[1.02]"
          >
            <span>Fan Pass</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex xl:hidden items-center gap-3">
          {openSubmitModal && (
            <button
              onClick={openSubmitModal}
              className="sm:hidden rounded-xl border border-white/15 bg-white/5 p-2.5 text-sixzmic-lime"
              title="Submit IP"
            >
              <UploadCloud className="h-5 w-5" />
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-white/15 bg-white/5 p-2.5 text-white hover:bg-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#070709]/98 px-6 py-8 backdrop-blur-3xl xl:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between rounded-xl p-3.5 text-left transition-colors ${
                pathname === "/"
                  ? "bg-sixzmic-lime text-black font-bold"
                  : "text-white/80 hover:bg-white/5"
              }`}
            >
              <span className="text-base font-semibold">Home</span>
              <ChevronRight className="h-4 w-4 opacity-50" />
            </Link>

            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl p-3.5 text-left transition-colors ${
                    isActive
                      ? "bg-sixzmic-lime text-black font-bold"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  <span className="text-base font-semibold">{item.label}</span>
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-white/10">
            {openSubmitModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openSubmitModal();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3.5 text-sm font-semibold text-white"
              >
                <UploadCloud className="h-4 w-4 text-sixzmic-lime" />
                <span>Submit Original IP to Publishers</span>
              </button>
            )}
            <Link
              href="/comics#membership-tiers"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-sixzmic-lime py-3.5 text-sm font-bold text-black shadow-lg shadow-sixzmic-lime/20"
            >
              <span>Explore Fan Passes</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
