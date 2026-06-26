"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Work } from "@/data/works";

export default function WorkDetail({ work }: { work: Work }) {
  const [language, setLanguage] = useState("EN");

  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="max-w-6xl mx-auto px-8 pt-20 pb-32">
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/#works"
            className="text-[#39D5F2] text-sm tracking-[0.15em]"
          >
            ← BACK TO WORKS
          </Link>

          <div className="flex gap-3 text-sm">
            <button
              onClick={() => setLanguage("KR")}
              className={
                language === "KR"
                  ? "text-[#39D5F2] font-bold"
                  : "text-neutral-500"
              }
            >
              KR
            </button>

            <span className="text-neutral-700">|</span>

            <button
              onClick={() => setLanguage("EN")}
              className={
                language === "EN"
                  ? "text-[#39D5F2] font-bold"
                  : "text-neutral-500"
              }
            >
              EN
            </button>
          </div>
        </div>

        <div className="mt-8 mb-16">
          <p className="text-[#39D5F2] tracking-[0.2em] text-sm mb-4">
            {work.category}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            {language === "KR" ? work.titleKr : work.titleEn}
          </h1>

          <div className="mt-6">
            <p className="text-neutral-500 text-xs tracking-[0.15em] uppercase">
              {language === "KR" ? "영문 제목" : "Original Title"}
            </p>

            <p className="text-xl text-neutral-300 mt-2">
              {language === "KR" ? work.titleEn : work.titleKr}
            </p>
          </div>
        </div>

        {/* Poster + Info */}
        <div className="grid md:grid-cols-2 gap-16">
          <div className="relative aspect-[2/3]">
            <Image
              src={work.poster}
              alt={work.titleEn}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-neutral-400 mb-6">
              {language === "KR"
                ? `${work.year} · ${work.genreKr}`
                : `${work.year} · ${work.genreEn}`}
            </p>

            <p className="text-lg leading-relaxed text-neutral-300">
              {language === "KR" ? work.synopsisKr : work.synopsisEn}
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <h3 className="text-[#39D5F2] text-sm tracking-[0.15em] mb-2">
                  {language === "KR" ? "감독" : "DIRECTOR"}
                </h3>
                <p>{language === "KR" ? work.directorKr : work.directorEn}</p>
              </div>

              <div>
                <h3 className="text-[#39D5F2] text-sm tracking-[0.15em] mb-2">
                  {language === "KR" ? "출연" : "CAST"}
                </h3>
                <p>{language === "KR" ? work.castKr : work.castEn}</p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#trailer"
                className="
                  inline-block
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
                "
              >
                Watch Trailer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trailer */}
      <section id="trailer" className="max-w-6xl mx-auto px-8 pb-24">
        <h2 className="text-[#39D5F2] text-lg font-bold tracking-[0.3em] mb-8">
          TRAILER
        </h2>

        <div className="w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            src={`https://player.vimeo.com/video/${work.vimeoId}`}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Stills */}
      {work.stills.length > 0 && (
        <section className="max-w-6xl mx-auto px-8 pb-32">
          <h2 className="text-[#39D5F2] text-lg font-bold tracking-[0.3em] mb-8">
            STILLS
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {work.stills.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${work.titleEn} Still ${i + 1}`}
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
