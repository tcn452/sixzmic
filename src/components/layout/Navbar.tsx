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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#070709]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-95 shrink-0"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-white/15 bg-white/5 p-1 transition-transform group-hover:scale-105">
            <Image
              src="/logo/sixzmic-submark.png"
              alt="Sixzmic Icon"
              fill
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="relative h-6 w-28">
            <Image
              src="/logo/sixzmic-logo.png"
              alt="Sixzmic"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Clean, Spacious Desktop Navigation with Real Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-sixzmic-lime font-semibold"
                    : "text-white/70 hover:text-white"
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
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {openSubmitModal && (
            <button
              onClick={openSubmitModal}
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:border-sixzmic-lime/50 hover:bg-white/10"
            >
              <UploadCloud className="h-3.5 w-3.5 text-sixzmic-lime" />
              <span>Submit IP</span>
            </button>
          )}

          <Link
            href="/comics#membership-tiers"
            className="flex items-center gap-1.5 rounded-xl bg-sixzmic-lime px-4 py-2 text-xs font-bold text-black transition-all hover:bg-sixzmic-limeHover shadow-md shadow-sixzmic-lime/20"
          >
            <span>Fan Pass</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          {openSubmitModal && (
            <button
              onClick={openSubmitModal}
              className="sm:hidden rounded-lg border border-white/15 bg-white/5 p-2 text-sixzmic-lime"
              title="Submit IP"
            >
              <UploadCloud className="h-4 w-4" />
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/15 bg-white/5 p-2 text-white hover:bg-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#070709]/95 px-5 py-6 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between rounded-xl p-3 text-left transition-colors ${
                pathname === "/"
                  ? "bg-sixzmic-lime text-black font-bold"
                  : "text-white/80 hover:bg-white/5"
              }`}
            >
              <span className="text-sm">Home</span>
              <ChevronRight className="h-4 w-4 opacity-50" />
            </Link>

            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl p-3 text-left transition-colors ${
                    isActive
                      ? "bg-sixzmic-lime text-black font-bold"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  <span className="text-sm">{item.label}</span>
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-2.5 pt-4 border-t border-white/10">
            {openSubmitModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openSubmitModal();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-xs font-semibold text-white"
              >
                <UploadCloud className="h-4 w-4 text-sixzmic-lime" />
                <span>Submit Original IP</span>
              </button>
            )}
            <Link
              href="/comics#membership-tiers"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-sixzmic-lime py-3 text-xs font-bold text-black"
            >
              <span>Explore Fan Passes</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
