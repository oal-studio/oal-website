"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { featuredWorks } from "@/data/works";

const works = featuredWorks();

export default function FeaturedWorks() {
  const { language } = useLanguage();
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="works"
      className="bg-black text-white pt-20 pb-0 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg font-bold tracking-[0.3em] text-[#39D5F2] mb-12">
          {language === "ko" ? "주요 작품" : "FEATURED WORKS"}
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-6 md:mx-auto md:max-w-[60rem] md:grid-cols-3 md:gap-x-10 md:gap-y-16"
        >
          {works.map((work, i) => (
            <Link
              key={work.titleEn}
              href={`/works/${work.slug}`}
              style={{ transitionDelay: visible ? `${i * 500}ms` : "0ms" }}
              className={`
                group block
                transition-all duration-700 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
            >
            <div
              className="
                relative
                aspect-[2/3]
                overflow-hidden
              "
            >
              <Image
                src={work.poster}
                alt={language === "ko" ? work.titleKr : work.titleEn}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-[600ms]
                  ease-out
                  group-hover:scale-[1.06]
                "
              />

              {/* Salient-style hover overlay (.work-info-bg) */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/85
                  via-black/40
                  to-black/30
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  ease-out
                "
              />

              {/* Salient-style centered text reveal (.work-info .vert-center) */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-4
                "
              >
                <h4
                  className="
                    text-white
                    font-bold
                    text-base
                    md:text-lg
                    tracking-[0.06em]
                    uppercase

                    opacity-0
                    translate-y-4
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                    ease-out
                    delay-100
                  "
                >
                  {language === "ko" ? work.titleKr : work.titleEn}
                </h4>

                {/* Salient signature expanding line */}
                <span
                  className="
                    block
                    h-px
                    w-10
                    my-3
                    bg-[#39D5F2]

                    scale-x-0
                    group-hover:scale-x-100
                    transition-transform
                    duration-500
                    ease-out
                    delay-200
                  "
                />

                <span
                  className="
                    text-[#39D5F2]
                    text-xs
                    md:text-sm
                    font-semibold
                    tracking-[0.18em]

                    opacity-0
                    translate-y-4
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                    ease-out
                    delay-300
                  "
                >
                  {work.year}
                </span>
              </div>
            </div>

            <h3 className="mt-4 font-semibold text-lg">
              {language === "ko" ? work.titleKr : work.titleEn}
            </h3>

            <p className="text-neutral-300 text-sm font-semibold tracking-[0.08em] mt-1">
              {language === "ko" ? work.titleEn : work.titleKr}
            </p>

            <p className="text-neutral-500 text-sm mt-2">
              {work.releaseDate ?? work.year}
            </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
