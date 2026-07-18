import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero";
import FeaturedWorks from "@/components/FeaturedWorks"
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navigation />
      <Hero />

      <FeaturedWorks />
      <Studio />
      <Contact />
    </main>
  )
}
