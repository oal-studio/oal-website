import { contact } from "@/data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white pt-20 pb-32 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-lg font-bold tracking-[0.3em] text-[#39D5F2] mb-12">
          CONTACT
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-2xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-neutral-500 text-sm tracking-[0.15em] mb-2">
                  GENERAL INQUIRIES
                </p>

                <p className="text-lg">
                  {contact.generalEmail}
                </p>
              </div>

              <div>
                <p className="text-neutral-500 text-sm tracking-[0.15em] mb-2">
                  BUSINESS & CO-PRODUCTIONS
                </p>

                <p className="text-lg">
                  {contact.businessEmail}
                </p>
              </div>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-8">
              Location
            </h3>

            <p className="text-neutral-300 text-lg">
              {contact.location}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}