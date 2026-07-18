"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { nav } from "@/data/site";

export default function Navigation() {
  const { language, setLanguage } = useLanguage();

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black/92
        backdrop-blur-md
      "
    >
      <div className="flex items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-12 lg:px-16">

        <Link
          href="/"
          className="shrink-0"
          aria-label="OAL home"
        >
          <Image
            src="/logo/oal-logo.png"
            alt="OAL"
            width={50}
            height={18}
            priority
            className="h-auto w-11 sm:w-[50px]"
          />
        </Link>

        <nav
          className="flex items-center gap-2 text-[10px] sm:gap-8 sm:text-sm"
          aria-label={language === "ko" ? "주요 메뉴" : "Primary navigation"}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-[#39D5F2] focus-visible:text-[#39D5F2]"
            >
              {item.label[language]}
            </a>
          ))}

          <div
            className="ml-0.5 flex items-center gap-0.5 border-l border-white/20 pl-2 sm:gap-1.5 sm:pl-5"
            role="group"
            aria-label={language === "ko" ? "언어 선택" : "Choose language"}
          >
            {(["ko", "en"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                aria-pressed={language === option}
                aria-label={option === "ko" ? "한국어로 보기" : "View in English"}
                className={`h-9 min-w-6 text-[9px] font-bold tracking-[0.04em] transition-colors sm:min-w-8 sm:text-xs sm:tracking-[0.08em] ${
                  language === option
                    ? "text-[#39D5F2]"
                    : "text-neutral-500 hover:text-white focus-visible:text-white"
                }`}
              >
                {option === "ko" ? "KR" : "EN"}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
