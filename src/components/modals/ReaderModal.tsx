"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ComicDrop } from "@/data/sixzmicData";
import { X, Star, Eye, BookOpen, Bookmark, Share2, ChevronLeft, ChevronRight, Check } from "lucide-react";

interface ReaderModalProps {
  comic: ComicDrop | null;
  onClose: () => void;
  onOpenMembership: () => void;
}

export const ReaderModal: React.FC<ReaderModalProps> = ({
  comic,
  onClose,
  onOpenMembership,
}) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [readingMode, setReadingMode] = useState(false);

  if (!comic) return null;

  return (
    <div className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="animate-scaleIn relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-sixzmic-surface shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="tactile-btn absolute top-4 right-4 z-20 rounded-full bg-black/60 p-2 text-white/70 hover:bg-white/20 hover:text-white transition-all"
        >
          <X className="h-5 w-5" />
        </button>

        {readingMode ? (
          /* Simulated Reader View */
          <div className="flex flex-col h-[80vh]">
            {/* Reader Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-black/80 px-6 py-3">
              <div>
                <h3 className="text-sm font-bold text-white">{comic.title}</h3>
                <span className="text-[11px] text-sixzmic-lime">{comic.episode}</span>
              </div>
              <button
                onClick={() => setReadingMode(false)}
                className="text-xs font-semibold text-white/60 hover:text-white"
              >
                Back to Details
              </button>
            </div>

            {/* Simulated Comic Panel Viewer */}
            <div className="flex-1 overflow-y-auto bg-black p-4 flex flex-col items-center gap-6">
              <div className="relative aspect-[2/3] w-full max-w-md overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                <Image
                  src={comic.coverImage}
                  alt={comic.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="max-w-lg rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <h4 className="text-base font-bold text-white">Opening Scene: Issue #001</h4>
                <p className="mt-2 text-xs text-white/70 leading-relaxed">
                  {comic.description}
                </p>
                <div className="mt-6 rounded-lg border border-sixzmic-lime/30 bg-sixzmic-lime/10 p-4">
                  <p className="text-xs font-semibold text-sixzmic-lime">
                    Enjoying {comic.series}? Get next chapters 24 hours before public drop.
                  </p>
                  <button
                    onClick={onOpenMembership}
                    className="mt-3 rounded-lg bg-sixzmic-lime px-4 py-2 text-xs font-bold text-black"
                  >
                    Unlock Fan Pass (R120/mo)
                  </button>
                </div>
              </div>
            </div>

            {/* Reader Bottom Navigation */}
            <div className="flex items-center justify-between border-t border-white/10 bg-black/80 px-6 py-3 text-xs text-white/60">
              <button className="flex items-center gap-1 hover:text-white">
                <ChevronLeft className="h-4 w-4" />
                <span>Prev Chapter</span>
              </button>
              <span>Page 1 of 24</span>
              <button className="flex items-center gap-1 text-sixzmic-lime font-bold hover:underline">
                <span>Next Chapter</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Detail View */
          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left Column: Cover */}
            <div className="relative md:col-span-5 bg-black min-h-[300px] md:min-h-[460px]">
              <Image
                src={comic.coverImage}
                alt={comic.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
            </div>

            {/* Right Column: Info */}
            <div className="p-6 md:p-8 md:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-sixzmic-lime/20 px-2 py-0.5 text-[10px] font-extrabold uppercase text-sixzmic-lime">
                    {comic.studio}
                  </span>
                  <span className="text-xs text-white/40">•</span>
                  <span className="text-xs text-white/60">{comic.genre}</span>
                </div>

                <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-white font-display">
                  {comic.title}
                </h2>
                <div className="text-sm font-semibold text-sixzmic-lime">{comic.episode}</div>

                {/* Score & Reads */}
                <div className="mt-4 flex items-center gap-4 border-y border-white/10 py-3 text-xs text-white/60">
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <Star className="h-4 w-4 fill-sixzmic-lime text-sixzmic-lime" />
                    <span>{comic.rating} / 5.0</span>
                  </div>
                  <div className="h-3 w-px bg-white/15" />
                  <div className="flex items-center gap-1.5">
                    <Eye className="h-4 w-4 text-white/40" />
                    <span>{comic.reads} readers</span>
                  </div>
                </div>

                <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-white/40">
                  Synopsis
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm text-white/80 leading-relaxed">
                  {comic.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setReadingMode(true)}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-sixzmic-lime py-3 text-xs font-bold text-black hover:bg-sixzmic-limeHover transition-colors shadow-lg shadow-sixzmic-lime/20"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Read Chapter Online</span>
                </button>

                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-xs font-semibold transition-colors ${
                    bookmarked
                      ? "border-sixzmic-lime bg-sixzmic-lime/10 text-sixzmic-lime"
                      : "border-white/15 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {bookmarked ? <Check className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                  <span>{bookmarked ? "Bookmarked" : "Save"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
