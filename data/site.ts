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
  titleLines: ["STORIES", "BEYOND", "BORDERS"], // 큰 제목 (줄바꿈 단위)
  subLines: ["FILM & SERIES PRODUCTION", "SINCE 2013"], // 제목 아래 문구
};

// 2) 상단 메뉴
export const nav = [
  { label: "WORKS", href: "#works" },
  { label: "PROJECTS", href: "#projects" },
  { label: "STUDIO", href: "#studio" },
  { label: "CONTACT", href: "#contact" },
];

// 3) CURRENT SLATE (진행 중인 프로젝트 목록)
//    status 예: "In Development" / "Packaging" / "Release Scheduled" 등
//    잠시 숨기려면 그 줄 끝에  hidden: true  를 추가하세요.
type SlateItem = {
  title: string;
  type: string;
  status: string;
  hidden?: boolean; // true면 화면에서 숨김 (없으면 보임)
};

export const currentSlate: SlateItem[] = [
  { title: "OKAY MADAM 2", type: "Feature Film", status: "Release Scheduled" },
  { title: "돈벼락과 연애의 상관관계", type: "Series", status: "Packaging" },
  { title: "너를 사랑하라", type: "Feature Film", status: "In Development" },
  { title: "냉동인간", type: "Feature Film", status: "In Development" },
  { title: "그릇", type: "Feature Film", status: "In Development" },
];

// 4) STUDIO (소개 글 + 6개 서비스 박스)
export const studio = {
  eyebrow: "STORIES BEYOND BORDERS",
  name: "OAL",
  paragraphs: [
    "Founded in 2013, OAL develops and produces feature films and series for global audiences.",
    "Driven by original ideas, compelling storytelling, and international collaboration, OAL creates content that connects creators, stories, and audiences across borders.",
    "From content development and original IP creation to international co-productions and production services, OAL continues to expand its slate across Asia and beyond.",
  ],
  // 3D 플립 박스: title(앞면) / desc(뒷면 설명)
  services: [
    { title: "Feature Films", desc: "극장 개봉을 목표로 한 장편영화 기획·제작" },
    { title: "Series", desc: "글로벌 시청자를 위한 드라마·시리즈 제작" },
    { title: "Content Development", desc: "원천 기획부터 시나리오까지 콘텐츠 개발" },
    { title: "Original IP", desc: "독창적인 이야기 기반 오리지널 IP 창작" },
    { title: "International Co-Productions", desc: "국가 간 협업을 통한 국제 공동제작" },
    { title: "Production Services", desc: "촬영·로케이션 등 프로덕션 전반 지원" },
  ],
};

// 5) CONTACT (연락처)
export const contact = {
  generalEmail: "2013oal@gmail.com",
  businessEmail: "2013oal@gmail.com",
  location: "Seoul, Republic of Korea",
};
