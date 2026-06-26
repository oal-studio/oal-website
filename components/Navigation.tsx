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
      <div className="flex justify-between items-center px-12 lg:px-16 py-3">

        <div>
          <Image
            src="/logo/oal-logo.png"
            alt="OAL"
            width={50}
            height={18}
            priority
          />
        </div>

        <nav className="flex gap-8 text-sm">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}