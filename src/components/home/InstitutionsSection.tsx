"use client";

import React, { useState } from "react";
import Image from "next/image";
import { INSTITUTIONAL_PLANS } from "@/data/sixzmicData";
import { GraduationCap, BookOpen, Check, ArrowRight, Send, CheckCircle2 } from "lucide-react";

export const InstitutionsSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="institutions" className="border-b border-white/10 bg-[#08080C] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
            <GraduationCap className="h-4 w-4" />
            <span>SIXZMIC LEARN & INSTITUTIONAL PUBLISHING</span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
            Institutional Plans for Universities, Schools & Libraries
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sixzmic-muted">
            Bring African and global independent visual storytelling into curricula. Access our
            serialized comic catalog, animation production breakdown decks, and studio masterclasses.
          </p>
        </div>

        {/* 4 Pillars Images Banner */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="relative mx-auto h-14 w-14 overflow-hidden rounded-lg bg-black/40">
              <Image
                src="/institutions/assets/sixzmic-comics.png"
                alt="Comics in Education"
                fill
                className="object-contain p-1"
              />
            </div>
            <h4 className="mt-3 text-xs font-bold text-white">Comics & Graphic Novels</h4>
            <p className="mt-1 text-[11px] text-white/50">Digital reading licenses</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="relative mx-auto h-14 w-14 overflow-hidden rounded-lg bg-black/40">
              <Image
                src="/institutions/assets/sixzmic-gaming.png"
                alt="Game Development"
                fill
                className="object-contain p-1"
              />
            </div>
            <h4 className="mt-3 text-xs font-bold text-white">Game Design & Mechanics</h4>
            <p className="mt-1 text-[11px] text-white/50">Interactive prototypes</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="relative mx-auto h-14 w-14 overflow-hidden rounded-lg bg-black/40">
              <Image
                src="/institutions/assets/sixzmic-animation.png"
                alt="Animation"
                fill
                className="object-contain p-1"
              />
            </div>
            <h4 className="mt-3 text-xs font-bold text-white">Animation Production</h4>
            <p className="mt-1 text-[11px] text-white/50">Real-time 3D pipelines</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="relative mx-auto h-14 w-14 overflow-hidden rounded-lg bg-black/40">
              <Image
                src="/institutions/assets/sixzmic-learn.png"
                alt="Sixzmic Learn"
                fill
                className="object-contain p-1"
              />
            </div>
            <h4 className="mt-3 text-xs font-bold text-white">Sixzmic Learn</h4>
            <p className="mt-1 text-[11px] text-white/50">Curriculum masterclasses</p>
          </div>
        </div>

        {/* Plans Grid & Form */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Plans Comparison */}
          <div className="space-y-4 lg:col-span-7">
            {INSTITUTIONAL_PLANS.map((plan) => (
              <div
                key={plan.id}
                className="rounded-xl border border-white/10 bg-sixzmic-surface p-5 transition-colors hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white font-display">{plan.name}</h3>
                  <span className="text-[11px] font-semibold text-sixzmic-lime bg-sixzmic-lime/10 px-2 py-0.5 rounded">
                    Institutional Tier
                  </span>
                </div>
                <p className="mt-1 text-xs text-white/60">{plan.audience}</p>
                <ul className="mt-4 space-y-2 text-xs text-white/80">
                  {plan.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-sixzmic-lime shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Inquiry Form */}
          <div className="rounded-2xl border border-white/15 bg-sixzmic-card p-6 lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Request an Institutional License
              </h3>
              <p className="mt-1 text-xs text-white/60 leading-relaxed">
                Connect with our academic distribution team for custom seat pricing, campus domain
                allowlisting, or curriculum decks.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-xl border border-sixzmic-lime/30 bg-sixzmic-lime/10 p-5 text-center">
                  <CheckCircle2 className="mx-auto h-8 w-8 text-sixzmic-lime" />
                  <h4 className="mt-2 text-sm font-bold text-white">Enquiry Received</h4>
                  <p className="mt-1 text-xs text-white/70">
                    Our educational publishing director will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/80">
                      Institution or University Name
                    </label>
                    <input
                      type="text"
                      required
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="e.g. University of Cape Town / School of Animation"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-sixzmic-lime focus:outline-none focus:ring-1 focus:ring-sixzmic-lime"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80">
                      Official Contact Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="department@institution.edu"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-sixzmic-lime focus:outline-none focus:ring-1 focus:ring-sixzmic-lime"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-sixzmic-lime py-3 text-xs font-bold text-black transition-all hover:bg-sixzmic-limeHover hover:shadow-lg hover:shadow-sixzmic-lime/20"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Institutional Enquiry</span>
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-white/40">
              Direct inquiries can also be emailed to{" "}
              <a href="mailto:institutions@sixzmic.com" className="text-sixzmic-lime hover:underline">
                institutions@sixzmic.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
