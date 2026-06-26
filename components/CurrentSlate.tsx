import { currentSlate } from "@/data/site";

// hidden: true 인 항목은 화면에서 제외
const projects = currentSlate.filter((p) => !p.hidden);

export default function CurrentSlate() {
  return (
    <section
      id="projects"
      className="bg-black text-white pt-20 pb-32 px-8"
    >
      <div className="max-w-6xl mx-auto">

      <h2 className="text-lg font-bold tracking-[0.3em] text-[#39D5F2] mb-16">
        CURRENT SLATE
      </h2>

        <div className="space-y-10">

        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-neutral-800 pb-8"
          >
            <h3 className="text-3xl md:text-5xl font-bold">
              {project.title}
            </h3>

            <div className="text-left md:text-right mt-3 md:mt-0">
            <p className="text-white text-lg font-medium">
              {project.type}
            </p>

            <p className="text-[#39D5F2] text-xs mt-2 tracking-[0.12em] uppercase">
              {project.status}
            </p>
            </div>
          </div>
        ))}

        </div>

      </div>
    </section>
  );
}