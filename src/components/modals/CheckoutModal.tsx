"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Zap, Shield, Sparkles } from "lucide-react";

interface CheckoutModalProps {
  tierName: string | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ tierName, onClose }) => {
  const [email, setEmail] = useState("");
  const [activated, setActivated] = useState(false);

  if (!tierName) return null;

  const isCollector = tierName.toLowerCase().includes("collector");
  const price = isCollector ? "R250 / month" : "R120 / month";

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();
    setActivated(true);
  };

  return (
    <div className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="animate-scaleIn relative w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-sixzmic-surface p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="tactile-btn absolute top-4 right-4 rounded-lg p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition-all"
        >
          <X className="h-5 w-5" />
        </button>

        {activated ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sixzmic-lime/20 text-sixzmic-lime">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-white font-display">
              {tierName} Activated!
            </h3>
            <p className="mt-2 text-xs text-white/70 leading-relaxed">
              We&#39;ve sent your early drop access credentials and Discord invite link to{" "}
              <strong className="text-sixzmic-lime">{email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-xl bg-sixzmic-lime px-6 py-2.5 text-xs font-bold text-black"
            >
              Start Reading with Pass
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sixzmic-lime/10 px-2.5 py-0.5 text-[10px] font-bold uppercase text-sixzmic-lime">
              <Zap className="h-3 w-3" />
              <span>Direct Studio Membership</span>
            </div>

            <h2 className="mt-3 text-2xl font-bold text-white font-display">
              Activate your {tierName}
            </h2>
            <div className="mt-1 text-base font-extrabold text-sixzmic-lime font-display">
              {price}
            </div>

            <p className="mt-3 text-xs text-white/60 leading-relaxed">
              Get immediate 24-hour early drop access to ongoing series, high-resolution panel art, and
              direct Discord creator Q&As. Cancel anytime with one click.
            </p>

            <form onSubmit={handleActivate} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white/80">Your Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="fan@email.com"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-sixzmic-lime focus:outline-none"
                />
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-[11px] text-white/60 space-y-1.5">
                <div className="flex items-center gap-1.5 text-white/80 font-medium">
                  <Shield className="h-3.5 w-3.5 text-sixzmic-lime" />
                  <span>Instant activation · No lock-in contract</span>
                </div>
                <p>Support goes 80% directly to the studio creators.</p>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-sixzmic-lime py-3 text-xs font-bold text-black hover:bg-sixzmic-limeHover transition-colors shadow-lg shadow-sixzmic-lime/20"
              >
                Confirm Membership & Access Drops
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
