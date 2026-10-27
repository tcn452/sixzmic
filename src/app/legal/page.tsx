"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LEGAL_IDENTIFIERS, REGISTRY_DEMO_WORKS } from "@/data/sixzmicData";
import { ShieldCheck, FileCheck, Layers, Sparkles, Scale, ExternalLink, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<"identifiers" | "works" | "standards">("identifiers");

  return (
    <div className="min-h-screen flex flex-col bg-[#070709] text-white">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sixzmic-lime/30 bg-sixzmic-lime/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
                <Scale className="h-3.5 w-3.5" />
                <span>INTELLECTUAL PROPERTY REGISTRY STANDARDS</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl font-display">
                Sixzmic Legal & IP Framework
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Sixzmic establishes an industry-aligned intellectual property framework across
                comics, interactive games, and animation. We align with global ISNI and ISWC
                attribution standards to protect creators, secure rights, and manage transmedia
                licensing.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-white/10 bg-[#0a0a0f]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-8 text-sm">
            <button
              onClick={() => setActiveTab("identifiers")}
              className={`py-4 font-semibold tracking-wide border-b-2 transition-all ${
                activeTab === "identifiers"
                  ? "border-sixzmic-lime text-sixzmic-lime"
                  : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              The Five Identifiers
            </button>
            <button
              onClick={() => setActiveTab("works")}
              className={`py-4 font-semibold tracking-wide border-b-2 transition-all ${
                activeTab === "works"
                  ? "border-sixzmic-lime text-sixzmic-lime"
                  : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              Canonical Work Registry
            </button>
            <button
              onClick={() => setActiveTab("standards")}
              className={`py-4 font-semibold tracking-wide border-b-2 transition-all ${
                activeTab === "standards"
                  ? "border-sixzmic-lime text-sixzmic-lime"
                  : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              Creator Rights & Standards
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {activeTab === "identifiers" && (
              <div>
                <div className="max-w-2xl mb-10">
                  <h2 className="text-2xl font-bold font-display sm:text-3xl">
                    The Five Global Identifiers
                  </h2>
                  <p className="mt-2 text-sm text-white/60">
                    How Sixzmic structures creative ownership from abstract franchise concepts down to
                    individual issue credits.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {LEGAL_IDENTIFIERS.map((id) => (
                    <div
                      key={id.code}
                      className="rounded-2xl border border-white/10 bg-[#0e0e14] p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-black font-display text-sixzmic-lime bg-sixzmic-lime/10 px-3 py-1 rounded-lg">
                            {id.code}
                          </span>
                          <span className="text-[10px] uppercase font-semibold text-white/40">
                            {id.role}
                          </span>
                        </div>
                        <h3 className="mt-4 text-base font-bold text-white">{id.name}</h3>
                        <p className="mt-2 text-xs text-white/70 leading-relaxed">
                          {id.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/10 text-[11px]">
                        <span className="text-white/40 block">Example Standard:</span>
                        <code className="text-sixzmic-lime font-mono text-xs">{id.example}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "works" && (
              <div>
                <div className="max-w-2xl mb-10">
                  <h2 className="text-2xl font-bold font-display sm:text-3xl">
                    Verified Canonical Works
                  </h2>
                  <p className="mt-2 text-sm text-white/60">
                    Franchise intellectual property registered under Sixzmic ISWC catalog keys.
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e14]">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-white/10 bg-white/[0.02] text-white/50">
                      <tr>
                        <th className="p-4 font-semibold">Franchise Title</th>
                        <th className="p-4 font-semibold">ISWC Standard Key</th>
                        <th className="p-4 font-semibold">Media Verticals</th>
                        <th className="p-4 font-semibold text-center">Interested Parties</th>
                        <th className="p-4 font-semibold text-center">Productions</th>
                        <th className="p-4 font-semibold text-right">Attribution Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-white/80">
                      {REGISTRY_DEMO_WORKS.map((work) => (
                        <tr key={work.id}>
                          <td className="p-4 font-bold text-white font-display text-sm">
                            {work.title}
                          </td>
                          <td className="p-4 font-mono text-sixzmic-lime">{work.iswc}</td>
                          <td className="p-4 text-white/60">{work.medium}</td>
                          <td className="p-4 text-center font-bold text-white">{work.parties}</td>
                          <td className="p-4 text-center font-bold text-white">{work.productions}</td>
                          <td className="p-4 text-right">
                            <span className="inline-flex items-center gap-1.5 text-sixzmic-lime font-semibold bg-sixzmic-lime/10 px-2.5 py-1 rounded-full text-[11px]">
                              <CheckCircle className="h-3 w-3" />
                              <span>{work.status}</span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "standards" && (
              <div className="max-w-3xl space-y-8">
                <div>
                  <h2 className="text-2xl font-bold font-display sm:text-3xl">
                    Creator IP Bill of Rights
                  </h2>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    Sixzmic operates on an author-centric model. Unlike legacy entertainment
                    monopolies that demand total copyright surrender, Sixzmic champions creator-owned
                    and co-published transmedia pipelines.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-white/10 bg-[#0e0e14] p-5">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-sixzmic-lime" />
                      <span>Moral & Underlying Rights Retention</span>
                    </h3>
                    <p className="mt-2 text-xs text-white/70 leading-relaxed">
                      Creators retain moral rights, creator credit attribution, and underlying IP
                      ownership. Sixzmic licenses commercial, print, and interactive distribution rights
                      in exchange for direct funding and transmedia production.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0e0e14] p-5">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-sixzmic-lime" />
                      <span>Transparent Revenue Transparency</span>
                    </h3>
                    <p className="mt-2 text-xs text-white/70 leading-relaxed">
                      All comic reader revenues, Fan Pass subscriptions, and digital collectible drops
                      distribute 80% of net proceeds directly to the participating creator teams and
                      studios.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0e0e14] p-5">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-sixzmic-lime" />
                      <span>Cross-Media Licensing Safeguards</span>
                    </h3>
                    <p className="mt-2 text-xs text-white/70 leading-relaxed">
                      When a comic series is adapted into a game or animated pilot, original creators
                      hold executive creative consultation rights and receive tailored royalties on all
                      spinoff productions.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-white/60">
                  <Link href="/privacy" className="hover:text-white underline">
                    Read Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-white underline">
                    Read Terms of Use
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
