// ─────────────────────────────────────────────────────────────
// 작품 데이터 — 이 파일이 모든 작품의 "단일 소스"입니다.
//
// 관리 방법
//  • 추가:    아래 works 배열에 객체를 하나 더 넣으세요.
//  • 수정:    해당 작품의 값을 고치세요.
//  • 숨기기:  hidden: true  → 홈/목록/상세에서 모두 숨겨집니다.
//  • 홈 노출: featured: true → 홈 "FEATURED WORKS"에 노출됩니다.
//  • 순서:    이 배열에 적힌 순서대로 화면에 표시됩니다. (위 = 먼저)
//
// 수정 후에는 git push → Vercel 자동 배포(약 1~2분)로 반영됩니다.
// ─────────────────────────────────────────────────────────────

export type Work = {
  slug: string;          // URL 주소 (/works/슬러그) — 영문 소문자, 띄어쓰기 대신 -
  categoryKr: string;
  categoryEn: string;
  titleKr: string;
  titleEn: string;
  year: string;
  releaseDate?: string;
  genreKr: string;
  genreEn: string;
  synopsisKr: string;
  synopsisEn: string;
  directorKr: string;
  directorEn: string;
  castKr: string;
  castEn: string;
  poster: string;        // 포스터 경로 (public 폴더 기준)
  trailer?: string;      // 로컬 mp4 경로
  vimeoId?: string;      // Vimeo 예고편 ID
  stills: string[];      // 스틸컷 경로 목록
  featured: boolean;     // 홈 FEATURED WORKS 노출 여부
  hidden: boolean;       // true면 사이트 전체에서 숨김
};

export const works: Work[] = [
  {
    slug: "ok-madam-2",
    categoryKr: "장편영화",
    categoryEn: "FEATURE FILM",
    titleKr: "오케이 마담 2",
    titleEn: "OK! MADAM: BON VOYAGE",
    year: "2026",
    releaseDate: "2026.08.12 개봉 예정",
    genreKr: "가족 액션 코미디",
    genreEn: "Family Action Comedy",
    synopsisKr:
      "초호화 크루즈 여행을 떠난 전직 레전드 요원 미영과 가족들이 푸른 바다 한가운데서 크루즈 납치 사건에 휘말리며 벌어지는 코믹 액션.",
    synopsisEn:
      "Former legendary agent Mi-young and her family set out on a luxury cruise, only to become caught in a hijacking in the middle of the open sea.",
    directorKr: "이철하",
    directorEn: "Lee Cheol-ha",
    castKr: "엄정화 · 박성웅 · 박진주 · 려운 · 최수영 · 이상윤 · 배정남",
    castEn:
      "Uhm Jung-hwa · Park Sung-woong · Park Jin-joo · Ryeoun · Choi Soo-young · Lee Sang-yoon · Bae Jung-nam",
    poster: "/posters/ok-madam-2-poster.jpeg",
    trailer: "/videos/ok-madam-2-trailer.mp4",
    vimeoId: "1212716915",
    stills: [],
    featured: true,
    hidden: false,
  },
  {
    slug: "i-kill-u",
    categoryKr: "시리즈 / 장편영화",
    categoryEn: "SERIES / FEATURE FILM",
    titleKr: "아이 킬 유",
    titleEn: "I KILL U",
    year: "2025",
    genreKr: "하드보일드 액션 스릴러",
    genreEn: "Hard-boiled Action Thriller",
    synopsisKr:
      "태권도 유망주였던 강선우는 병원에 입원한 어머니의 치료비를 마련하기 위해 힘겨운 삶을 이어간다. 어느 날 자신과 똑같이 생긴 재벌가 후계자 한지연의 대역이 된 그녀는 거대한 음모와 권력 다툼의 중심에 휘말리게 되고, 살아남기 위한 위험한 싸움을 시작한다.",
    synopsisEn:
      "Former taekwondo prodigy Kang Sun-woo struggles to support her hospitalized mother until she is recruited to impersonate Han Ji-yeon, the heiress of a powerful conglomerate. Drawn into a dangerous web of conspiracy and succession battles, she must fight to survive and uncover the truth.",
    directorKr: "유하",
    directorEn: "Yoo Ha",
    castKr: "강지영 · 이기광 · 엄태웅",
    castEn: "Kang Ji-young · Lee Gi-kwang · Uhm Tae-woong",
    poster: "/posters/i-kill-u-poster.jpg",
    vimeoId: "1203226433",
    stills: [
      "/stills/i-kill-u-01.jpg",
      "/stills/i-kill-u-02.jpg",
      "/stills/i-kill-u-03.jpg",
      "/stills/i-kill-u-04.jpg",
    ],
    featured: true,
    hidden: false,
  },
  {
    slug: "livestream",
    categoryKr: "장편영화",
    categoryEn: "FEATURE FILM",
    titleKr: "라방",
    titleEn: "LIVESTREAM",
    year: "2023",
    genreKr: "범죄 스릴러",
    genreEn: "Crime Thriller",
    synopsisKr:
      "프리랜서 방송 PD 동주는 여자친구 수진의 생일을 준비하던 중 의문의 링크를 받는다. 링크가 열리자 불법 생방송 화면에 의식을 잃은 수진이 나타난다. 동주는 수진을 구하기 위해 방송에 접속하고, ‘젠틀맨’이라 불리는 정체불명의 진행자와 맞선다.",
    synopsisEn:
      "Freelance TV producer Dong-ju is planning a birthday surprise for his girlfriend, Su-jin, when a mysterious link arrives. It leads to an illegal livestream where he sees her unconscious. To save her, he enters the livestream and confronts its host, a man known only as the Gentleman.",
    directorKr: "최주연",
    directorEn: "Choi Ju-yeon",
    castKr: "박성웅 · 박선호 · 김희정",
    castEn: "Park Sung-woong · Park Sun-ho · Kim Hee-jung",
    poster: "/posters/livestream-poster.jpg",
    vimeoId: "1203226434",
    stills: [
      "/stills/livestream-01.jpg",
      "/stills/livestream-02.jpg",
      "/stills/livestream-03.jpg",
      "/stills/livestream-04.jpg",
    ],
    featured: true,
    hidden: false,
  },
  {
    slug: "diva",
    categoryKr: "장편영화",
    categoryEn: "FEATURE FILM",
    titleKr: "디바",
    titleEn: "DIVA",
    year: "2020",
    genreKr: "미스터리 스릴러",
    genreEn: "Mystery Thriller",
    synopsisKr:
      "다이빙계 최고의 스타 이영은 의문의 사고 이후 기억을 잃는다. 사고의 진실을 추적하던 그녀는 가장 가까웠던 친구 수진과 자신을 둘러싼 충격적인 비밀에 직면하게 된다.",
    synopsisEn:
      "After a mysterious accident leaves champion diver Lee Young with fragmented memories, she begins uncovering disturbing truths surrounding her closest friend and rival, Soo-jin.",
    directorKr: "조슬예",
    directorEn: "Jo Seul-ye",
    castKr: "신민아 · 이유영",
    castEn: "Shin Min-a · Lee You-young",
    poster: "/posters/diva-poster.jpg",
    vimeoId: "1203226435",
    stills: [
      "/stills/diva-01.jpg",
      "/stills/diva-02.jpg",
      "/stills/diva-03.jpg",
      "/stills/diva-04.jpg",
    ],
    featured: true,
    hidden: false,
  },
  {
    slug: "ok-madam",
    categoryKr: "장편영화",
    categoryEn: "FEATURE FILM",
    titleKr: "오케이 마담",
    titleEn: "OK! MADAM",
    year: "2020",
    genreKr: "가족 액션 코미디",
    genreEn: "Family Action Comedy",
    synopsisKr:
      "생애 첫 해외여행을 떠난 꽈배기집 사장 미영과 남편 석환. 하와이행 비행기 안에서 정체불명의 테러 사건이 발생하자, 평범한 주부로 보였던 미영은 숨겨왔던 특별한 능력을 드러내며 승객들을 구하기 위한 작전에 나선다.",
    synopsisEn:
      "During her first overseas trip, Mi-young, a seemingly ordinary doughnut shop owner, finds herself aboard a hijacked flight bound for Hawaii. As chaos erupts in the air, she reveals a hidden past and takes matters into her own hands to save the passengers.",
    directorKr: "이철하",
    directorEn: "Lee Cheol-ha",
    castKr: "엄정화 · 박성웅 · 이상윤 · 배정남",
    castEn: "Uhm Jung-hwa · Park Sung-woong · Lee Sang-yoon · Bae Jung-nam",
    poster: "/posters/ok-madam-poster.jpg",
    vimeoId: "1203226958",
    stills: [
      "/stills/ok-madam-01.jpg",
      "/stills/ok-madam-02.jpg",
      "/stills/ok-madam-03.jpg",
      "/stills/ok-madam-04.jpg",
    ],
    featured: true,
    hidden: false,
  },
  {
    slug: "insane",
    categoryKr: "장편영화",
    categoryEn: "FEATURE FILM",
    titleKr: "날, 보러와요",
    titleEn: "INSANE",
    year: "2016",
    genreKr: "미스터리 스릴러",
    genreEn: "Mystery Thriller",
    synopsisKr:
      "정신병동 감금 106일째 난 미치지 않았어요… 대낮 도심 한복판, 강수아(강예원)는 이유도 모른 채 정신병원에 강제이송, 감금된다. 강제 약물 투여와 무자비한 폭력 속에 시달리던 수아는 이 곳에서의 끔직한 일들을 세세하게 기록하기 시작한다. 합법적 감금. 그 이면의 충격적 사실 누가, 왜, 그녀를 가두었는가? 그로부터 일년 뒤, 시사프로 ‘추적24시’ 나남수(이상윤)PD에게 수첩이 배달된다. 나PD는 믿기 힘든 사건들이 기록된 이 수첩의 진실을 밝히고자 강수아를 찾아갔지만, 그녀는 현재 살인사건 용의자로 수감되어 있다. 취재를 거듭할수록 드러나는 충격적 사실들!!! 과연 무엇이 진실이고 무엇이 거짓일까?",
    synopsisEn:
      "Kang Su-a is taken off a city street in broad daylight and locked in a psychiatric hospital, where she begins documenting the abuse she endures. A year later, investigative TV producer Na Nam-soo receives her notebook. When he tracks her down, she is the sole survivor of the hospital fire and is in custody on suspicion of murder.",
    directorKr: "이철하",
    directorEn: "Lee Cheol-ha",
    castKr: "강예원 · 이상윤",
    castEn: "Kang Ye-won · Lee Sang-yoon",
    poster: "/posters/insane-poster.jpg",
    vimeoId: "1203226436",
    stills: [
      "/stills/insane-01.jpg",
      "/stills/insane-02.jpg",
      "/stills/insane-03.jpg",
      "/stills/insane-04.jpg",
    ],
    featured: true,
    hidden: false,
  },
];

// 사이트에 보이는(숨김 아님) 모든 작품
export const visibleWorks = (): Work[] => works.filter((w) => !w.hidden);

// 홈 FEATURED WORKS에 노출할 작품
export const featuredWorks = (): Work[] =>
  works.filter((w) => w.featured && !w.hidden);

// slug로 작품 하나 찾기 (숨김이면 undefined)
export const getWork = (slug: string): Work | undefined =>
  works.find((w) => w.slug === slug && !w.hidden);
