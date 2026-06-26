import Image from "next/image";
import { nav } from "@/data/site";

export default function Navigation() {
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
      <div className="flex justify-between items-center gap-4 px-5 sm:px-12 lg:px-16 py-3">

        <div className="shrink-0">
          <Image
            src="/logo/oal-logo.png"
            alt="OAL"
            width={50}
            height={18}
            priority
          />
        </div>

        <nav className="flex gap-4 sm:gap-8 text-xs sm:text-sm">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap">
              {item.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}