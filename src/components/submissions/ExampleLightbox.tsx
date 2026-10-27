"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";

interface ExampleLightboxProps {
  title: string;
  image: string;
  alt: string;
  caption?: string;
}

export const ExampleLightbox: React.FC<ExampleLightboxProps> = ({
  title,
  image,
  alt,
  caption
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c0c12] transition-all duration-300 ease-snappy hover:border-black/30 dark:hover:border-sixzmic-lime/50 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-black">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 ease-snappy group-hover:scale-105"
            sizes="(min-width: 768px) 30vw, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Expand badge */}
          <div className="absolute top-2.5 right-2.5 rounded-lg bg-black/60 backdrop-blur-md p-1.5 text-white/80 group-hover:text-white group-hover:bg-black transition-colors">
            <Maximize2 className="h-3.5 w-3.5" />
          </div>

          <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
            <span className="block text-[9px] uppercase font-bold tracking-wider text-sixzmic-lime">
              Student Work Reference
            </span>
            <div className="text-xs font-bold truncate">{title}</div>
          </div>
        </div>

        {caption && (
          <div className="p-3 text-[11px] text-neutral-600 dark:text-white/60 leading-relaxed">
            {caption}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-scaleIn relative max-w-4xl w-full overflow-hidden rounded-2xl border border-white/20 bg-[#0e0e14] shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="tactile-btn absolute top-4 right-4 z-20 rounded-full bg-black/70 p-2 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative max-h-[75vh] w-full flex items-center justify-center p-4">
              <div className="relative aspect-[16/10] w-full max-h-[70vh]">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="border-t border-white/10 bg-black/60 p-4 text-white flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">{title}</h4>
                <p className="text-xs text-white/60">{alt}</p>
              </div>
              <span className="text-[11px] font-mono text-sixzmic-lime uppercase">
                Sixzmic Archive
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
