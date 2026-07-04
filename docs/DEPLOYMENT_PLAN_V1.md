# 배포 계획서 V1 — 청년동 도서대여 관리

작성일: 2026-07-05
목표: 실제 운영자가 매일 쓰는 서비스로 **완전 배포**하기 위한 전체 체크리스트.
연계 문서: [BOOK_RENTAL_ROADMAP_V2.md](BOOK_RENTAL_ROADMAP_V2.md) (기능 로드맵), [DESIGN_REFERENCE_GUIDE.md](DESIGN_REFERENCE_GUIDE.md) (디자인)

---

## 0. 배포 전략 결정

**2단계 배포를 권장한다.**

| 단계 | 내용 | 시점 |
|---|---|---|
| 배포 1차 (Soft Launch) | 현재 Sheets/Apps Script 버전을 그대로 Vercel에 배포, 내부 운영자만 사용 | 즉시 가능 |
| 배포 2차 (정식) | Supabase 마이그레이션 + 인증 + 디자인 리뉴얼 완료 후 | ROADMAP V2 PHASE B~C-1 완료 후 |

이유: 지금 버전도 동작하므로 먼저 실사용 피드백을 받고, 마이그레이션은 뒤에서 병행한다. 카메라 바코드 스캔은 **HTTPS 필수**라서 로컬(localhost 제외)이나 http 환경에서는 동작하지 않는다 → 배포 자체가 스캔 기능 테스트의 전제조건이기도 하다.

---

## 1. 호스팅: Vercel (권장)

Next.js 16 App Router 기준 가장 마찰이 적다. 무료(Hobby) 플랜으로 시작 가능.

### 1.1 셋업 절차

1. Vercel 계정 생성 → GitHub `ddddei/book_rental_api` 연결
2. Framework Preset: Next.js (자동 감지), Build Command: `npm run build`
3. 환경변수 등록 (아래 §2)
4. `main` 브랜치 = Production, PR = Preview 배포 자동 생성
5. 배포 후 기본 도메인(`*.vercel.app`) 확인 → 필요 시 커스텀 도메인 연결

### 1.2 Vercel 대안 (참고)

- **Cloudflare Pages**: 무료 트래픽 넉넉, 단 Next.js 호환성 이슈 가능
- 자체 서버/공공기관 서버: 운영 부담 커서 비권장

---

## 2. 환경변수 관리

| 변수 | 단계 | 비고 |
|---|---|---|
| `APPS_SCRIPT_WEB_APP_URL` | 1차 | 서버 전용. 절대 `NEXT_PUBLIC_` 접두사 붙이지 말 것 |
| `NEXT_PUBLIC_SUPABASE_URL` | 2차 | 공개 가능 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 2차 | 공개 가능 (RLS가 방어선) |
| `SUPABASE_SERVICE_ROLE_KEY` | 2차 | **서버 전용, 유출 시 전체 DB 노출.** Route Handler에서만 사용 |

규칙:
- `.env.local`은 git에 절대 커밋 금지 (`.gitignore` 확인)
- `.env.example` 파일을 만들어 필요한 변수명만 나열 (값 없이) → 커밋
- Vercel의 Production / Preview 환경변수를 분리 (Preview는 테스트용 시트/DB를 바라보게)

---

## 3. 보안 체크리스트

### 배포 1차 (최소 방어)

- [ ] Apps Script URL이 클라이언트 번들에 노출되지 않는지 확인 (`NEXT_PUBLIC_` 미사용 확인)
- [ ] **접근 제한**: 인증이 없으므로 URL 유출 시 누구나 대여/반납 가능. 최소한 다음 중 하나 적용:
  - Vercel Deployment Protection (Password Protection — Pro 플랜) 또는
  - 간단한 접근 코드(운영자 PIN) 미들웨어 — 임시방편임을 인지
  - 또는 "내부 공유 금지 URL"로 운영하고 2차에서 인증 도입
- [ ] Apps Script Web App 배포 설정 확인: "Anyone" 실행이면 시트 원본 권한은 별도임을 확인
- [ ] 개인정보(이름/전화번호)를 다루므로: 도서 목록 API가 대여자 전화번호를 프론트로 내려보내는지 점검 → **목록 응답에서 phone 제거 또는 마스킹(010-****-1234)**

### 배포 2차 (정식)

- [ ] Supabase Auth 이메일 로그인, 쓰기 작업은 authenticated 전용 RLS
- [ ] `SUPABASE_SERVICE_ROLE_KEY`는 서버 코드에서만 import되는지 검증
- [ ] rate limiting 검토 (Vercel/미들웨어 수준, 소규모라 우선순위 낮음)
- [ ] 개인정보 보관 정책: 반납 후 N개월 지난 대여 이력의 전화번호 파기 규칙 결정

---

## 4. 배포 전 QA 체크리스트 (수동 테스트 시나리오)

실기기 포함 필수. **모바일(iOS Safari, Android Chrome) + 데스크톱 Chrome** 3환경에서 실행.

### 핵심 흐름
- [ ] 도서 목록 로드, 검색, 상태 필터(전체/대여가능/대여중/연체), 더보기
- [ ] 회원 대여: 회원 선택 → 이름/전화 입력 → 도서 선택 → 등록 → 목록에 반영
- [ ] 비회원 대여: 동일 흐름
- [ ] 바코드 스캔: 카메라 권한 요청 → CNDB 코드 인식 → 도서 자동 선택 (**HTTPS 배포 환경에서만 테스트 가능**)
- [ ] 잘못된 바코드(CNDB 미접두) 입력 시 한국어 에러 노출
- [ ] 반납: 목록에서 반납 처리 → 상태 즉시 갱신
- [ ] 빠른 반납: 최근 대여 목록에서 반납
- [ ] 이미 대여 중인 책 재대여 시도 → 차단 및 에러 메시지

### 경계/이상 케이스
- [ ] Apps Script 응답 지연/실패 시 에러 메시지 노출 (시트 URL 임시 변경으로 재현)
- [ ] 반납예정일이 오늘인 책 → "오늘 반납 예정" 통계 카운트 정확성
- [ ] 연체 판정: dueDate가 어제인 책이 연체로 표시
- [ ] 전화번호에 하이픈/공백 입력 → 정상 처리 (normalizePhone)
- [ ] 빈 검색 결과 화면
- [ ] 모바일 세로/가로 회전 시 레이아웃

### 빌드/품질 게이트
- [ ] `npm run lint` 통과
- [ ] `npm run build` 성공
- [ ] (ROADMAP A-2 이후) `npm test` 통과
- [ ] Lighthouse 모바일 점수 확인: Performance/Accessibility 각 80+ 목표

---

## 5. CI/CD 파이프라인

GitHub Actions (`.github/workflows/ci.yml`) — PR마다 자동 실행:

```
1. npm ci
2. npm run lint
3. npm test        # A-2 완료 후
4. npm run build
```

- CI 통과 없이는 머지 금지 (branch protection 설정: main에 직접 push 금지, PR 필수)
- Vercel Preview 배포 URL로 PR에서 실물 확인 후 머지

---

## 6. 운영/모니터링

- [ ] **에러 추적**: Sentry 무료 플랜 (`@sentry/nextjs`) — 운영자가 못 보는 프론트 에러 수집. 2차 배포 때 도입해도 됨
- [ ] **Analytics**: Vercel Analytics(무료 기본) 정도면 충분. 사용 패턴(모바일 비율 등) 파악용
- [ ] **가동 확인**: UptimeRobot 무료로 5분 간격 헬스체크 (선택)
- [ ] **백업**: 1차 = Google Sheets 자체가 원본. 2차 = Supabase 자동 백업(무료 플랜 7일) + 주 1회 CSV export 스크립트 검토

---

## 7. 롤백 계획

- Vercel: 배포 목록에서 이전 배포 "Promote to Production" 클릭 → 즉시 롤백 (코드 문제 시)
- 데이터 문제 시(2차): Supabase point-in-time 복구는 유료 → 무료 플랜에서는 일일 백업 시점 복구만 가능함을 인지하고, 파괴적 마이그레이션 전 수동 백업 필수
- Sheets → Supabase 전환기: ROADMAP B-4의 백엔드 플래그로 즉시 Sheets 복귀 가능하게 유지

---

## 8. 배포 1차 실행 순서 (요약)

```
1. .env.example 추가, .gitignore 확인          (커밋 1개)
2. 목록 API의 전화번호 노출 점검/마스킹          (커밋 1개)
3. GitHub Actions CI 추가                      (커밋 1개)
4. Vercel 프로젝트 생성 + 환경변수 + 배포
5. §4 QA 체크리스트 전체 수행 (특히 실기기 카메라 스캔)
6. 운영자에게 URL 전달 + 사용법 1페이지 안내 (docs/USER_GUIDE.md 작성)
7. 1~2주 실사용 피드백 수집 → 디자인/기능 백로그 반영
```

## 9. 배포 2차 게이트 (정식 오픈 조건)

아래 전부 충족 시 정식 배포로 간주:

- [ ] ROADMAP V2 PHASE B 완료 (Supabase 전환, Sheets 병행 검증 통과)
- [ ] PHASE C-1 완료 (운영자 로그인)
- [ ] 디자인 리뉴얼 1차 적용 (DESIGN_REFERENCE_GUIDE 기준)
- [ ] §3 보안 체크리스트 2차 항목 전부 완료
- [ ] §4 QA 전 항목 3환경 통과
- [ ] Sentry 연동 및 에러 0 상태로 48시간 운영
- [ ] 커스텀 도메인 + 운영자 사용 가이드 문서 완비
