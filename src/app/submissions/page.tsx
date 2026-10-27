"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  SUBMISSION_STUDIOS,
  TEAM_SIZES,
  SOFTWARE_OPTIONS,
  LEARN_DISCIPLINES,
  INITIAL_CREATOR_SUBMISSION,
  INITIAL_LEARN_FORM,
  CreatorSubmissionForm,
  LearnEnrolmentForm
} from "@/data/submissionsData";
import { SchoolCombobox } from "@/components/submissions/SchoolCombobox";
import { ExampleLightbox } from "@/components/submissions/ExampleLightbox";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Gamepad2,
  Clapperboard,
  Building,
  UploadCloud,
  ChevronRight,
  ExternalLink
} from "lucide-react";

function SubmissionsContent() {
  const searchParams = useSearchParams();
  const initialTrack = searchParams.get("track");

  const [track, setTrack] = useState<"welcome" | "submission" | "learn">(
    initialTrack === "learn"
      ? "learn"
      : initialTrack === "submission"
      ? "submission"
      : "welcome"
  );

  const [step, setStep] = useState(0);
  const [submissionForm, setSubmissionForm] = useState<CreatorSubmissionForm>(
    INITIAL_CREATOR_SUBMISSION
  );
  const [learnForm, setLearnForm] = useState<LearnEnrolmentForm>(INITIAL_LEARN_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialTrack === "learn") {
      setTrack("learn");
      setStep(0);
    } else if (initialTrack === "submission") {
      setTrack("submission");
      setStep(0);
    }
  }, [initialTrack]);

  // Submission steps
  const submissionSteps = [
    { number: "01", label: "About you", eyebrow: "First, the human", title: "Who are we meeting?" },
    { number: "02", label: "Your work", eyebrow: "The work", title: "Tell us what you made." },
    { number: "03", label: "The work itself", eyebrow: "Samples", title: "Let us step inside." },
    { number: "04", label: "Review", eyebrow: "One last look", title: "Everything feel like you?" }
  ];

  // Learn steps
  const learnSteps = [
    { number: "01", label: "About you", eyebrow: "First, the human", title: "Who are we meeting?" },
    { number: "02", label: "Your interest", eyebrow: "Where you want to grow", title: "What brings you to Sixzmic Learn?" }
  ];

  const currentSteps = track === "learn" ? learnSteps : submissionSteps;

  // Validation
  const validateCurrentStep = () => {
    const errs: Record<string, string> = {};

    if (track === "learn") {
      if (step === 0) {
        if (!learnForm.fullName.trim()) errs.fullName = "Please enter your name.";
        if (!/^\S+@\S+\.\S+$/.test(learnForm.email)) errs.email = "Please enter a valid email address.";
      } else if (step === 1) {
        if (!learnForm.interest) errs.interest = "Please pick your primary discipline.";
        if (learnForm.software.length === 0) errs.software = "Pick at least one tool you want to learn.";
      }
    } else if (track === "submission") {
      if (step === 0) {
        if (!submissionForm.fullName.trim()) errs.fullName = "Please enter your name.";
        if (!/^\S+@\S+\.\S+$/.test(submissionForm.email)) errs.email = "Please enter a valid email address.";
      } else if (step === 1) {
        if (!submissionForm.projectTitle.trim()) errs.projectTitle = "Please provide your project title.";
        if (!submissionForm.pitch.trim()) errs.pitch = "Please provide a short 1-minute pitch.";
        if (submissionForm.studioPath === "own-studio" && !submissionForm.studioType) {
          errs.studioType = "Please select what type of studio you are building.";
        }
      } else if (step === 2) {
        if (!submissionForm.portfolioUrl.trim()) {
          errs.portfolioUrl = "Please provide a link to your portfolio, Google Drive, or sample files.";
        }
      } else if (step === 3) {
        if (!submissionForm.rightsConfirmed) {
          errs.rightsConfirmed = "Please confirm that you created or have rights to share this work.";
        }
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (step < currentSteps.length - 1) {
        setStep((s) => s + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((s) => s - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setTrack("welcome");
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 800);
  };

  const formatZAR = (amount: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      maximumFractionDigits: 0
    }).format(amount);
  };

  const selectedStudioObj = SUBMISSION_STUDIOS.find(
    (s) => s.id === submissionForm.internalStudio
  ) || SUBMISSION_STUDIOS[0];

  return (
    <div className="min-h-screen bg-[#f7f7f4] dark:bg-[#070709] text-neutral-900 dark:text-white transition-colors flex flex-col font-sans">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-[#f7f7f4]/90 dark:bg-[#070709]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-8 w-32 sm:h-9 sm:w-36">
              <Image
                src="/logo/sixzmic-logo.png"
                alt="Sixzmic"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <span className="hidden sm:inline-block rounded-md bg-black/5 dark:bg-white/10 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase text-neutral-600 dark:text-sixzmic-lime">
              Creator Submissions & Learn
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/"
              className="tactile-btn flex items-center gap-1.5 rounded-xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 px-3.5 py-2 text-xs font-semibold text-neutral-800 dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
            >
              <span>Back to Site</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Screen 1: Welcome Track Selection */}
      {track === "welcome" && (
        <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-sixzmic-lime">
              STUDENT & CREATOR OPPORTUNITIES
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight font-display">
              Launch your career with <span className="text-neutral-900 dark:text-sixzmic-lime">Sixzmic</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-white/70 max-w-xl">
              Whether you have completed original comic chapters, indie game builds, or want to
              start learning from industry-leading studios through Sixzmic Learn — this is where you
              begin.
            </p>

            {/* Path Selection Cards */}
            <div className="mt-8 space-y-4 max-w-xl">
              <button
                type="button"
                onClick={() => {
                  setTrack("submission");
                  setStep(0);
                }}
                className="tactile-btn group w-full text-left rounded-2xl border border-black/15 dark:border-white/15 bg-white dark:bg-[#0e0e14] p-5 sm:p-6 transition-all duration-300 ease-snappy hover:border-black dark:hover:border-sixzmic-lime hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white dark:bg-sixzmic-lime dark:text-black">
                      <UploadCloud className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-sixzmic-lime transition-colors">
                        Launch your career (Creator Submission)
                      </h3>
                      <span className="text-xs text-neutral-500 dark:text-white/50">For ready projects, comics, games & animation pilots</span>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-neutral-400 group-hover:translate-x-1 group-hover:text-black dark:group-hover:text-sixzmic-lime transition-all" />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-neutral-600 dark:text-white/70">
                  Submit samples of a comic, game build, animation, or illustrated story you&#39;re ready
                  to pitch or co-publish with Sixzmic.
                </p>
              </button>

              <button
                type="button"
                onClick={() => {
                  setTrack("learn");
                  setStep(0);
                }}
                className="tactile-btn group w-full text-left rounded-2xl border border-black/15 dark:border-white/15 bg-white dark:bg-[#0e0e14] p-5 sm:p-6 transition-all duration-300 ease-snappy hover:border-black dark:hover:border-sixzmic-lime hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/10 dark:bg-white/10 text-neutral-900 dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-sixzmic-lime dark:group-hover:text-black transition-colors">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-sixzmic-lime transition-colors">
                        Join Sixzmic Learn
                      </h3>
                      <span className="text-xs text-neutral-500 dark:text-white/50">For students, aspiring creators & learners</span>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-neutral-400 group-hover:translate-x-1 group-hover:text-black dark:group-hover:text-sixzmic-lime transition-all" />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-neutral-600 dark:text-white/70">
                  New to game development, sequential art, or 2D/3D animation? Sixzmic Learn connects
                  you with studio masterclasses, curriculum decks, and mentorship.
                </p>
              </button>
            </div>
          </div>

          {/* Right Stage Showcase Artwork */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-black/15 dark:border-white/20 bg-white dark:bg-black shadow-2xl p-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src="/submissions/assets/submission-art-BxUFQvZ4.png"
                  alt="Sixzmic Student & Creator Showcase"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-sixzmic-lime">
                    Creator Guarantee
                  </span>
                  <div className="text-sm font-bold mt-0.5">Your work remains yours. Always.</div>
                  <p className="text-[11px] text-white/70 mt-1">
                    Submitting does not transfer copyright. Sixzmic registers all distributed works
                    with author ISNI / ISWC attribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Screen 2: Submission / Learn Multi-Step Flow */}
      {track !== "welcome" && !submitted && (
        <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Progress Stepper & Editorial Quote */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-sixzmic-lime">
                <span>{track === "learn" ? "SIXZMIC LEARN ENROLMENT" : "CREATOR IP SUBMISSION"}</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold font-display">
                {currentSteps[step].title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-white/60">
                {currentSteps[step].eyebrow}
              </p>
            </div>

            {/* Stepper indicators */}
            <div className="space-y-3">
              {currentSteps.map((s, idx) => {
                const isCurrent = idx === step;
                const isPast = idx < step;
                return (
                  <div
                    key={s.number}
                    className={`flex items-center gap-3.5 p-3 rounded-xl border transition-all duration-300 ease-snappy ${
                      isCurrent
                        ? "border-black dark:border-sixzmic-lime bg-white dark:bg-[#121218] shadow-md -translate-x-1"
                        : isPast
                        ? "border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] opacity-80"
                        : "border-transparent opacity-40"
                    }`}
                  >
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold font-mono transition-colors ${
                        isCurrent
                          ? "bg-black text-white dark:bg-sixzmic-lime dark:text-black"
                          : isPast
                          ? "bg-black/10 text-neutral-800 dark:bg-white/10 dark:text-white"
                          : "bg-black/5 dark:bg-white/5 text-neutral-400"
                      }`}
                    >
                      {isPast ? <Check className="h-4 w-4" /> : s.number}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-neutral-900 dark:text-white">
                        {s.label}
                      </div>
                      <div className="text-[10px] text-neutral-500 dark:text-white/40">
                        {s.eyebrow}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote Card */}
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#0c0c12] p-5 text-xs text-neutral-600 dark:text-white/70 leading-relaxed shadow-xs">
              <span className="font-bold text-neutral-900 dark:text-white block mb-1">
                {track === "learn"
                  ? "Sixzmic Learn · Grow at your pace."
                  : "The stories we need most are often the ones only you can tell."}
              </span>
              Submissions are reviewed by our studio editorial leads within 5 business days. Your
              copyright remains 100% yours.
            </div>
          </aside>

          {/* Right Column: Step Forms */}
          <div className="lg:col-span-8 bg-white dark:bg-[#0c0c12] rounded-3xl border border-black/15 dark:border-white/15 p-6 sm:p-10 shadow-xl">
            {/* TRACK: SIXZMIC LEARN */}
            {track === "learn" && (
              <div className="animate-fadeIn space-y-8">
                {step === 0 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={learnForm.fullName}
                        onChange={(e) => setLearnForm({ ...learnForm, fullName: e.target.value })}
                        placeholder="e.g. Lethabo Nkosi"
                        className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                      />
                      {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={learnForm.email}
                        onChange={(e) => setLearnForm({ ...learnForm, email: e.target.value })}
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                          School / Institution (Optional)
                        </label>
                        <div className="mt-2">
                          <SchoolCombobox
                            value={learnForm.school}
                            onChange={(val) => setLearnForm({ ...learnForm, school: val })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                          Country
                        </label>
                        <input
                          type="text"
                          value={learnForm.country}
                          onChange={(e) => setLearnForm({ ...learnForm, country: e.target.value })}
                          placeholder="South Africa"
                          className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-8">
                    {/* Discipline Selection */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80 mb-3">
                        Choose your primary discipline *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {LEARN_DISCIPLINES.map((d) => {
                          const isSelected = learnForm.interest === d.key;
                          return (
                            <button
                              key={d.key}
                              type="button"
                              onClick={() => setLearnForm({ ...learnForm, interest: d.key })}
                              className={`tactile-btn text-left rounded-2xl border p-4 transition-all duration-300 ease-snappy ${
                                isSelected
                                  ? "border-black dark:border-sixzmic-lime bg-black/5 dark:bg-sixzmic-lime/10 ring-2 ring-black/20 dark:ring-sixzmic-lime/40"
                                  : "border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-neutral-900 dark:text-white">
                                  {d.title}
                                </span>
                                {isSelected && (
                                  <Check className="h-4 w-4 text-black dark:text-sixzmic-lime" />
                                )}
                              </div>
                              <p className="mt-2 text-[11px] text-neutral-500 dark:text-white/60 leading-relaxed">
                                {d.caption}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                      {errors.interest && <p className="mt-1 text-xs text-red-500">{errors.interest}</p>}
                    </div>

                    {/* Student Work References (Lightbox) */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80 mb-3">
                        Student Work References (Click to expand)
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {LEARN_DISCIPLINES.map((d) => (
                          <ExampleLightbox
                            key={d.key}
                            title={d.title}
                            image={d.image}
                            alt={d.alt}
                            caption={d.caption}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Software Tools Chips */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80 mb-3">
                        Software & Tools you want to learn *
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {SOFTWARE_OPTIONS.map((sw) => {
                          const isSelected = learnForm.software.includes(sw.label);
                          return (
                            <button
                              key={sw.label}
                              type="button"
                              onClick={() => {
                                const exists = learnForm.software.includes(sw.label);
                                setLearnForm({
                                  ...learnForm,
                                  software: exists
                                    ? learnForm.software.filter((s) => s !== sw.label)
                                    : [...learnForm.software, sw.label]
                                });
                              }}
                              className={`tactile-btn flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
                                isSelected
                                  ? "bg-black text-white dark:bg-sixzmic-lime dark:text-black shadow-sm"
                                  : "border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-white/70 hover:border-black/30 dark:hover:border-white/30"
                              }`}
                            >
                              <span>{sw.label}</span>
                              {isSelected && <Check className="h-3.5 w-3.5" />}
                            </button>
                          );
                        })}
                      </div>
                      {errors.software && <p className="mt-1 text-xs text-red-500">{errors.software}</p>}
                    </div>

                    {/* Updates opt-in */}
                    <label className="flex items-center gap-3 cursor-pointer pt-2">
                      <input
                        type="checkbox"
                        checked={learnForm.updatesOptIn}
                        onChange={(e) => setLearnForm({ ...learnForm, updatesOptIn: e.target.checked })}
                        className="h-4 w-4 rounded accent-black dark:accent-sixzmic-lime"
                      />
                      <span className="text-xs text-neutral-600 dark:text-white/70">
                        Keep me in the loop about Sixzmic Learn cohorts, curriculum decks, and studio mentorship.
                      </span>
                    </label>
                  </div>
                )}
              </div>
            )}

            {/* TRACK: CREATOR SUBMISSION */}
            {track === "submission" && (
              <div className="animate-fadeIn space-y-8">
                {/* Step 0: About You */}
                {step === 0 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          value={submissionForm.fullName}
                          onChange={(e) => setSubmissionForm({ ...submissionForm, fullName: e.target.value })}
                          placeholder="e.g. Sindi Khumalo"
                          className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                        />
                        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                          Artist / Studio Name (Optional)
                        </label>
                        <input
                          type="text"
                          value={submissionForm.artistName}
                          onChange={(e) => setSubmissionForm({ ...submissionForm, artistName: e.target.value })}
                          placeholder="e.g. NeonVeldt Studios"
                          className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={submissionForm.email}
                        onChange={(e) => setSubmissionForm({ ...submissionForm, email: e.target.value })}
                        placeholder="creator@studio.com"
                        className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                          School / Institution (Optional)
                        </label>
                        <div className="mt-2">
                          <SchoolCombobox
                            value={submissionForm.school}
                            onChange={(val) => setSubmissionForm({ ...submissionForm, school: val })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                          Country
                        </label>
                        <input
                          type="text"
                          value={submissionForm.country}
                          onChange={(e) => setSubmissionForm({ ...submissionForm, country: e.target.value })}
                          placeholder="South Africa"
                          className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 1: Your Work */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        value={submissionForm.projectTitle}
                        onChange={(e) => setSubmissionForm({ ...submissionForm, projectTitle: e.target.value })}
                        placeholder="e.g. Chronicles of Azania"
                        className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                      />
                      {errors.projectTitle && <p className="mt-1 text-xs text-red-500">{errors.projectTitle}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                          Format
                        </label>
                        <select
                          value={submissionForm.format}
                          onChange={(e) => setSubmissionForm({ ...submissionForm, format: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                        >
                          <option value="Comic / Manga">Comic / Manga</option>
                          <option value="Indie Game Build">Indie Game Build / Demo</option>
                          <option value="Animation Short">Animation Short / Teaser</option>
                          <option value="Concept / Illustrated Story">Concept / Illustrated Story</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                          Stage of Completion
                        </label>
                        <select
                          value={submissionForm.stage}
                          onChange={(e) => setSubmissionForm({ ...submissionForm, stage: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                        >
                          <option value="Rough Concept">Rough Concept / Pitch Deck</option>
                          <option value="In Progress">In Progress (Script / Art in production)</option>
                          <option value="Finished / Polished">Finished / Release Ready</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                        The One-Minute Pitch *
                      </label>
                      <textarea
                        rows={3}
                        value={submissionForm.pitch}
                        onChange={(e) => setSubmissionForm({ ...submissionForm, pitch: e.target.value })}
                        placeholder="What is your world about? Who is the protagonist, and what makes this universe unforgettable?"
                        className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                      />
                      {errors.pitch && <p className="mt-1 text-xs text-red-500">{errors.pitch}</p>}
                    </div>

                    {/* Studio Path Selection */}
                    <div className="pt-4 border-t border-black/10 dark:border-white/10">
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80 mb-3">
                        Do you want to start your own studio or join an internal studio? *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setSubmissionForm({ ...submissionForm, studioPath: "own-studio" })}
                          className={`tactile-btn text-left rounded-2xl border p-4 transition-all duration-300 ease-snappy ${
                            submissionForm.studioPath === "own-studio"
                              ? "border-black dark:border-sixzmic-lime bg-black/5 dark:bg-sixzmic-lime/10 ring-2 ring-black/20 dark:ring-sixzmic-lime/40"
                              : "border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-neutral-900 dark:text-white">
                              Start my own studio
                            </span>
                            {submissionForm.studioPath === "own-studio" && (
                              <Check className="h-4 w-4 text-black dark:text-sixzmic-lime" />
                            )}
                          </div>
                          <p className="mt-1 text-xs text-neutral-600 dark:text-white/60">
                            Build an independent studio and grow your own creative practice with Sixzmic distribution.
                          </p>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSubmissionForm({ ...submissionForm, studioPath: "internal-studios" })}
                          className={`tactile-btn text-left rounded-2xl border p-4 transition-all duration-300 ease-snappy ${
                            submissionForm.studioPath === "internal-studios"
                              ? "border-black dark:border-sixzmic-lime bg-black/5 dark:bg-sixzmic-lime/10 ring-2 ring-black/20 dark:ring-sixzmic-lime/40"
                              : "border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-neutral-900 dark:text-white">
                              Sixzmic Internal Studios
                            </span>
                            {submissionForm.studioPath === "internal-studios" && (
                              <Check className="h-4 w-4 text-black dark:text-sixzmic-lime" />
                            )}
                          </div>
                          <p className="mt-1 text-xs text-neutral-600 dark:text-white/60">
                            Join Sixzmic&#39;s in-house studio teams and launch your career directly with existing slates.
                          </p>
                        </button>
                      </div>
                    </div>

                    {/* Own Studio Details */}
                    {submissionForm.studioPath === "own-studio" && (
                      <div className="animate-fadeIn space-y-6 pt-4 border-t border-black/10 dark:border-white/10">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80 mb-2">
                            What type of studio?
                          </label>
                          <div className="grid grid-cols-3 gap-3">
                            {[
                              { id: "animation", label: "Animation Studio", sub: "Motion & film" },
                              { id: "gaming", label: "Gaming Studio", sub: "Interactive" },
                              { id: "comic", label: "Comic Studio", sub: "Comics & manga" }
                            ].map((st) => (
                              <button
                                key={st.id}
                                type="button"
                                onClick={() => setSubmissionForm({ ...submissionForm, studioType: st.id as any })}
                                className={`tactile-btn rounded-xl border p-3 text-center text-xs transition-all ${
                                  submissionForm.studioType === st.id
                                    ? "border-black dark:border-sixzmic-lime bg-black text-white dark:bg-sixzmic-lime dark:text-black font-bold"
                                    : "border-black/10 dark:border-white/10 text-neutral-700 dark:text-white/70 hover:border-black/25"
                                }`}
                              >
                                <div>{st.label}</div>
                                <div className="text-[10px] opacity-70 mt-0.5">{st.sub}</div>
                              </button>
                            ))}
                          </div>
                          {errors.studioType && <p className="mt-1 text-xs text-red-500">{errors.studioType}</p>}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80 mb-2">
                              Team Size
                            </label>
                            <select
                              value={submissionForm.teamSize}
                              onChange={(e) => setSubmissionForm({ ...submissionForm, teamSize: e.target.value })}
                              className="w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                            >
                              {TEAM_SIZES.map((ts) => (
                                <option key={ts.value} value={ts.value}>
                                  {ts.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Funding Range Slider R10k to R500k */}
                          <div>
                            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80 mb-2">
                              <span>Funding Needed</span>
                              <span className="font-mono text-black dark:text-sixzmic-lime text-sm">
                                {formatZAR(submissionForm.fundingNeeded)}
                              </span>
                            </div>
                            <input
                              type="range"
                              min={10000}
                              max={500000}
                              step={10000}
                              value={submissionForm.fundingNeeded}
                              onChange={(e) =>
                                setSubmissionForm({
                                  ...submissionForm,
                                  fundingNeeded: parseInt(e.target.value, 10)
                                })
                              }
                              className="w-full accent-black dark:accent-sixzmic-lime cursor-pointer"
                            />
                            <div className="flex justify-between text-[10px] text-neutral-400 dark:text-white/40 mt-1 font-mono">
                              <span>R10k</span>
                              <span>R250k</span>
                              <span>R500k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Internal Studio Selection */}
                    {submissionForm.studioPath === "internal-studios" && (
                      <div className="animate-fadeIn space-y-6 pt-4 border-t border-black/10 dark:border-white/10">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80 mb-3">
                            Choose the studio you want to be part of:
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {SUBMISSION_STUDIOS.map((st) => {
                              const isSelected = submissionForm.internalStudio === st.id;
                              return (
                                <button
                                  key={st.id}
                                  type="button"
                                  onClick={() => setSubmissionForm({ ...submissionForm, internalStudio: st.id })}
                                  className={`tactile-btn flex flex-col items-center gap-2 rounded-xl border p-3.5 text-center transition-all duration-200 ${
                                    isSelected
                                      ? "border-black dark:border-sixzmic-lime bg-black/5 dark:bg-sixzmic-lime/10 ring-2 ring-black/20 dark:ring-sixzmic-lime/40"
                                      : "border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30"
                                  }`}
                                >
                                  <div className="relative h-10 w-24">
                                    <Image
                                      src={st.logo}
                                      alt={st.name}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                  <span className="text-xs font-bold text-neutral-900 dark:text-white">
                                    {st.name}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Preview of Studio Sample Artwork */}
                        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-black/30 p-4">
                          <span className="block text-[11px] font-bold uppercase text-neutral-500 dark:text-white/40 mb-2">
                            {selectedStudioObj.name} · Featured Production Still
                          </span>
                          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-200 dark:bg-black">
                            <Image
                              src={selectedStudioObj.work[0].image}
                              alt={selectedStudioObj.work[0].alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 2: The Work Itself */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                        Portfolio / Sample Files URL *
                      </label>
                      <input
                        type="url"
                        value={submissionForm.portfolioUrl}
                        onChange={(e) => setSubmissionForm({ ...submissionForm, portfolioUrl: e.target.value })}
                        placeholder="https://drive.google.com/... or ArtStation / itch.io"
                        className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                      />
                      <p className="mt-1 text-[11px] text-neutral-500 dark:text-white/50">
                        Google Drive, Dropbox, ArtStation, itch.io, YouTube, or GitHub repository. Please ensure link permissions are public / viewable.
                      </p>
                      {errors.portfolioUrl && <p className="mt-1 text-xs text-red-500">{errors.portfolioUrl}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                        Social / Creator Profile URL (Optional)
                      </label>
                      <input
                        type="url"
                        value={submissionForm.socialUrl}
                        onChange={(e) => setSubmissionForm({ ...submissionForm, socialUrl: e.target.value })}
                        placeholder="https://instagram.com/yourhandle or X profile"
                        className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80">
                        Creator Notes & Production Context
                      </label>
                      <textarea
                        rows={4}
                        value={submissionForm.creatorNote}
                        onChange={(e) => setSubmissionForm({ ...submissionForm, creatorNote: e.target.value })}
                        placeholder="Tell us about the tools you used, your team, previous projects, or what support you seek from Sixzmic..."
                        className="mt-2 w-full rounded-xl border border-black/15 dark:border-white/15 bg-neutral-50 dark:bg-black/40 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:border-black dark:focus:border-sixzmic-lime focus:outline-none"
                      />
                    </div>

                    {/* Example Submission Samples Reference */}
                    <div className="pt-4 border-t border-black/10 dark:border-white/10">
                      <div className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80 mb-3">
                        Format References
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <ExampleLightbox
                          title="Comic Progress Sample"
                          image="/submissions/assets/comic-progress-1-BM4rugXc.png"
                          alt="Example progress pencil and ink board"
                          caption="Layout, penciling, and text balloons."
                        />
                        <ExampleLightbox
                          title="Cover Art Sample"
                          image="/submissions/assets/Cover-iXHYNeMY.png"
                          alt="Example polished cover artwork"
                          caption="Polished visual cover composition."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Review & Rights Confirmation */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.02] p-5 sm:p-6 space-y-4 text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-black/10 dark:border-white/10">
                        <h3 className="text-sm font-bold text-neutral-900 dark:text-white font-display">
                          Submission Summary
                        </h3>
                        <button
                          type="button"
                          onClick={() => setStep(0)}
                          className="text-black dark:text-sixzmic-lime font-bold hover:underline"
                        >
                          Edit details
                        </button>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div>
                          <span className="text-neutral-500 dark:text-white/40 block">Creator</span>
                          <span className="font-bold text-neutral-900 dark:text-white">{submissionForm.fullName}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 dark:text-white/40 block">Email</span>
                          <span className="font-bold text-neutral-900 dark:text-white truncate block">{submissionForm.email}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 dark:text-white/40 block">Institution</span>
                          <span className="font-bold text-neutral-900 dark:text-white">{submissionForm.school || "Independent"}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 dark:text-white/40 block">Project Title</span>
                          <span className="font-bold text-neutral-900 dark:text-white">{submissionForm.projectTitle}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 dark:text-white/40 block">Format & Stage</span>
                          <span className="font-bold text-neutral-900 dark:text-white">{submissionForm.format} ({submissionForm.stage})</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 dark:text-white/40 block">Studio Track</span>
                          <span className="font-bold text-neutral-900 dark:text-white">
                            {submissionForm.studioPath === "own-studio"
                              ? `Own Studio (${formatZAR(submissionForm.fundingNeeded)})`
                              : `Internal (${selectedStudioObj.name})`}
                          </span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-black/10 dark:border-white/10">
                        <span className="text-neutral-500 dark:text-white/40 block mb-1">Portfolio Link</span>
                        <a
                          href={submissionForm.portfolioUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-black dark:text-sixzmic-lime underline flex items-center gap-1.5"
                        >
                          <span className="truncate">{submissionForm.portfolioUrl}</span>
                          <ExternalLink className="h-3 w-3 shrink-0" />
                        </a>
                      </div>
                    </div>

                    {/* Legal Rights Guarantee */}
                    <div className="space-y-4 pt-2">
                      <label className="flex items-start gap-3 rounded-2xl border border-black/15 dark:border-white/15 bg-white dark:bg-black/40 p-4 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={submissionForm.rightsConfirmed}
                          onChange={(e) =>
                            setSubmissionForm({
                              ...submissionForm,
                              rightsConfirmed: e.target.checked
                            })
                          }
                          className="mt-0.5 h-4 w-4 rounded accent-black dark:accent-sixzmic-lime"
                        />
                        <div className="text-xs">
                          <strong className="block text-neutral-900 dark:text-white">
                            I made this, or I have verified permission to share it.
                          </strong>
                          <span className="mt-1 block text-neutral-600 dark:text-white/60 leading-relaxed">
                            Submitting does not transfer ownership. If Sixzmic decides to distribute
                            or co-publish your work, we discuss mutual terms and provide canonical
                            ISNI / ISWC author equity.
                          </span>
                        </div>
                      </label>
                      {errors.rightsConfirmed && (
                        <p className="text-xs text-red-500">{errors.rightsConfirmed}</p>
                      )}

                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={submissionForm.updatesOptIn}
                          onChange={(e) =>
                            setSubmissionForm({
                              ...submissionForm,
                              updatesOptIn: e.target.checked
                            })
                          }
                          className="h-4 w-4 rounded accent-black dark:accent-sixzmic-lime"
                        />
                        <span className="text-xs text-neutral-600 dark:text-white/70">
                          Keep me in the loop about Sixzmic creator grants and publishing opportunities.
                        </span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Actions */}
            <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="tactile-btn flex items-center gap-1.5 text-xs font-bold text-neutral-600 dark:text-white/70 hover:text-black dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>{step === 0 ? "Change Track" : "Back"}</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={isSubmitting}
                className="tactile-btn flex items-center gap-2 rounded-xl bg-black dark:bg-sixzmic-lime px-6 py-3.5 text-xs font-bold text-white dark:text-black hover:opacity-90 shadow-md hover:shadow-lg disabled:opacity-50"
              >
                <span>
                  {isSubmitting
                    ? "Sending..."
                    : step === currentSteps.length - 1
                    ? track === "learn"
                      ? "Join Sixzmic Learn"
                      : "Send My Work"
                    : "Continue"}
                </span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </main>
      )}

      {/* Screen 3: Submission Confirmed State */}
      {submitted && (
        <main className="flex-1 mx-auto max-w-2xl px-4 py-16 text-center flex flex-col items-center justify-center animate-fadeIn">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white dark:bg-sixzmic-lime dark:text-black shadow-xl">
            <CheckCircle2 className="h-9 w-9" />
          </div>

          <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight font-display">
            {track === "learn" ? "Welcome to Sixzmic Learn" : "Submission Received!"}
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-white/70 max-w-md">
            Thank you, <strong>{track === "learn" ? learnForm.fullName : submissionForm.fullName}</strong>.
            We have registered your details in the Sixzmic publisher database.
          </p>

          {/* Reference Meta Box */}
          <div className="mt-8 w-full rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0e0e14] p-6 text-left text-xs space-y-3 shadow-md">
            <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2">
              <span className="text-neutral-500 dark:text-white/40 uppercase">Tracking Key</span>
              <span className="font-mono font-bold text-black dark:text-sixzmic-lime">
                SXZ-{Math.floor(100000 + Math.random() * 900000)}
              </span>
            </div>
            <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2">
              <span className="text-neutral-500 dark:text-white/40 uppercase">Notification Sent To</span>
              <span className="font-bold text-neutral-900 dark:text-white">
                {track === "learn" ? learnForm.email : submissionForm.email}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500 dark:text-white/40 uppercase">Assigned Studio Editorial</span>
              <span className="font-bold text-neutral-900 dark:text-white">
                {track === "learn" ? "Educational Directorate" : "Creative Rights & Acquisition"}
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="tactile-btn rounded-xl bg-black dark:bg-sixzmic-lime px-6 py-3 text-xs font-bold text-white dark:text-black shadow-md"
            >
              Return to Showcase
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setTrack("welcome");
                setStep(0);
              }}
              className="tactile-btn rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-white/5 px-6 py-3 text-xs font-semibold text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10"
            >
              Submit Another Project
            </button>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-black/10 dark:border-white/10 py-6 text-center text-xs text-neutral-500 dark:text-white/40">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-black dark:text-sixzmic-lime" />
            <span>Sixzmic Creator Rights Guarantee · ISNI & ISWC Attribution Verified</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Submission</Link>
            <Link href="/legal" className="hover:underline">IP Registry Standards</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function SubmissionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f7f7f4] dark:bg-[#070709]" />}>
      <SubmissionsContent />
    </Suspense>
  );
}
