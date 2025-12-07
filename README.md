# MediX 공식 홈페이지

의료와 일상을 연결하는 정량화 중심 AI 기업 MediX의 공식 홈페이지입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Deployment**: Vercel (권장)

## 시작하기

### 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 프로젝트 구조

```
MediX/
├── app/                    # Next.js App Router 페이지
│   ├── about/             # About MediX 페이지
│   ├── research/           # Research Division 페이지
│   │   ├── sonocube/      # SonoCube 상세 페이지
│   │   ├── ventriculab/   # VentricuLab 상세 페이지
│   │   └── axissight/     # AxisSight 상세 페이지
│   ├── service/            # Service Division 페이지
│   │   └── skincoach/     # SkinCoach 페이지
│   ├── resources/          # Resources 페이지
│   ├── contact/            # Contact 페이지
│   ├── layout.tsx          # 전역 레이아웃
│   └── page.tsx            # 메인 페이지
├── components/             # React 컴포넌트
│   ├── Navigation.tsx     # 네비게이션 바
│   ├── Footer.tsx          # 푸터
│   ├── home/               # 홈페이지 컴포넌트
│   ├── research/           # Research 섹션 컴포넌트
│   ├── service/            # Service 섹션 컴포넌트
│   ├── about/              # About 섹션 컴포넌트
│   ├── resources/          # Resources 섹션 컴포넌트
│   └── contact/            # Contact 섹션 컴포넌트
└── public/                 # 정적 파일 (이미지, 아이콘 등)
```

## 브랜드 색상

- **Deep Navy**: `#0E1A35` - 의료·정확성
- **Mint/Teal Accent**: `#1BC6B4` - 혁신·기술
- **White**: `#FFFFFF` - 깔끔한 정보 전달

## 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 부드러운 애니메이션 (Framer Motion)
- ✅ SEO 최적화
- ✅ 접근성 고려
- ✅ 세련되고 깔끔한 UI/UX 디자인

## 환경 변수 설정

`.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```bash
# SkinCoach 외부 링크
NEXT_PUBLIC_SKINCOACH_URL=https://your-skincoach-url.com

# Contact 폼 이메일 전송 설정 (Resend 사용)
RESEND_API_KEY=re_xxxxxxxxxxxxx  # Resend API 키
CONTACT_EMAIL=your-email@example.com  # 문의를 받을 이메일 주소
RESEND_FROM_EMAIL=MediX Contact <onboarding@resend.dev>  # (선택) 발신자 이메일
```

### Resend 설정 방법

1. [Resend](https://resend.com)에 가입
2. API 키 생성
3. `.env.local`에 `RESEND_API_KEY` 추가
4. 받을 이메일 주소를 `CONTACT_EMAIL`에 설정

**참고**: Resend 무료 티어는 월 3,000개 이메일까지 전송 가능합니다.

### 대안: FormSubmit 사용 (더 간단한 방법)

Resend 설정이 복잡하다면, ContactForm 컴포넌트를 수정하여 FormSubmit을 사용할 수도 있습니다:

```tsx
// components/contact/ContactForm.tsx의 form 태그에 action 추가
<form action="https://formsubmit.co/your-email@example.com" method="POST">
```

이 방법은 별도 API 키 없이 바로 사용 가능합니다.

## 배포

### Vercel 배포

1. GitHub에 레포지토리 푸시
2. [Vercel](https://vercel.com)에 프로젝트 연결
3. 자동 배포 완료

### 수동 배포

```bash
npm run build
npm start
```

## 라이선스

© 2026 MediX. All rights reserved.

