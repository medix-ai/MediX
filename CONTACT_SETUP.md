# Contact 폼 설정 가이드

Contact 폼에서 제출된 문의는 **이메일로 자동 전송**됩니다.

## 📧 이메일을 받는 방법

### 방법 1: Resend 사용 (권장)

1. **Resend 가입 및 API 키 발급**
   - [Resend](https://resend.com)에 가입
   - Dashboard → API Keys에서 새 API 키 생성
   - 무료 티어: 월 3,000개 이메일 전송 가능

2. **환경 변수 설정**
   - 프로젝트 루트에 `.env.local` 파일 생성
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=your-email@example.com
   ```

3. **테스트**
   - Contact 폼에서 문의 제출
   - 설정한 이메일 주소로 문의 내용이 전송됨

### 방법 2: FormSubmit 사용 (더 간단)

Resend 설정이 복잡하다면 FormSubmit을 사용할 수 있습니다:

1. `components/contact/ContactForm.tsx` 수정:
   ```tsx
   <form 
     action="https://formsubmit.co/your-email@example.com" 
     method="POST"
     onSubmit={handleSubmit}
   >
   ```

2. API Route는 사용하지 않음 (FormSubmit이 직접 처리)

### 방법 3: Google Sheets 연동 (선택사항)

문의를 스프레드시트로 저장하려면 Google Sheets API를 연동할 수 있습니다.

## 📬 받는 이메일 형식

문의가 제출되면 다음과 같은 형식으로 이메일이 전송됩니다:

```
새로운 문의가 접수되었습니다.

문의 유형: PoC 문의
이름: 홍길동
이메일: hong@example.com
소속 기관/회사: 서울대학교병원
문의 내용:
SonoCube PoC를 진행하고 싶습니다.
...
```

**답장하기**: 이메일의 Reply 버튼을 누르면 문의자의 이메일로 직접 답장할 수 있습니다.

## 🔧 문제 해결

### 이메일이 오지 않을 때

1. **환경 변수 확인**
   - `.env.local` 파일이 프로젝트 루트에 있는지 확인
   - 개발 서버 재시작 (`npm run dev`)

2. **Resend API 키 확인**
   - Resend Dashboard에서 API 키가 활성화되어 있는지 확인

3. **스팸함 확인**
   - 이메일이 스팸함에 들어갔을 수 있습니다

4. **콘솔 로그 확인**
   - 브라우저 개발자 도구 → Network 탭에서 `/api/contact` 요청 확인
   - 서버 콘솔에서 에러 메시지 확인

## 🚀 프로덕션 배포 시

Vercel에 배포할 때:

1. Vercel Dashboard → Settings → Environment Variables
2. 다음 변수 추가:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `RESEND_FROM_EMAIL` (선택)

3. 도메인 인증 (선택사항)
   - Resend에서 본인 도메인 인증 후 `RESEND_FROM_EMAIL`에 설정
   - 예: `MediX Contact <contact@medix.com>`

