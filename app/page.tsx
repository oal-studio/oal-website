import Navigation from "@/components/Navigation"
import FeaturedWorks from "@/components/FeaturedWorks"
import CurrentSlate from "@/components/CurrentSlate"
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";
import { hero } from "@/data/site";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navigation />

      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={hero.video}
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
          <p className="text-[#39D5F2] text-3xl md:text-4xl font-extrabold tracking-[0.3em] mb-8">
            {hero.eyebrow}
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            {hero.titleLines.map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-8 text-neutral-300 text-sm tracking-[0.15em]">
            {hero.subLines.map((line, i) => (
              <p key={line} className={i > 0 ? "mt-2" : undefined}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      <FeaturedWorks />
      <CurrentSlate />
      <Studio />
      <Contact />
    </main>
  )
}