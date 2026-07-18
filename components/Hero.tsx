"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { hero } from "@/data/site";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={hero.video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
        <p className="mb-8 text-3xl font-extrabold tracking-[0.3em] text-[#39D5F2] md:text-4xl">
          {hero.eyebrow}
        </p>

        <h1
          className={`font-bold md:text-7xl lg:text-8xl ${
            language === "ko" ? "text-[clamp(2rem,10vw,3rem)]" : "text-5xl"
          }`}
        >
          {hero.titleLines[language].map((line, index) => (
            <span
              key={line}
              className={language === "ko" ? "block whitespace-nowrap" : undefined}
            >
              {language === "en" && index > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-8 text-sm tracking-[0.15em] text-neutral-300">
          {hero.subLines[language].map((line, index) => (
            <p key={line} className={index > 0 ? "mt-2" : undefined}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
