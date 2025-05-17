export interface Article {
  id: number;
  title: string;
  thumbnail: string;
  source: string;
  content: string;
  biasScore: number;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "바이든, 억만장자 대상 부유세 제안",
    thumbnail:
      "https://archivenew.vop.co.kr/images/93bc66c917350ef6bb15496c9b991bec/2022-04/1649209536_NQSOLxRX_8594.jpg",
    source: "Washington Post",
    content:
      "바이든, 억만장자 대상 부유세 제안을/를 두고 정치권의 입장이 첨예하게 갈리고 있다.",
    biasScore: -50,
  },

  {
    id: 30,
    title: "공화당, ESG 투자를 '좌파 자본주의'로 규정",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu47QzvaMCCGiQ4MFuX1zbKj5ruRs1DM9d7Q&s",
    source: "Breitbart",
    content:
      "공화당, ESG 투자를 '좌파 자본주의'로 규정은/는 미국 사회에서 논쟁의 중심에 서 있다.",
    biasScore: 90,
  },
  {
    id: 31,
    title: "의회, 초당적 인프라 법안 통과",
    thumbnail:
      "https://img.khan.co.kr/news/2021/11/07/2021110701000965400085181.jpg",
    source: "AP News",
    content:
      "의회, 초당적 인프라 법안 통과이/가 정책 이슈로 부상하며 사회적 관심을 끌고 있다.",
    biasScore: -2,
  },
  {
    id: 6,
    title: "모두를 위한 메디케어, 의회에 재도입",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkt0sNkSzZEUp-YEa_b92OoqLalQ6s0qpXA&s",
    source: "CNN",
    content:
      "모두를 위한 메디케어, 의회에 재도입을/를 두고 정치권의 입장이 첨예하게 갈리고 있다.",
    biasScore: -69,
  },
  {
    id: 7,
    title: "학자금 대출 탕감 프로그램 확대",
    thumbnail:
      "https://img2.yna.co.kr/etc/inner/KR/2024/04/06/AKR20240406004800071_01_i_P2.jpg",
    source: "CNN",
    content:
      "학자금 대출 탕감 프로그램 확대이/가 주요 이슈로 떠오르며 논란이 확산되고 있다.",
    biasScore: -68,
  },
  {
    id: 8,
    title: "시위대, 경찰 개혁 조치 촉구",
    thumbnail: "https://cdn.eroun.net/news/photo/202411/49143_93581_931.jpg",
    source: "HuffPost",
    content: "시위대, 경찰 개혁 조치 촉구을/를 둘러싼 논쟁이 뜨겁다.",
    biasScore: -86,
  },
  {
    id: 9,
    title: "성소수자 권리 지지자들, 법적 승리 환영",
    thumbnail:
      "https://cdn.news2day.co.kr/data2/content/image/2015/08/21/20150821154114.jpg",
    source: "HuffPost",
    content:
      "성소수자 권리 지지자들, 법적 승리 환영을/를 두고 정치권의 입장이 첨예하게 갈리고 있다.",
    biasScore: -80,
  },
  {
    id: 2,
    title: "기후 운동가들, 화석 연료 금지 촉구",
    thumbnail:
      "https://www.businesspost.co.kr/news/photo/202301/20230116152627_155395.jpg",
    source: "Washington Post",
    content:
      "기후 운동가들, 화석 연료 금지 촉구이/가 주요 이슈로 떠오르며 논란이 확산되고 있다.",
    biasScore: -54,
  },
  {
    id: 3,
    title: "진보 진영, 그린 뉴딜 2.0 지지 집회",
    thumbnail:
      "https://static01.nyt.com/images/2019/02/20/climate/20CLI-GREENQANDA2/merlin_150320148_72cd2424-ed91-4f7e-bcf5-94b81ba4b650-superJumbo.jpg",
    source: "CNN",
    content:
      "진보 진영, 그린 뉴딜 2.0 지지 집회에 대해 여야 간 치열한 공방이 이어지고 있다.",
    biasScore: -68,
  },
  {
    id: 10,
    title: "이민 개혁 속 ICE 폐지 요구 증가",
    thumbnail:
      "https://i0.wp.com/socialist.kr/wp_ksowebzine/wp-content/uploads/2018/08/23%ED%98%B8_%EA%B5%AD%EC%A0%9C_ice-%EC%B2%A0%ED%8F%90%ED%88%AC%EC%9F%81_2-e1534902298117.jpg?fit=1200%2C800",
    source: "New York Times",
    content:
      "이민 개혁 속 ICE 폐지 요구 증가에 대해 여야 간 치열한 공방이 이어지고 있다.",
    biasScore: -66,
  },
  {
    id: 11,
    title: "주요 주에서 유아 무상교육 프로그램 시작",
    thumbnail: "https://www.sjsori.com/news/photo/201608/21264_22687_5835.jpg",
    source: "CNN",
    content:
      "주요 주에서 유아 무상교육 프로그램 시작과 관련된 논의가 정치권에서 계속되고 있다.",
    biasScore: -66,
  },
  {
    id: 12,
    title: "투표권법 복원 법안 논의 중",
    thumbnail:
      "https://img.khan.co.kr/news/2022/01/12/l_2022011201001456100123541.jpg",
    source: "New York Times",
    content:
      "투표권법 복원 법안 논의 중은/는 미국 사회에서 논쟁의 중심에 서 있다.",
    biasScore: -69,
  },
  {
    id: 13,
    title: "노동조합, 조직화 확산 속 성장",
    thumbnail:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/7ApU/image/bGJ1MRVrM5EcBzvrclajlnswoRc.jpg",
    source: "HuffPost",
    content:
      "노동조합, 조직화 확산 속 성장과 관련된 논의가 정치권에서 계속되고 있다.",
    biasScore: -84,
  },
  {
    id: 14,
    title: "공공주택 투자 계획 발표",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdKbAdsnzoy7LtgyNjBdVrvNgrmcgTxKQXzg&s",
    source: "CNN",
    content:
      "공공주택 투자 계획 발표을/를 지지하는 여론과 반대 여론이 맞서고 있다.",
    biasScore: -65,
  },
  {
    id: 15,
    title: "바이든, 인플레이션 연설에서 기업 탐욕 비판",
    thumbnail:
      "https://img0.yna.co.kr/photo/ap/2022/06/11/PAP20220611061701009_P4.jpg",
    source: "New York Times",
    content:
      "바이든, 인플레이션 연설에서 기업 탐욕 비판을/를 둘러싼 의견 충돌이 계속되고 있다.",
    biasScore: -62,
  },
  {
    id: 16,
    title: "트럼프, 국경 장벽은 국가 안보의 핵심",
    thumbnail:
      "https://img1.newsis.com/2019/09/19/NISI20190919_0015609389_web.jpg",
    source: "New York Post",
    content:
      "트럼프, 국경 장벽은 국가 안보의 핵심이/가 주요 이슈로 떠오르며 논란이 확산되고 있다.",
    biasScore: 63,
  },
  {
    id: 17,
    title: "공화당, '깨어있는' 교육 정책 반대",
    thumbnail: "https://img.hankyung.com/photo/202503/AA.39889641.1.jpg",
    source: "Newsmax",
    content:
      "공화당, '깨어있는' 교육 정책 반대을/를 두고 정치권의 입장이 첨예하게 갈리고 있다.",
    biasScore: 100,
  },
  {
    id: 18,
    title: "총기 소유 지지자들, 새로운 총기법에 반발",
    thumbnail: "https://i.ytimg.com/vi/Paf4QqnH-18/hqdefault.jpg",
    source: "Newsmax",
    content:
      "총기 소유 지지자들, 새로운 총기법에 반발에 대한 논의가 본격화되고 있다.",
    biasScore: 80,
  },
  {
    id: 19,
    title: "비판론자들, 바이든의 '사회주의' 지출 계획 맹비난",
    thumbnail: "https://img.sbs.co.kr/newimg/news/20250418/202062617_500.jpg",
    source: "The Daily Caller",
    content:
      "비판론자들, 바이든의 '사회주의' 지출 계획 맹비난을/를 둘러싼 의견 충돌이 계속되고 있다.",
    biasScore: 77,
  },
  {
    id: 20,
    title: "보수 주들, 학교 바우처 프로그램 확대",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNuYhTRI0fGwvQristCgOqaO2SOOTSTi4Jw&s",
    source: "Breitbart",
    content:
      "보수 주들, 학교 바우처 프로그램 확대을/를 두고 정치권의 입장이 첨예하게 갈리고 있다.",
    biasScore: 96,
  },
  {
    id: 21,
    title: "공화당, 에너지 자립 추진 가속화",
    thumbnail: "https://cdn.eroun.net/news/photo/202411/48975_93317_4540.png",
    source: "New York Post",
    content: "공화당, 에너지 자립 추진 가속화에 대한 논의가 본격화되고 있다.",
    biasScore: 74,
  },
  {
    id: 22,
    title: "학부모들, 학교 내 성별 정책에 항의",
    thumbnail:
      "https://img.khan.co.kr/news/2023/06/07/rcv.YNA.20230602.PAP20230602131801009_P1.jpg",
    source: "Breitbart",
    content:
      "학부모들, 학교 내 성별 정책에 항의이/가 주요 이슈로 떠오르며 논란이 확산되고 있다.",
    biasScore: 92,
  },
  {
    id: 23,
    title: "남부 지역, 선거 신뢰성 법 강화",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OTH1MLRqg392Bduj4ycDdB7ubPIZTZ7MPQ&s",
    source: "Newsmax",
    content:
      "남부 지역, 선거 신뢰성 법 강화을/를 지지하는 여론과 반대 여론이 맞서고 있다.",
    biasScore: 88,
  },
  {
    id: 24,
    title: "보수 진영, 빅테크 검열에 반발",
    thumbnail:
      "https://image.edaily.co.kr/images/photo/files/NP/S/2024/02/PS24022700418.jpg",
    source: "The Daily Caller",
    content: "보수 진영, 빅테크 검열에 반발에 대한 논의가 본격화되고 있다.",
    biasScore: 77,
  },
  {
    id: 25,
    title: "종교 지도자들, 낙태법 반대 시위",
    thumbnail:
      "https://images.christiantoday.co.kr/data/images/full/315046/image.png",
    source: "New York Post",
    content:
      "종교 지도자들, 낙태법 반대 시위이/가 주요 이슈로 떠오르며 논란이 확산되고 있다.",
    biasScore: 66,
  },
  {
    id: 26,
    title: "비판론자들, 다양성 정책이 군 전투력 약화시킨다고 주장",
    thumbnail:
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202502/06/802b09ff-2124-4b51-acc5-33e728b46ac6.jpg",
    source: "New York Post",
    content:
      "비판론자들, 다양성 정책이 군 전투력 약화시킨다고 주장과 관련된 논의가 정치권에서 계속되고 있다.",
    biasScore: 65,
  },
  {
    id: 27,
    title: "헌터 바이든 조사 확대",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRfck2Oz28gJrWhRomHrY2k5z2hSmy8NJiQ&s",
    source: "Fox News",
    content:
      "헌터 바이든 조사 확대에 대해 여야 간 치열한 공방이 이어지고 있다.",
    biasScore: 79,
  },
  {
    id: 4,
    title: "민주당, 전국적인 총기 규제 개혁 촉구",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhxAvkb2ikYML3D-Z2MX68fVEfDQgsj5p3g&s",
    source: "HuffPost",
    content:
      "민주당, 전국적인 총기 규제 개혁 촉구을/를 두고 정치권의 입장이 첨예하게 갈리고 있다.",
    biasScore: -79,
  },
  {
    id: 5,
    title: "최저임금 인상, 상원에서 지지 얻어",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGvr9-cscoCMGqKFpYMftmC892TqLQIffug&s",
    source: "HuffPost",
    content:
      "최저임금 인상, 상원에서 지지 얻어과 관련된 논의가 정치권에서 계속되고 있다.",
    biasScore: -82,
  },
  {
    id: 28,
    title: "국경 위기 심화, 공화당 조치 촉구",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3RMvjnYCYTWTNimo1J4hyqzrgBGcEoCcTQ&s",
    source: "Breitbart",
    content: "국경 위기 심화, 공화당 조치 촉구에 대한 논의가 본격화되고 있다.",
    biasScore: 94,
  },
  {
    id: 29,
    title: "플로리다, 공교육에서 비판적 인종이론(CRT) 금지",
    thumbnail:
      "https://img6.yna.co.kr/etc/inner/KR/2022/01/21/AKR20220121003500071_01_i_P2.jpg",
    source: "New York Post",
    content:
      "플로리다, 공교육에서 비판적 인종이론(CRT) 금지이/가 정책 이슈로 부상하며 사회적 관심을 끌고 있다.",
    biasScore: 79,
  },

  {
    id: 32,
    title: "대법원, 기술 기업의 표현의 자유 심리 중",
    thumbnail:
      "https://img6.yna.co.kr/etc/inner/KR/2024/03/19/AKR20240319072800009_01_i_P2.jpg",
    source: "PBS",
    content:
      "대법원, 기술 기업의 표현의 자유 심리 중과 관련된 논의가 정치권에서 계속되고 있다.",
    biasScore: -3,
  },
  {
    id: 33,
    title: "실업률 3.8%로 하락",
    thumbnail:
      "https://ojsfile.ohmynews.com/CT_T_IMG/2019/0504/IE002492740_LT.jpg",
    source: "PBS",
    content: "실업률 3.8%로 하락에 대해 여야 간 치열한 공방이 이어지고 있다.",
    biasScore: 2,
  },
  {
    id: 34,
    title: "연준, 금리 동결 신호",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMCZGofF7jBksP7jRH2yp2ZcTmXyKSbkxRQ&s",
    source: "Wall Street Journal",
    content:
      "연준, 금리 동결 신호이/가 주요 이슈로 떠오르며 논란이 확산되고 있다.",
    biasScore: -8,
  },
  {
    id: 35,
    title: "미중 외교 회담 재개",
    thumbnail:
      "https://flexible.img.hani.co.kr/flexible/normal/970/646/imgdb/original/2025/0515/20250515503927.jpg",
    source: "PBS",
    content:
      "미중 외교 회담 재개이/가 주요 이슈로 떠오르며 논란이 확산되고 있다.",
    biasScore: 5,
  },
  {
    id: 36,
    title: "상원, 연준 의장 인준",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Mub5Kal0bjUs13pQDslFXuqaQm_cETbf-Q&s",
    source: "Wall Street Journal",
    content:
      "상원, 연준 의장 인준을/를 두고 정치권의 입장이 첨예하게 갈리고 있다.",
    biasScore: -10,
  },
];
