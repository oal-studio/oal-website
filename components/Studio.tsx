"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { studio } from "@/data/site";

const services = studio.services;

export default function Studio() {
  const { language } = useLanguage();
  const showreelRef = useRef<HTMLVideoElement>(null);
  // 모바일 탭으로 카드 뒤집기 (PC는 호버로 동작)
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const toggle = (i: number) =>
    setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));

  useEffect(() => {
    const video = showreelRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isNearViewport = false;

    const syncPlayback = () => {
      if (reducedMotion.matches || !isNearViewport) {
        video.pause();
        return;
      }

      void video.play().catch(() => {
        // Autoplay can still be blocked by a user agent preference.
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isNearViewport = entry.isIntersecting;
        syncPlayback();
      },
      { rootMargin: "240px 0px", threshold: 0 }
    );

    observer.observe(video);
    reducedMotion.addEventListener("change", syncPlayback);
    syncPlayback();

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, []);

  return (
    <section
      id="studio"
      className="bg-black text-white pt-20 pb-0 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-lg font-bold tracking-[0.3em] text-[#39D5F2] mb-12">
          {language === "ko" ? "제작사" : "COMPANY"}
        </h2>

        <div className="grid md:grid-cols-2 md:gap-x-16">

          {/* 좌측 상단: OAL 이름 + 로고 */}
          <div className="md:col-start-1 md:row-start-1">

            <p className="text-[#39D5F2] text-sm tracking-[0.25em] mb-6">
              {studio.eyebrow}
            </p>

            <div className="grid grid-cols-[max-content_1fr] items-center mb-8">
              <h3 className="text-3xl md:text-5xl font-bold">
                {studio.name}
              </h3>
              <span className="flex min-w-0 justify-center">
                <span className="relative block h-12 w-10 md:h-14 md:w-12 shrink-0 overflow-hidden">
                  <Image
                    src="/logo/oal-logo.png"
                    alt=""
                    width={1428}
                    height={1205}
                    className="absolute left-1/2 top-0 h-auto w-20 md:w-24 max-w-none -translate-x-1/2"
                  />
                </span>
              </span>
            </div>

          </div>

          {/* 좌측 하단: 회사 설명 */}
          <div className="md:col-start-1 md:row-start-2">
            {studio.paragraphs[language].map((text, i) => (
              <p
                key={i}
                className={`text-neutral-300 leading-relaxed text-lg${
                  i > 0 ? " mt-6" : ""
                }`}
              >
                {text}
              </p>
            ))}

          </div>

          {/* 우측: OAL 쇼릴 */}
          <div className="mt-12 aspect-[7/3] w-full overflow-hidden border border-white/10 bg-neutral-950 md:col-start-2 md:row-start-2 md:mt-0">
            <video
              ref={showreelRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="OAL showreel"
              className="h-full w-full object-cover"
            >
              <source src="/videos/oal-showreel.mp4" type="video/mp4" />
            </video>
          </div>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">

          {services.map((service, i) => (
            <button
              type="button"
              key={service.title.en}
              onClick={() => toggle(i)}
              aria-pressed={Boolean(flipped[i])}
              aria-label={`${service.title[language]} — ${service.desc[language]}`}
              className="group h-44 w-full text-left [perspective:1200px] cursor-pointer"
            >
              <div
                className={`
                  relative
                  h-full
                  w-full
                  transition-transform
                  duration-[600ms]
                  ease-out
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                  ${flipped[i] ? "[transform:rotateY(180deg)]" : ""}
                `}
              >
                {/* FRONT */}
                <div
                  className="
                    absolute
                    inset-0
                    [backface-visibility:hidden]
                    rounded-2xl
                    p-6
                    flex
                    flex-col
                    justify-between

                    bg-white/[0.04]
                    border
                    border-white/10
                  "
                >
                  <span className="text-2xl font-bold text-neutral-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-bold text-xl leading-snug text-white">
                    {service.title[language]}
                  </h4>
                </div>

                {/* BACK */}
                <div
                  className="
                    absolute
                    inset-0
                    [backface-visibility:hidden]
                    [transform:rotateY(180deg)]
                    rounded-2xl
                    p-6
                    flex
                    flex-col
                    justify-center
                    text-center

                    bg-gradient-to-br
                    from-[#39D5F2]
                    to-[#1591ad]
                  "
                >
                  <h4 className="font-bold text-lg leading-snug text-black mb-2">
                    {service.title[language]}
                  </h4>
                  <p className="text-black/75 text-sm leading-relaxed">
                    {service.desc[language]}
                  </p>
                </div>
              </div>
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}
