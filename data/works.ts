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
  awards?: { kr: string; en: string }[];
  festivalSelections?: { kr: string; en: string }[];
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
      "사춘기 딸과의 전쟁, 허세 충만 백수 남편, 꽈배기집 폐업 위기까지. 지긋지긋한 현생을 견뎌오던 미영에게 초호화 크루즈 결혼식 초대장이 도착한다. “우리, 진짜 여행 가자!” 화려한 크루즈 여행을 만끽하던 것도 잠시. 범죄 조직의 리더 안야의 등장에 수백명이 탑승한 크루즈는 순식간에 사상 초유의 납치 사건 현장이 되어버린다. 도망칠 곳 없는 푸른 바다 한복판, 다시 한번 각성한 전직 레전드 요원 미영은 이제 가족을 구하고 세상을 지켜야 할 위험한 작전에 뛰어든다!",
    synopsisEn:
      "Between clashing with her teenage daughter, putting up with her unemployed, all-talk husband, and trying to keep her twisted doughnut shop afloat, Mi-young has had enough. Then an invitation arrives for a wedding aboard a luxury cruise ship. “Let’s go on a real vacation!” The family is barely settled into life on board when crime boss Anya shows up and the ship, with hundreds of people aboard, is suddenly hijacked. With nowhere to run in the middle of the ocean, the once-legendary agent Mi-young is back in action on a dangerous mission to save her family and protect the world.",
    festivalSelections: [
      {
        kr: "2026 제8회 대전특수영상영화제 · 개막작",
        en: "2026 Daejeon Special Visual Effects Film Festival (DFX) · Opening Film",
      },
    ],
    directorKr: "이철하",
    directorEn: "Lee Cheol-ha",
    castKr: "엄정화 · 박성웅 · 박진주 · 려운 · 최수영 · 이상윤 · 배정남",
    castEn:
      "Uhm Jung-hwa · Park Sung-woong · Park Jin-joo · Ryeoun · Choi Soo-young · Lee Sang-yoon · Bae Jung-nam",
    poster: "/posters/ok-madam-2-poster.jpeg",
    trailer: "/videos/ok-madam-2-trailer.mp4",
    vimeoId: "1212716915",
    stills: [
      "/stills/ok-madam-2-01.webp",
      "/stills/ok-madam-2-02.webp",
      "/stills/ok-madam-2-03.webp",
      "/stills/ok-madam-2-04.webp",
    ],
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
    awards: [
      {
        kr: "2025 제29회 부천국제판타스틱영화제 · 멜리에스국제영화제연맹(MIFF) 아시아 영화상",
        en: "2025 29th Bucheon International Fantastic Film Festival (BIFAN) · Méliès International Festivals Federation (MIFF) Award for Best Asian Film",
      },
    ],
    festivalSelections: [
      {
        kr: "2025 제29회 부천국제판타스틱영화제 · 아드레날린 라이드, 월드 프리미어",
        en: "2025 Bucheon International Fantastic Film Festival (BIFAN) · Adrenaline Ride, World Premiere",
      },
    ],
    directorKr: "유하",
    directorEn: "Yoo Ha",
    castKr: "강지영 · 이기광 · 엄태웅",
    castEn: "Kang Ji-young · Lee Gi-kwang · Uhm Tae-woong",
    poster: "/posters/i-kill-u-main-poster.webp",
    vimeoId: "1203226433",
    stills: [
      "/stills/i-kill-u-01.jpg",
      "/stills/i-kill-u-02.jpg",
      "/stills/i-kill-u-03.jpg",
      "/stills/i-kill-u-04.jpg",
      "/posters/i-kill-u-poster.jpg",
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
      "“내 여자친구가 인터넷 몰카 라이브 방송에 나온다?!” 대기업 취업도 쉽지 않고 친구가 보낸 불법 몰카 라이브 방송 링크를 여자친구 수진에게 들켜 헤어질 위기에 처한 프리랜서 PD ‘동주’. 수진의 생일날 이벤트를 준비하던 중 의문의 라이브 방송 링크가 전송되고 링크가 자동으로 열리는데… “아이디 486번 고객님이 입장되었습니다” 실시간으로 시작되는 몰카 라이브 방송! 그런데 모니터를 통해 여자친구 ‘수진’이 나타나고 동주는 충격에 빠지게 된다. 정체불명의 ‘젠틀맨’과 정신을 잃은 ‘수진’, ‘동주’는 사랑하는 수진을 구하기 위해 라이브 방송에 참여하기 시작하지만 ‘젠틀맨’은 라이브 방송을 점점 최악의 상황으로 끌고 가는데… 1분 1초를 다투는 숨 막히는 실시간 라이브 추격전이 시작된다!",
    synopsisEn:
      "“Is that my girlfriend on a hidden-camera livestream?!” Freelance TV producer Dong-ju is struggling to land a job at a major company. Then his girlfriend Su-jin discovers a link a friend sent him to an illegal hidden-camera livestream, and the couple is on the verge of breaking up. On Su-jin’s birthday, Dong-ju is getting a surprise ready for her when a mysterious link arrives and opens by itself. “User 486 has joined.” A hidden-camera feed goes live. To his horror, Su-jin is on screen, unconscious. Dong-ju joins the livestream to save her, but the mysterious host, known as the Gentleman, keeps escalating the situation. The chase unfolds live, and every second counts.",
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
    awards: [
      {
        kr: "2021 제41회 황금촬영상영화제 · 조명상 (조규영)",
        en: "2021 41st Golden Cinematography Awards · Best Lighting (Cho Gyu-yeong)",
      },
    ],
    festivalSelections: [
      {
        kr: "2021 제39회 브뤼셀 국제판타스틱영화제 · 비경쟁 부문",
        en: "2021 Brussels International Fantastic Film Festival (BIFFF) · Out of Competition",
      },
      {
        kr: "2021 제25회 부천국제판타스틱영화제 · 코리안 판타스틱: 장편",
        en: "2021 Bucheon International Fantastic Film Festival (BIFAN) · Korean Fantastic: Features",
      },
    ],
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
    awards: [
      {
        kr: "2021 스위스 뇌샤텔 국제판타스틱영화제 · 아시아 영화 관객상",
        en: "2021 Neuchâtel International Fantastic Film Festival (Switzerland) · Audience Award for Best Asian Film",
      },
    ],
    festivalSelections: [
      {
        kr: "2020 제15회 파리한국영화제 · 개막작",
        en: "2020 Festival du Film Coréen à Paris (FFCP) · Opening Film",
      },
      {
        kr: "2021 제23회 우디네 극동영화제",
        en: "2021 Udine Far East Film Festival (FEFF)",
      },
      {
        kr: "2021 스위스 뇌샤텔 국제판타스틱영화제 · 아시아의 새로운 영화 부문",
        en: "2021 Neuchâtel International Fantastic Film Festival (NIFFF) · New Cinema from Asia",
      },
      {
        kr: "2021 캐나다 이탈리아현대영화제 · 한국영화의 날",
        en: "2021 Italian Contemporary Film Festival (ICFF), Canada · Korean Film Day",
      },
      {
        kr: "2021 스웨덴 아시아영화제",
        en: "2021 Asian Film Festival (Asiatiska Filmfestivalen), Sweden",
      },
    ],
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
      "Day 106 in the psychiatric ward. “I’m not insane…” In broad daylight on a city street, Kang Su-a (Kang Ye-won) is forcibly taken to a psychiatric hospital and locked up without being told why. Subjected to forced medication and brutal violence, she begins keeping a detailed record of what happens inside. Her confinement is legal. Who locked her up, and why? A year later, Na Nam-soo (Lee Sang-yoon), a producer for the investigative TV program Tracking 24, receives her notebook. Troubled by what he reads, he tracks Su-a down to find out what happened. By then, she is in custody on suspicion of murder. As his investigation deepens, disturbing new details emerge. What is true, and what is a lie?",
    awards: [
      {
        kr: "2016 제17회 올해의 여성영화인상 · 제작자상",
        en: "2016 17th Women in Film Korea Awards · Producer Award",
      },
      {
        kr: "2016 한국영화를 빛낸 스타상 · 인기상 (강예원)",
        en: "2016 Korean Film Star Awards · Popularity Award (Kang Ye-won)",
      },
    ],
    festivalSelections: [
      {
        kr: "2016 제20회 부천국제판타스틱영화제 · 코리안 판타스틱: 장편",
        en: "2016 Bucheon International Fantastic Film Festival (BIFAN) · Korean Fantastic: Features",
      },
    ],
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
  {
    slug: "i-eat-therefore-i-am",
    categoryKr: "웹드라마 · 10부작",
    categoryEn: "WEB SERIES · 10 EPISODES",
    titleKr: "먹는 존재",
    titleEn: "I EAT, THEREFORE I AM",
    year: "2015",
    genreKr: "코미디 드라마",
    genreEn: "Comedy Drama",
    synopsisKr: "프리랜서 작가를 꿈꾸는 유양은 아르바이트를 전전하면서도 끼니만은 거르지 않는다. 엉뚱하고 순수한 박병과 가까워지면서, 유양의 일상에 예기치 않은 연애가 찾아온다. 들개이빨의 동명 웹툰을 바탕으로, 두 사람의 일과 사랑, 먹고사는 문제를 유쾌하게 그린다.",
    synopsisEn: "Aspiring freelance writer Yoo Yang scrapes by on part-time jobs, but she never skips a meal. When she grows close to the endearingly eccentric Park Byeong, romance takes her by surprise. Adapted from Deulgae Ippal’s webtoon of the same name, this comedy follows two young people as they fall in love and try to make a living.",
    festivalSelections: [
      {
        kr: "2016 제31회 산타바바라 국제영화제 · 스크린 퀴진, 미국 프리미어",
        en: "2016 Santa Barbara International Film Festival (SBIFF) · Screen Cuisine, U.S. Premiere",
      },
    ],
    directorKr: "이철하",
    directorEn: "Lee Cheol-ha",
    castKr: "안영미 · 노민우 · 유소영 · 이병헌",
    castEn: "Ahn Young-mi · Noh Min-woo · Yoo So-young · Lee Byoung-heon",
    poster: "/posters/i-eat-therefore-i-am-green-poster.webp",
    stills: [
      "/stills/i-eat-therefore-i-am-01.webp",
      "/stills/i-eat-therefore-i-am-02.webp",
      "/stills/i-eat-therefore-i-am-03.webp",
      "/stills/i-eat-therefore-i-am-04.webp",
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
