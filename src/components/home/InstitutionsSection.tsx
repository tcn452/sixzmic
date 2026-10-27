"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { INSTITUTIONAL_PLANS, INSTITUTIONAL_FAQS } from "@/data/sixzmicData";
import {
  GraduationCap,
  Check,
  Minus,
  Send,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  BookOpen,
  Gamepad2,
  Clapperboard,
  Building,
  ArrowRight
} from "lucide-react";

export const InstitutionsSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Complete Plan");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    institutionName: "",
    contactName: "",
    email: "",
    role: "Department Chair / Faculty Lead",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="institutions" className="border-b border-white/10 bg-[#070709] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sixzmic-lime/30 bg-sixzmic-lime/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sixzmic-lime">
            <GraduationCap className="h-4 w-4" />
            <span>ACADEMIC PUBLISHING & SIXZMIC LEARN</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
            A Place for Your Institution&#39;s Creative Work to Reach the World
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sixzmic-muted">
            Publish comics, games, and animation with Sixzmic. Connect your students and faculty
            with global distribution, professional masterclasses, and authenticated IP registration.
          </p>
        </div>

        {/* 4 Pillars Overview */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-[#0e0e14] p-5 text-center transition-all hover:border-sixzmic-lime/40">
            <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-xl bg-black/60 p-2">
              <Image
                src="/institutions/assets/sixzmic-comics.png"
                alt="Sixzmic Comics"
                fill
                className="object-contain p-1"
              />
            </div>
            <h3 className="mt-4 text-sm font-bold text-white">Sixzmic Comics</h3>
            <p className="mt-1 text-xs text-white/50">Sequential art & graphic novel publishing</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0e0e14] p-5 text-center transition-all hover:border-sixzmic-lime/40">
            <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-xl bg-black/60 p-2">
              <Image
                src="/institutions/assets/sixzmic-gaming.png"
                alt="Sixzmic Gaming"
                fill
                className="object-contain p-1"
              />
            </div>
            <h3 className="mt-4 text-sm font-bold text-white">Sixzmic Gaming</h3>
            <p className="mt-1 text-xs text-white/50">Prototype hosting & interactive playtests</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0e0e14] p-5 text-center transition-all hover:border-sixzmic-lime/40">
            <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-xl bg-black/60 p-2">
              <Image
                src="/institutions/assets/sixzmic-animation.png"
                alt="Sixzmic Animation"
                fill
                className="object-contain p-1"
              />
            </div>
            <h3 className="mt-4 text-sm font-bold text-white">Sixzmic Animation</h3>
            <p className="mt-1 text-xs text-white/50">Real-time 3D pipelines & short films</p>
          </div>

          <Link
            href="/submissions?track=learn"
            className="group rounded-2xl border border-white/10 bg-[#0e0e14] p-5 text-center transition-all duration-300 ease-snappy hover:border-sixzmic-lime hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-xl bg-black/60 p-2 group-hover:scale-105 transition-transform">
              <Image
                src="/institutions/assets/sixzmic-learn.png"
                alt="Sixzmic Learn"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-sm font-bold text-white group-hover:text-sixzmic-lime transition-colors">
              <span>Sixzmic Learn</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="mt-1 text-xs text-white/50">Industry-led courses & student creator admissions</p>
          </Link>
        </div>

        {/* Banner connecting to Sixzmic Learn & Creator Submissions */}
        <div className="mt-12 rounded-2xl border border-sixzmic-lime/30 bg-gradient-to-r from-sixzmic-lime/10 via-[#0e0e14] to-transparent p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sixzmic-lime">
              STUDENT & CREATOR OPPORTUNITIES NOW OPEN
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
              Are you a student creator, writer, game dev, or animator?
            </h3>
            <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
              Explore Sixzmic Learn curriculum decks, or submit your comic chapters, prototype builds,
              and animation reels to our studio acquisition desk.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/submissions?track=learn"
              className="tactile-btn rounded-xl bg-sixzmic-lime px-5 py-2.5 text-xs font-bold text-black hover:opacity-90 shadow-md"
            >
              Join Sixzmic Learn
            </Link>
            <Link
              href="/submissions?track=submission"
              className="tactile-btn rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10"
            >
              Submit Creator IP
            </Link>
          </div>
        </div>

        {/* 3 Institutional Plans */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold font-display text-white sm:text-3xl">
              Choose the Publishing Plan for Your Institution
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/60">
              Subscription tiers structured for schools, universities, and library systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {INSTITUTIONAL_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 transition-all ${
                  plan.popular
                    ? "border-sixzmic-lime bg-[#0d0d14] shadow-2xl shadow-sixzmic-lime/10 lg:-translate-y-2"
                    : "border-white/10 bg-[#0a0a0f] hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sixzmic-lime px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-black">
                    Recommended Multi-Discipline
                  </div>
                )}

                <div>
                  <h4 className="text-xl font-bold text-white font-display">{plan.name}</h4>
                  <p className="mt-2 text-xs text-white/60 min-h-[36px]">{plan.tagline}</p>
                  <div className="mt-4 text-sm font-extrabold text-sixzmic-lime">
                    {plan.pricing}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-3">
                      Services Included
                    </div>
                    <ul className="space-y-2.5 text-xs text-white/80">
                      {plan.services.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <Check className="h-4 w-4 shrink-0 text-sixzmic-lime mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    const el = document.getElementById("enquiry-form");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`mt-8 w-full rounded-xl py-3 text-xs font-bold transition-all ${
                    plan.popular
                      ? "bg-sixzmic-lime text-black hover:bg-sixzmic-limeHover shadow-md"
                      : "border border-white/15 bg-white/5 text-white hover:border-sixzmic-lime hover:text-sixzmic-lime"
                  }`}
                >
                  Enquire About {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Comparison Matrix */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f]">
          <div className="p-6 border-b border-white/10">
            <h4 className="text-lg font-bold text-white font-display">
              Institutional Service Coverage Comparison
            </h4>
            <p className="text-xs text-white/60 mt-1">
              Compare features across Comics, Comics + Games, and Complete subscriptions.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-white/10 bg-white/[0.02] text-white/50">
                <tr>
                  <th className="p-4 font-semibold">Service & Coverage</th>
                  <th className="p-4 font-semibold text-center">Comics Plan</th>
                  <th className="p-4 font-semibold text-center">Comics + Games</th>
                  <th className="p-4 font-semibold text-center text-sixzmic-lime">Complete Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/80">
                <tr>
                  <td className="p-4 font-medium text-white">Sixzmic Comics Publishing & Catalog Access</td>
                  <td className="p-4 text-center"><Check className="h-4 w-4 mx-auto text-sixzmic-lime" /></td>
                  <td className="p-4 text-center"><Check className="h-4 w-4 mx-auto text-sixzmic-lime" /></td>
                  <td className="p-4 text-center"><Check className="h-4 w-4 mx-auto text-sixzmic-lime" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Sixzmic Gaming Prototype Hosting</td>
                  <td className="p-4 text-center"><Minus className="h-4 w-4 mx-auto text-white/20" /></td>
                  <td className="p-4 text-center"><Check className="h-4 w-4 mx-auto text-sixzmic-lime" /></td>
                  <td className="p-4 text-center"><Check className="h-4 w-4 mx-auto text-sixzmic-lime" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Sixzmic Animation Production Decks</td>
                  <td className="p-4 text-center"><Minus className="h-4 w-4 mx-auto text-white/20" /></td>
                  <td className="p-4 text-center"><Minus className="h-4 w-4 mx-auto text-white/20" /></td>
                  <td className="p-4 text-center"><Check className="h-4 w-4 mx-auto text-sixzmic-lime" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Sixzmic Learn Industry-Led Masterclasses</td>
                  <td className="p-4 text-center"><Minus className="h-4 w-4 mx-auto text-white/20" /></td>
                  <td className="p-4 text-center"><Minus className="h-4 w-4 mx-auto text-white/20" /></td>
                  <td className="p-4 text-center"><Check className="h-4 w-4 mx-auto text-sixzmic-lime" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">ISNI/ISWC Verified Creative Attribution</td>
                  <td className="p-4 text-center"><Check className="h-4 w-4 mx-auto text-sixzmic-lime" /></td>
                  <td className="p-4 text-center"><Check className="h-4 w-4 mx-auto text-sixzmic-lime" /></td>
                  <td className="p-4 text-center"><Check className="h-4 w-4 mx-auto text-sixzmic-lime" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ & Form Split */}
        <div id="enquiry-form" className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* FAQ (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-white font-display">Common Questions</h3>
            <p className="text-xs text-white/60 mb-6">
              Learn how Sixzmic partners with academic faculties and libraries.
            </p>

            {INSTITUTIONAL_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-white/10 bg-[#0c0c12] overflow-hidden transition-all duration-300 hover:border-white/20"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between p-4 text-left font-semibold text-xs sm:text-sm text-white hover:text-sixzmic-lime transition-colors duration-200"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-sixzmic-lime transition-transform duration-300 ease-snappy ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-snappy ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 text-xs text-white/70 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-[#0e0e14] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sixzmic-lime">
                <Building className="h-4 w-4" />
                <span>START A CONVERSATION</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-white font-display">
                Enquire About {selectedPlan}
              </h3>
              <p className="mt-1 text-xs text-white/60 leading-relaxed">
                Send us your institution&#39;s profile. We will get in touch by email to discuss
                campus seats, pricing, and onboarding.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-xl border border-sixzmic-lime/30 bg-sixzmic-lime/10 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-sixzmic-lime" />
                  <h4 className="mt-3 text-base font-bold text-white font-display">
                    Enquiry Received
                  </h4>
                  <p className="mt-2 text-xs text-white/70 leading-relaxed">
                    Thank you. Our educational publishing director will contact{" "}
                    <strong className="text-sixzmic-lime">{formData.email}</strong> within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/80">
                      Institution or University
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.institutionName}
                      onChange={(e) =>
                        setFormData({ ...formData, institutionName: e.target.value })
                      }
                      placeholder="e.g. Wits University / National Arts Academy"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-sixzmic-lime focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80">
                      Contact Name & Role
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) =>
                        setFormData({ ...formData, contactName: e.target.value })
                      }
                      placeholder="e.g. Prof. Sipho Ndlovu, Head of Visual Arts"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-sixzmic-lime focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80">
                      Official Contact Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="department@university.ac.za"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-sixzmic-lime focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80">
                      Preferred Subscription Plan
                    </label>
                    <select
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-white/10 bg-[#121218] px-3.5 py-2.5 text-xs text-white focus:border-sixzmic-lime focus:outline-none"
                    >
                      <option value="Comics Plan">Comics Plan (Sequential Art)</option>
                      <option value="Comics + Games">Comics + Games Plan</option>
                      <option value="Complete Plan">Complete Plan (with Sixzmic Learn)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-sixzmic-lime py-3 text-xs font-bold text-black transition-all hover:bg-sixzmic-limeHover shadow-lg shadow-sixzmic-lime/20"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Institutional Enquiry</span>
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-white/40">
              Inquiries can also be directed to{" "}
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
