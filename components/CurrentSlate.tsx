"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { currentSlate } from "@/data/site";

// hidden: true 인 항목은 화면에서 제외
const projects = currentSlate.filter((p) => !p.hidden);

type Trailer = { title: string; trailer?: string; vimeoId?: string };

export default function CurrentSlate() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // 예고편 팝업(라이트박스) 상태
  const [active, setActive] = useState<Trailer | null>(null);

  // FeaturedWorks 와 동일한 스크롤 등장 애니메이션
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

  // 팝업 열려 있을 때 ESC 로 닫기
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="projects" className="bg-black text-white pt-20 pb-32 px-8">
      <h2 className="text-lg font-bold tracking-[0.3em] text-[#39D5F2] mb-12">
        CURRENT SLATE
      </h2>

      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {projects.map((project, i) => {
          const hasTrailer = Boolean(project.trailer || project.vimeoId);

          // FeaturedWorks 와 동일한 순차 fade-up
          const revealClass = `transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`;
          const revealDelay = { transitionDelay: visible ? `${i * 500}ms` : "0ms" };

          // ── 포스터가 있는 카드 ──────────────────────────────
          if (project.poster) {
            return (
              <div
                key={project.title}
                style={revealDelay}
                className={`group block ${revealClass}`}
              >
                <button
                  type="button"
                  onClick={() =>
                    hasTrailer &&
                    setActive({
                      title: project.title,
                      trailer: project.trailer,
                      vimeoId: project.vimeoId,
                    })
                  }
                  className={`relative aspect-[2/3] w-full overflow-hidden block text-left ${
                    hasTrailer ? "cursor-pointer" : "cursor-default"
                  }`}
                  aria-label={
                    hasTrailer ? `${project.title} 예고편 보기` : project.title
                  }
                >
                  <Image
                    src={project.poster}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
                  />

                  {/* hover 오버레이 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

                  {/* 중앙 텍스트 + 예고편 아이콘 */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    {hasTrailer && (
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#39D5F2] text-[#39D5F2] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        ▶
                      </span>
                    )}

                    <span className="block h-px w-10 my-3 bg-[#39D5F2] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out delay-200" />

                    <span className="text-[#39D5F2] text-xs md:text-sm font-semibold tracking-[0.18em] uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-300">
                      {project.status}
                    </span>
                  </div>
                </button>

                <h3 className="mt-4 font-semibold text-lg">{project.title}</h3>
                <p className="text-neutral-400 text-sm mt-1">{project.type}</p>
                <p className="text-[#39D5F2] text-sm md:text-base font-bold mt-2 tracking-[0.08em]">
                  {project.releaseDate
                    ? `${project.releaseDate} 개봉`
                    : project.status}
                </p>
              </div>
            );
          }

          // ── 포스터 없는 카드 (개발 중 플레이스홀더) ─────────
          return (
            <div
              key={project.title}
              style={revealDelay}
              className={`group block ${revealClass}`}
            >
              <div className="relative aspect-[2/3] w-full overflow-hidden border border-neutral-800 bg-neutral-950 flex flex-col items-center justify-center text-center px-4">
                <span className="block h-px w-8 mb-4 bg-neutral-700" />
                <h3 className="font-bold text-base md:text-lg leading-snug">
                  {project.title}
                </h3>
                <span className="block h-px w-8 mt-4 bg-neutral-700" />
              </div>

              <p className="text-neutral-400 text-sm mt-4">{project.type}</p>
              <p className="text-[#39D5F2] text-xs mt-2 tracking-[0.12em] uppercase">
                {project.status}
              </p>
            </div>
          );
        })}
      </div>

      {/* 예고편 팝업(라이트박스) */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="닫기"
            className="absolute top-6 right-6 text-white text-3xl leading-none hover:text-[#39D5F2]"
          >
            ×
          </button>

          <div
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {active.trailer ? (
              <video
                src={active.trailer}
                controls
                autoPlay
                className="w-full h-full bg-black"
              />
            ) : (
              <iframe
                src={`https://player.vimeo.com/video/${active.vimeoId}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
