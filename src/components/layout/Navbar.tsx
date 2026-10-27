"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, UploadCloud, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

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
    <header className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-[#f7f7f4]/90 dark:bg-[#070709]/90 backdrop-blur-2xl transition-colors">
      <div className="mx-auto flex h-20 sm:h-22 max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Single Clean Brand Logo (No redundant double logo) */}
        <Link
          href="/"
          className="group flex items-center transition-transform hover:scale-[1.01] shrink-0"
        >
          <div className="relative h-9 w-36 sm:h-10 sm:w-44">
            <Image
              src="/logo/sixzmic-logo.png"
              alt="Sixzmic"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Spacious, Clean Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-9">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[14px] sm:text-[15px] font-semibold tracking-wide transition-colors ${
                  isActive
                    ? "text-black dark:text-sixzmic-lime"
                    : "text-neutral-600 dark:text-white/70 hover:text-black dark:hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-black dark:bg-sixzmic-lime shadow-sm" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3.5 shrink-0">
          <ThemeToggle />

          {openSubmitModal && (
            <button
              onClick={openSubmitModal}
              className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-800 dark:text-white transition-all hover:border-black/25 dark:hover:border-sixzmic-lime/50 hover:bg-black/[0.06] dark:hover:bg-white/10"
            >
              <UploadCloud className="h-4 w-4 text-neutral-800 dark:text-sixzmic-lime" />
              <span>Submit IP</span>
            </button>
          )}

          <Link
            href="/comics#membership-tiers"
            className="flex items-center gap-1.5 rounded-xl bg-black dark:bg-sixzmic-lime px-5 py-2.5 text-xs sm:text-sm font-bold text-white dark:text-black transition-all hover:opacity-90 shadow-md"
          >
            <span>Fan Pass</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex xl:hidden items-center gap-2">
          <ThemeToggle />

          {openSubmitModal && (
            <button
              onClick={openSubmitModal}
              className="sm:hidden rounded-xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 p-2 text-neutral-800 dark:text-sixzmic-lime"
              title="Submit IP"
            >
              <UploadCloud className="h-5 w-5" />
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 p-2 text-neutral-800 dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-black/10 dark:border-white/10 bg-[#f7f7f4]/98 dark:bg-[#070709]/98 px-6 py-8 backdrop-blur-3xl xl:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between rounded-xl p-3.5 text-left transition-colors ${
                pathname === "/"
                  ? "bg-black dark:bg-sixzmic-lime text-white dark:text-black font-bold"
                  : "text-neutral-800 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5"
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
                      ? "bg-black dark:bg-sixzmic-lime text-white dark:text-black font-bold"
                      : "text-neutral-800 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <span className="text-base font-semibold">{item.label}</span>
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-black/10 dark:border-white/10">
            {openSubmitModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openSubmitModal();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 py-3.5 text-sm font-semibold text-neutral-900 dark:text-white"
              >
                <UploadCloud className="h-4 w-4 text-black dark:text-sixzmic-lime" />
                <span>Submit Original IP</span>
              </button>
            )}
            <Link
              href="/comics#membership-tiers"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-black dark:bg-sixzmic-lime py-3.5 text-sm font-bold text-white dark:text-black shadow-md"
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
