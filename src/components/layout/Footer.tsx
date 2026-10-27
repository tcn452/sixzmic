"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Mail, ArrowUpRight } from "lucide-react";

interface FooterProps {
  openSubmitModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ openSubmitModal }) => {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-[#f0f0ee] dark:bg-[#060608] pt-16 pb-12 text-sm text-neutral-600 dark:text-sixzmic-muted transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <div className="relative h-8 w-36 sm:h-9 sm:w-40">
                <Image
                  src="/logo/sixzmic-logo.png"
                  alt="Sixzmic"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-white/60">
              Sixzmic is a global entertainment publisher that discovers, houses, protects, and
              distributes original IP across serialized comics, interactive games, and animation.
            </p>

            {/* Native Store Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="group flex items-center gap-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] px-3.5 py-2 transition-all hover:border-black/20 dark:hover:border-white/20 cursor-pointer shadow-xs">
                <svg className="h-5 w-5 fill-black dark:fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.67-.82 1.13-1.96.99-3.12-1 .04-2.16.66-2.84 1.47-.6.7-1.12 1.83-.98 2.95 1.11.09 2.16-.48 2.83-1.3z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[9px] uppercase tracking-wider text-neutral-500 dark:text-white/40">Download on</div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white tracking-wide">App Store</div>
                </div>
              </div>

              <div className="group flex items-center gap-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] px-3.5 py-2 transition-all hover:border-black/20 dark:hover:border-white/20 cursor-pointer shadow-xs">
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M3.6 2.4 14.5 13.3 12 15.8 2.4 3.7c.3-.8.8-1.1 1.2-1.3z" />
                  <path fill="#34A853" d="M17.3 10.5 14.5 13.3 3.6 2.4C4.3 1.9 5.3 2 6.1 2.5l11.2 8z" />
                  <path fill="#FBBC04" d="m14.5 13.3 2.8 2.8-11.2 8c-.8.5-1.8.6-2.5.1l10.9-10.9z" />
                  <path fill="#EA4335" d="m20.5 12.3-3.2-1.8-2.8 2.8 2.8 2.8 3.2-1.8c1-.6 1-1.4 0-2z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[9px] uppercase tracking-wider text-neutral-500 dark:text-white/40">Get it on</div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white tracking-wide">Google Play</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-neutral-500 dark:text-white/40">
              <ShieldCheck className="h-4 w-4 text-black dark:text-sixzmic-lime" />
              <span>Registered Creative Works & Verified Intellectual Property</span>
            </div>
          </div>

          {/* Navigation Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">Universal Portals</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/comics" className="hover:text-black dark:hover:text-sixzmic-lime transition-colors">
                  Comics & Drop Catalog
                </Link>
              </li>
              <li>
                <Link href="/studios" className="hover:text-black dark:hover:text-sixzmic-lime transition-colors">
                  Studios & Publishing Houses
                </Link>
              </li>
              <li>
                <Link href="/games" className="hover:text-black dark:hover:text-sixzmic-lime transition-colors">
                  Games & Animation Theater
                </Link>
              </li>
              <li>
                <Link href="/characters" className="hover:text-black dark:hover:text-sixzmic-lime transition-colors">
                  Characters & Lore Dossiers
                </Link>
              </li>
              <li>
                <Link href="/podcasts" className="hover:text-black dark:hover:text-sixzmic-lime transition-colors">
                  Sixzmic Podcast Network
                </Link>
              </li>
              <li>
                <Link href="/institutions" className="hover:text-black dark:hover:text-sixzmic-lime transition-colors">
                  Institutional Plans & Learn
                </Link>
              </li>
            </ul>
          </div>

          {/* Studios Roster */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">Creative Studios</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/studios#studio-n2k" className="hover:text-black dark:hover:text-white transition-colors">
                  <span className="text-neutral-800 dark:text-white/80 font-medium">Studio N2K</span>
                  <span className="block text-[11px] text-neutral-500 dark:text-white/40">Games · Animation</span>
                </Link>
              </li>
              <li>
                <Link href="/studios#krash-nation" className="hover:text-black dark:hover:text-white transition-colors">
                  <span className="text-neutral-800 dark:text-white/80 font-medium">Krash Nation</span>
                  <span className="block text-[11px] text-neutral-500 dark:text-white/40">Comics · Animation</span>
                </Link>
              </li>
              <li>
                <Link href="/studios#studio-leviathan" className="hover:text-black dark:hover:text-white transition-colors">
                  <span className="text-neutral-800 dark:text-white/80 font-medium">Studio Leviathan</span>
                  <span className="block text-[11px] text-neutral-500 dark:text-white/40">Sci-Fi & Graphic Novels</span>
                </Link>
              </li>
              <li>
                <Link href="/studios#dream-shards" className="hover:text-black dark:hover:text-white transition-colors">
                  <span className="text-neutral-800 dark:text-white/80 font-medium">Dream Shards</span>
                  <span className="block text-[11px] text-neutral-500 dark:text-white/40">Interactive Games</span>
                </Link>
              </li>
              <li>
                <Link href="/studios#kamo-vision" className="hover:text-black dark:hover:text-white transition-colors">
                  <span className="text-neutral-800 dark:text-white/80 font-medium">Kamo Vision Comics</span>
                  <span className="block text-[11px] text-neutral-500 dark:text-white/40">Indie Series & Visual Arts</span>
                </Link>
              </li>
              <li>
                <Link href="/studios#converge" className="hover:text-black dark:hover:text-white transition-colors">
                  <span className="text-neutral-800 dark:text-white/80 font-medium">Converge</span>
                  <span className="block text-[11px] text-neutral-500 dark:text-white/40">Transmedia Design House</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Publishing & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">Publishing & Legal</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              {openSubmitModal && (
                <li>
                  <button
                    onClick={openSubmitModal}
                    className="flex items-center gap-1 text-black dark:text-sixzmic-lime font-semibold hover:underline"
                  >
                    <span>Submit Original IP</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </li>
              )}
              <li>
                <Link href="/legal" className="hover:text-black dark:hover:text-white transition-colors">
                  IP Registry Standards (ISNI/ISWC)
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-black dark:hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:support@sixzmic.com"
                  className="flex items-center gap-1.5 text-neutral-800 dark:text-white/80 hover:text-black dark:hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 text-black dark:text-sixzmic-lime" />
                  <span>support@sixzmic.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 dark:border-white/10 pt-8 sm:flex-row text-xs text-neutral-500 dark:text-white/40">
          <p>© {new Date().getFullYear()} Sixzmic Publishing Group. All original intellectual property rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black dark:hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/legal" className="hover:text-black dark:hover:text-white transition-colors">IP Registry Standards</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
