"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Mail, ArrowUpRight, Sparkles } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openSubmitModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openSubmitModal }) => {
  return (
    <footer className="border-t border-white/10 bg-[#060608] pt-16 pb-12 text-sm text-sixzmic-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-1">
                <Image
                  src="/logo/sixzmic-submark.png"
                  alt="Sixzmic Icon"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="relative h-7 w-32">
                <Image
                  src="/logo/sixzmic-logo.png"
                  alt="Sixzmic"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Sixzmic is a global entertainment publisher that discovers, houses, protects, and
              distributes original IP across serialized comics, interactive games, and animation.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="relative h-10 w-32 cursor-pointer opacity-90 transition-opacity hover:opacity-100">
                <Image
                  src="/badges/app-store.svg"
                  alt="Download on App Store"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-10 w-32 cursor-pointer opacity-90 transition-opacity hover:opacity-100">
                <Image
                  src="/badges/google-play.svg"
                  alt="Get it on Google Play"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
              <ShieldCheck className="h-4 w-4 text-sixzmic-lime" />
              <span>Registered Creative Works & Verified Intellectual Property</span>
            </div>
          </div>

          {/* Navigation Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Universal Portals</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    setActiveTab("read");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-sixzmic-lime transition-colors text-left"
                >
                  Home Base (Comics & Drops)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab("studios");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-sixzmic-lime transition-colors text-left"
                >
                  Studios & Publishing Houses
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab("characters");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-sixzmic-lime transition-colors text-left"
                >
                  Characters & Lore Dossiers
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab("podcasts");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-sixzmic-lime transition-colors text-left"
                >
                  Sixzmic Podcast Network
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab("institutions");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-sixzmic-lime transition-colors text-left"
                >
                  Institutional Plans & Learn
                </button>
              </li>
            </ul>
          </div>

          {/* Studios Roster */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Creative Studios</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <span className="text-white/80">Studio N2K</span>
                <span className="block text-[11px] text-white/40">Games · Animation</span>
              </li>
              <li>
                <span className="text-white/80">Krash Nation</span>
                <span className="block text-[11px] text-white/40">Comics · Animation</span>
              </li>
              <li>
                <span className="text-white/80">Studio Leviathan</span>
                <span className="block text-[11px] text-white/40">Sci-Fi & Graphic Novels</span>
              </li>
              <li>
                <span className="text-white/80">Dream Shards</span>
                <span className="block text-[11px] text-white/40">Interactive Games</span>
              </li>
              <li>
                <span className="text-white/80">Kamo Vision Comics</span>
                <span className="block text-[11px] text-white/40">Indie Series & Visual Arts</span>
              </li>
              <li>
                <span className="text-white/80">Converge</span>
                <span className="block text-[11px] text-white/40">Transmedia Design House</span>
              </li>
            </ul>
          </div>

          {/* Publishing & Creator Lab */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Publishing & Legal</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <button
                  onClick={openSubmitModal}
                  className="flex items-center gap-1 text-sixzmic-lime hover:underline"
                >
                  <span>Submit Original IP</span>
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </li>
              <li>
                <span className="text-white/70">ISNI & IPI Party Registry</span>
              </li>
              <li>
                <span className="text-white/70">ISWC Works Catalog</span>
              </li>
              <li>
                <span className="text-white/70">Transmedia Rights Licensing</span>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:support@sixzmic.com"
                  className="flex items-center gap-1.5 text-white/80 hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 text-sixzmic-lime" />
                  <span>support@sixzmic.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-white/40">
          <p>© {new Date().getFullYear()} Sixzmic Publishing Group. All original intellectual property rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
            <span className="hover:text-white cursor-pointer transition-colors">IP Registry Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
