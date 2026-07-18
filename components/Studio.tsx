"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { studio } from "@/data/site";

const services = studio.services;

export default function Studio() {
  const { language } = useLanguage();
  // 모바일 탭으로 카드 뒤집기 (PC는 호버로 동작)
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const toggle = (i: number) =>
    setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section
      id="studio"
      className="bg-black text-white pt-20 pb-32 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-lg font-bold tracking-[0.3em] text-[#39D5F2] mb-12">
          {language === "ko" ? "제작사" : "COMPANY"}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* 좌측: OAL 이름 + 회사 설명 */}
          <div>

            <p className="text-[#39D5F2] text-sm tracking-[0.25em] mb-6">
              {studio.eyebrow}
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mb-8">
              {studio.name}
            </h3>

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

          {/* 우측: 큰 로고 */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/logo/oal-logo.png"
              alt="OAL"
              width={1428}
              height={1205}
              className="w-full max-w-xs md:max-w-sm h-auto"
            />
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
