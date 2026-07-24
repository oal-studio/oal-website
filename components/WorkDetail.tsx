"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Work } from "@/data/works";

export default function WorkDetail({ work }: { work: Work }) {
  const { language } = useLanguage();
  const isKo = language === "ko";
  const hasTrailer = Boolean(work.vimeoId || work.trailer);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const trailerButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isTrailerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsTrailerOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, iframe, video, [href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      trailerButtonRef.current?.focus();
    };
  }, [isTrailerOpen]);

  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="max-w-6xl mx-auto px-8 pt-20 pb-32">
        <div className="mb-12">
          <Link
            href="/#works"
            className="text-[#39D5F2] text-sm tracking-[0.15em]"
          >
            ← {isKo ? "작품 목록으로" : "BACK TO WORKS"}
          </Link>
        </div>

        <div className="mt-8 mb-16">
          <p className="text-[#39D5F2] tracking-[0.2em] text-sm mb-4">
            {isKo ? work.categoryKr : work.categoryEn}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            {isKo ? work.titleKr : work.titleEn}
          </h1>

          <div className="mt-6">
            <p className="text-neutral-500 text-xs tracking-[0.15em] uppercase">
              {isKo ? "영문 제목" : "Original Title"}
            </p>

            <p className="text-xl text-neutral-300 mt-2">
              {isKo ? work.titleEn : work.titleKr}
            </p>
          </div>
        </div>

        {/* Poster + Info */}
        <div className="grid md:grid-cols-2 gap-16">
          <div className="relative aspect-[2/3]">
            <Image
              src={work.poster}
              alt={isKo ? `${work.titleKr} 포스터` : `${work.titleEn} poster`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-neutral-400 mb-6">
              {`${work.releaseDate ?? work.year} · ${isKo ? work.genreKr : work.genreEn}`}
            </p>

            <p className="text-lg leading-relaxed text-neutral-300">
              {isKo ? work.synopsisKr : work.synopsisEn}
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <h3 className="text-[#39D5F2] text-sm tracking-[0.15em] mb-2">
                  {isKo ? "감독" : "DIRECTOR"}
                </h3>
                <p>{isKo ? work.directorKr : work.directorEn}</p>
              </div>

              <div>
                <h3 className="text-[#39D5F2] text-sm tracking-[0.15em] mb-2">
                  {isKo ? "출연" : "CAST"}
                </h3>
                <p>{isKo ? work.castKr : work.castEn}</p>
              </div>
            </div>

            {hasTrailer && (
              <div className="mt-10">
                <button
                  ref={trailerButtonRef}
                  type="button"
                  onClick={() => setIsTrailerOpen(true)}
                  className="
                    inline-block
                    cursor-pointer
                    border
                    border-[#39D5F2]
                    text-[#39D5F2]
                    px-6
                    py-3
                    font-bold
                    tracking-[0.15em]
                    uppercase
                    transition-all
                    duration-300
                    hover:bg-[#39D5F2]
                    hover:text-black
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#39D5F2]
                  "
                >
                  {isKo ? "예고편 보기" : "WATCH TRAILER"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {isTrailerOpen && hasTrailer && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={
            isKo ? `${work.titleKr} 예고편 재생` : `Play ${work.titleEn} trailer`
          }
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsTrailerOpen(false);
            }
          }}
        >
          <div
            className="w-full max-w-6xl"
            style={{ maxWidth: "min(72rem, calc((100dvh - 5rem) * 16 / 9))" }}
          >
            <div className="mb-3 flex justify-end">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsTrailerOpen(false)}
                aria-label={isKo ? "예고편 닫기" : "Close trailer"}
                className="cursor-pointer px-2 py-1 text-sm font-bold tracking-[0.15em] text-white transition-colors hover:text-[#39D5F2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39D5F2]"
              >
                <span aria-hidden="true">×</span>{" "}
                {isKo ? "닫기" : "CLOSE"}
              </button>
            </div>

            <div className="aspect-video w-full overflow-hidden bg-neutral-950">
              {work.vimeoId ? (
                <iframe
                  src={`https://player.vimeo.com/video/${work.vimeoId}?autoplay=1`}
                  title={isKo ? `${work.titleKr} 예고편` : `${work.titleEn} trailer`}
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : work.trailer ? (
                <video
                  src={work.trailer}
                  autoPlay
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full"
                  aria-label={isKo ? `${work.titleKr} 예고편` : `${work.titleEn} trailer`}
                />
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* Stills */}
      {work.stills.length > 0 && (
        <section className="max-w-6xl mx-auto px-8 pb-32">
          <h2 className="text-[#39D5F2] text-lg font-bold tracking-[0.3em] mb-8">
            {isKo ? "스틸" : "STILLS"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {work.stills.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={isKo ? `${work.titleKr} 스틸 ${i + 1}` : `${work.titleEn} still ${i + 1}`}
                width={1200}
                height={800}
                className="w-full"
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
