"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { contact } from "@/data/site";

export default function Contact() {
  const { language } = useLanguage();

  return (
    <section
      id="contact"
      className="bg-black text-white pt-20 pb-32 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-lg font-bold tracking-[0.3em] text-[#39D5F2] mb-12">
          {language === "ko" ? "문의" : "CONTACT"}
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-2xl font-bold mb-8">
              {language === "ko" ? "문의하기" : "Get In Touch"}
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-neutral-500 text-sm tracking-[0.15em] mb-2">
                  {language === "ko" ? "일반 문의" : "GENERAL INQUIRIES"}
                </p>

                <p className="text-lg">
                  {contact.generalEmail}
                </p>
              </div>

              <div>
                <p className="text-neutral-500 text-sm tracking-[0.15em] mb-2">
                  {language === "ko" ? "비즈니스 및 공동제작" : "BUSINESS & CO-PRODUCTIONS"}
                </p>

                <p className="text-lg">
                  {contact.businessEmail}
                </p>
              </div>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-8">
              {language === "ko" ? "주소" : "Address"}
            </h3>

            <p className="text-neutral-300 text-lg">
              {contact.address[language]}
            </p>

            <div className="mt-4 space-y-1 text-neutral-300 text-base">
              <p>
                TEL.{" "}
                <a
                  href={language === "ko" ? "tel:0266771017" : "tel:+82266771017"}
                  className="transition-colors hover:text-[#39D5F2]"
                >
                  {contact.telephone[language]}
                </a>
              </p>
              <p>FAX. {contact.fax[language]}</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
