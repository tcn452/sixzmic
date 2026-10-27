"use client";

import React, { useState } from "react";
import { X, UploadCloud, CheckCircle2, ShieldCheck, FileText } from "lucide-react";

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitModal: React.FC<SubmitModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    creatorName: "",
    email: "",
    projectTitle: "",
    medium: "Comics & Graphic Novels",
    pitch: "",
    portfolioUrl: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="animate-scaleIn relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-sixzmic-surface p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="tactile-btn absolute top-5 right-5 rounded-lg p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition-all"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sixzmic-lime/20 text-sixzmic-lime">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-white font-display">
              IP Submission Received
            </h3>
            <p className="mt-2 text-sm text-white/70 max-w-md mx-auto leading-relaxed">
              Thank you for submitting <strong className="text-white">{formData.projectTitle}</strong>.
              Our acquisitions editorial team reviews submissions weekly and will reach out to{" "}
              <strong className="text-sixzmic-lime">{formData.email}</strong>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 rounded-xl bg-sixzmic-lime px-6 py-2.5 text-xs font-bold text-black"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sixzmic-lime">
              <ShieldCheck className="h-4 w-4" />
              <span>OFFICIAL PUBLISHER IP SUBMISSIONS</span>
            </div>
            <h2 className="mt-2 text-2xl font-extrabold text-white font-display">
              Submit Your Creative IP to Sixzmic
            </h2>
            <p className="mt-1 text-xs text-white/60">
              Direct pipeline for serialized comics, game prototypes, and animated pilots.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/80">Creator / Studio Name</label>
                  <input
                    type="text"
                    required
                    value={formData.creatorName}
                    onChange={(e) => setFormData({ ...formData, creatorName: e.target.value })}
                    placeholder="e.g. Lethabo Dlamini"
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-sixzmic-lime focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/80">Contact Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="creator@email.com"
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-sixzmic-lime focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/80">Project Title</label>
                  <input
                    type="text"
                    required
                    value={formData.projectTitle}
                    onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                    placeholder="e.g. Solar Renegades"
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-sixzmic-lime focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/80">Primary Medium</label>
                  <select
                    value={formData.medium}
                    onChange={(e) => setFormData({ ...formData, medium: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-[#121218] px-3 py-2 text-xs text-white focus:border-sixzmic-lime focus:outline-none"
                  >
                    <option value="Comics & Graphic Novels">Comics & Graphic Novels</option>
                    <option value="Game Development & Prototype">Game Development & Prototype</option>
                    <option value="Animation Pilot / Series">Animation Pilot / Series</option>
                    <option value="Transmedia Franchise">Transmedia Franchise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80">Portfolio or Pitch Deck Link</label>
                <input
                  type="url"
                  required
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  placeholder="https://drive.google.com/... or artstation / behance"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-sixzmic-lime focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80">Synopsis / Elevator Pitch</label>
                <textarea
                  rows={3}
                  required
                  value={formData.pitch}
                  onChange={(e) => setFormData({ ...formData, pitch: e.target.value })}
                  placeholder="Describe your universe, themes, protagonists, and current production status..."
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-sixzmic-lime focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-white/50">
                <ShieldCheck className="h-3.5 w-3.5 text-sixzmic-lime shrink-0" />
                <span>Your intellectual property rights remain 100% protected under our standard submission NDA.</span>
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-sixzmic-lime py-3 text-xs font-bold text-black transition-all hover:bg-sixzmic-limeHover shadow-lg shadow-sixzmic-lime/20"
              >
                <UploadCloud className="h-4 w-4" />
                <span>Submit Proposal to Editorial Team</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
