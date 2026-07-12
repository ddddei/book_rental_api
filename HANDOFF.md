# 도서 대여 관리 웹앱 — 작업 인수인계

작성일: 2026-07-12. 아키텍처·컨벤션·파일 역할은 **[CLAUDE.md](CLAUDE.md)가 원천**이고(PHASE A 완료 시점으로 현행화됨), 배포 상태 스냅샷은 [docs/DEPLOYMENT_HANDOFF_2026-07-05.md](docs/DEPLOYMENT_HANDOFF_2026-07-05.md)에 있다. 이 문서는 그 둘에 없는 **진행 상태·대화로만 남은 결정·미결**을 담는다.

## 목표와 현 위치

청소년공간 도서 대여 관리 웹앱 (Next.js + Google Sheets/Apps Script 백엔드). **배포 1차(Soft Launch) 완료** — Production 운영 중, 운영자 PIN 게이트, CI(lint/test/build), vitest 40개.
**PHASE A(리팩터링 기반 다지기) 완료** → 다음 큰 산은 **PHASE B: Supabase 마이그레이션**이며, 착수 대기 상태다.

## 확정된 결정사항 (+ 기각·보류된 대안)

- **데이터 접근 단일화 완료** (PR #17): 모든 API 호출은 `src/lib/api.ts`의 3함수(fetchBooks/borrowBook/returnBook)로만. UI 코드에 `fetch(` 0건. **Supabase 전환 시 이 모듈(과 서버측 route.ts)만 교체**하는 설계가 확정 방향.
- **PHASE B 스키마 설계는 ROADMAP V2 §2.1을 따른다**: books/members/rentals 3테이블, 대여 이력 보존, 책당 미반납 대여 1건 유니크 제약, RLS 정책.
- **보류 결정 ①**: 운영 편의 소기능(대여 기간 프리셋, 반납 확인 다이얼로그)은 실사용 피드백 근거가 생기기 전 선반영하지 않기로 함 — "좋아 보여서 추가"는 기각된 접근.
- **보류 결정 ②**: Sentry 에러 추적은 2차 배포 게이트 항목 — PHASE B보다 후순위로 확정.
- 절차 교훈: 스택된 PR의 base 브랜치가 머지로 삭제되면 하위 PR이 자동 닫힘 (#16이 그렇게 닫혀 #17로 재생성됨). 스택 PR 머지 시 base 재타겟을 먼저 확인할 것.

## 미결 사항 (다음 세션이 사용자에게 물어야 할 것)

1. **Supabase 계정/프로젝트 생성 여부** — 회사 계정으로 만들기로 했었음(2026-07-06 대화). 생성됐다면 PHASE B 실행, 아니면 사전 준비만 가능.
2. 실사용 피드백 수집 상태 — 보류 결정 ①의 해제 조건. 운영자·이용자 반응이 쌓였는지.
3. PHASE B 착수 방식 — 사전 준비(계정 불필요: 마이그레이션 SQL·이관 스크립트·백엔드 플래그 스캐폴딩)를 먼저 할지, 계정 생성 후 한 번에 갈지.

## 지금까지 확인된 사실 (재조사 불필요)

- **PHASE B 사전 준비는 미착수 상태다** (2026-07-12 확인: `supabase/` 디렉터리 없음, `scripts/`엔 배포 체크 셸만). 계획만 논의됐고 코드는 없다.
  - 계획된 사전 준비 3종: ① `supabase/migrations/` 스키마 SQL ② `scripts/migrate-from-sheets.ts` — 시트 export CSV 입력, 건수/대여중 수 대조 검증 포함 (운영 데이터 약 219권) ③ `route.ts`의 환경변수 백엔드 플래그(Sheets/Supabase 선택).
- 게이트: `npm run lint` / `npm test`(vitest 40) / `npm run build`. 프로덕션 스모크: `npm run check:deployment:v1`.
- 배포는 main push 시 Vercel 자동. PR마다 프리뷰 배포 생성(Deployment Protection 있음).

## 환경별 제약

- 로컬 실행엔 `.env.local`의 `APPS_SCRIPT_WEB_APP_URL` 필요 (없으면 API 호출 실패 — 커밋 금지).
  **현 상태(2026-07-12 확인): 이 Mac의 `.env.local`은 존재하지만 빈 파일**이라 실제 시트 호출은 안 된다. lint/test/build는 이 값 없이도 통과 (테스트는 fetch 모킹).
- **운영 데이터는 실물 Google Sheets다** — 이관 스크립트 테스트는 반드시 export 사본으로. 시트 직접 쓰기 실험 금지.
- 프로덕션 검증은 `check:deployment:v1`로 원격 확인 가능 (PIN 게이트·헬스체크).

## 다음 단계

0. 환경: `npm ci` → `npm run lint && npm test && npm run build`로 기준선 green 확인.
1. 미결 ①(Supabase 계정)을 확인 — 답에 따라 두 갈래:
   - 계정 없음 → 사전 준비 3종을 지시서 방식으로 진행 (계정 불필요, 전부 코드 리뷰·모킹 테스트 가능).
   - 계정 있음 → 프로젝트 생성 → 스키마 SQL 실행 → 이관 → 플래그 전환 순서로 PHASE B 본편.
2. 어느 쪽이든 `src/lib/api.ts` 계약(3함수 시그니처)은 유지한다 — 이것이 PHASE A의 존재 이유다.

## 입력 파일 목록

- `docs/BOOK_RENTAL_ROADMAP_V2.md` — 기능 로드맵 (PHASE B 스키마 설계 §2.1 포함)
- `docs/DEPLOYMENT_PLAN_V1.md` / `DEPLOYMENT_QA_CHECKLIST_V1.md` — 배포 절차·QA 기준
- `docs/DESIGN_REFERENCE_GUIDE.md` — 디자인 토큰 규칙 (임의 색상 금지)
- `scripts/check-deployment-v1.sh` — 프로덕션 스모크 체크
