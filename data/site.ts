// ─────────────────────────────────────────────────────────────
// 사이트 콘텐츠 — 작품(works.ts)을 제외한 홈페이지 글/메뉴/연락처를
// 이 파일 한 곳에서 수정합니다. 디자인·효과는 컴포넌트에 있고,
// "내용(텍스트)"만 여기서 바꾸면 됩니다.
//
// 수정 후 git push → Vercel 자동 배포(약 1~2분)로 반영됩니다.
// 작품(영화/시리즈) 관련은 data/works.ts 에서 따로 관리합니다.
// ─────────────────────────────────────────────────────────────

// 1) 메인 첫 화면 (배경 영상 위 타이틀)
export const hero = {
  video: "/videos/oal-showreel.mp4", // 배경 영상 경로 (public 폴더 기준)
  eyebrow: "OAL", // 맨 위 작은 글씨
  titleLines: {
    en: ["STORIES", "BEYOND", "BORDERS"],
    ko: ["경계를 넘어", "세상과 만나는", "이야기"],
  },
  subLines: {
    en: ["FILM & SERIES PRODUCTION", "SINCE 2013"],
    ko: ["영화·시리즈 기획 및 제작", "2013년 설립"],
  },
};

// 2) 상단 메뉴
export const nav = [
  { label: { en: "WORKS", ko: "작품" }, href: "/#works" },
  { label: { en: "COMPANY", ko: "제작사" }, href: "/#studio" },
  { label: { en: "CONTACT", ko: "문의" }, href: "/#contact" },
];

// 3) STUDIO (소개 글 + 6개 서비스 박스)
export const studio = {
  eyebrow: "STORIES BEYOND BORDERS",
  name: "OAL",
  paragraphs: {
    en: [
      "Founded in 2013, OAL develops and produces feature films and series for global audiences.",
      "Driven by original ideas, compelling storytelling, and international collaboration, OAL creates content that connects creators, stories, and audiences across borders.",
      "From content development and original IP creation to international co-productions and production services, OAL continues to expand its slate across Asia and beyond.",
    ],
    ko: [
      "2013년 설립된 OAL은 인생의 단 한 번뿐이어도 좋을 특별한 순간(Once in A Lifetime)과 평생 잊지 못할 추억을 선사할 수 있는 작품을 만든다는 의미를 담은 영상 콘텐츠 전문 기획 제작사입니다.",
      "독창적인 아이디어, 힘 있는 스토리텔링, 국제적 협업을 바탕으로 창작자와 이야기, 관객을 국경 너머로 연결하는 콘텐츠를 만듭니다.",
      "콘텐츠 개발과 오리지널 IP 창작부터 국제 공동제작, 프로덕션 서비스까지 아시아를 넘어 세계로 작품 영역을 확장하고 있습니다.",
    ],
  },
  // 3D 플립 박스: title(앞면) / desc(뒷면 설명)
  services: [
    { title: { en: "Feature Films", ko: "장편영화" }, desc: { en: "Development and production of feature films for theatrical release", ko: "극장 개봉을 목표로 한 장편영화 기획·제작" } },
    { title: { en: "Series", ko: "시리즈" }, desc: { en: "Drama and series production for global audiences", ko: "글로벌 시청자를 위한 드라마·시리즈 제작" } },
    { title: { en: "Content Development", ko: "콘텐츠 개발" }, desc: { en: "Content development from original concepts through screenplays", ko: "원천 기획부터 시나리오까지 콘텐츠 개발" } },
    { title: { en: "Original IP", ko: "오리지널 IP" }, desc: { en: "Creation of original IP rooted in distinctive storytelling", ko: "독창적인 이야기 기반 오리지널 IP 창작" } },
    { title: { en: "International Co-Productions", ko: "국제 공동제작" }, desc: { en: "International co-productions built through cross-border collaboration", ko: "국가 간 협업을 통한 국제 공동제작" } },
    { title: { en: "Production Services", ko: "프로덕션 서비스" }, desc: { en: "End-to-end production support, including filming and locations", ko: "촬영·로케이션 등 프로덕션 전반 지원" } },
  ],
};

// 4) CONTACT (연락처)
export const contact = {
  generalEmail: "2013oal@gmail.com",
  businessEmail: "2013oal@gmail.com",
  address: {
    ko: "서울특별시 마포구 성암로 330 첨단산업센터 A동 406호",
    en: "Room 406, Building A, Advanced Industry Center, 330 Seongam-ro, Mapo-gu, Seoul, Republic of Korea",
  },
  telephone: {
    ko: "02-6677-1017",
    en: "+82-2-6677-1017",
  },
  fax: {
    ko: "02-6672-1017",
    en: "+82-2-6672-1017",
  },
};
