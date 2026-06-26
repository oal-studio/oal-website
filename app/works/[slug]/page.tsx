import { notFound } from "next/navigation";
import WorkDetail from "@/components/WorkDetail";
import { getWork, visibleWorks } from "@/data/works";

// 빌드 시 숨김 아닌 작품들의 페이지를 미리 생성
export function generateStaticParams() {
  return visibleWorks().map((w) => ({ slug: w.slug }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    notFound();
  }

  return <WorkDetail work={work} />;
}
