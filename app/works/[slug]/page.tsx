import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkDetail from "@/components/WorkDetail";
import { getWork, visibleWorks } from "@/data/works";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    notFound();
  }

  const url = `/works/${work.slug}`;
  const image = { url: work.poster, alt: `${work.titleEn} poster` };

  return {
    title: work.titleEn,
    description: work.synopsisEn,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "OAL",
      title: work.titleEn,
      description: work.synopsisEn,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: work.titleEn,
      description: work.synopsisEn,
      images: [image],
    },
  };
}

// 빌드 시 숨김 아닌 작품들의 페이지를 미리 생성
export function generateStaticParams() {
  return visibleWorks().map((w) => ({ slug: w.slug }));
}

export default async function WorkPage({
  params,
}: WorkPageProps) {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    notFound();
  }

  return <WorkDetail work={work} />;
}
