# BOOK RENTAL 작업 지시서 V2

작성일: 2026-07-05
기준: main 브랜치 (PR #1~#6 머지 완료 시점)

---

## 1. 현황 분석

### 1.1 완료된 것 (PR #1~#6)

| PR | 내용 |
|---|---|
| #1 | 빠른 반납 패널, bookCode 필드 불일치 수정 |
| #2 | page.tsx → HeroSection/StatsSection/BorrowPanel/BookListPanel 분리 |
| #3 | 도서 목록 검색/필터/더보기 UX 개선 |
| #4, #5 | CLAUDE.md / AGENTS.md 문서 추가 |
| #6 | rental/spaces 페이지 정리 (rental/page.tsx 1,100줄 → 37줄) |

V1 로드맵(BOOK_RENTAL_OPENCODE_ROADMAP_V1.md)의 TASK 01~04, 07, 09는 사실상 완료.

### 1.2 현재 아키텍처

```
브라우저 → Next.js (src/app/api/books/route.ts, BFF)
        → Apps Script Web App (APPS_SCRIPT_WEB_APP_URL)
        → Google Sheets (단일 시트가 도서+대여 정보를 동시에 보유)
```

### 1.3 현재 구조의 한계 (Supabase 이전이 필요한 이유)

1. **데이터 모델이 평면적**: `Book` 한 행에 borrower/phone/dueDate가 붙어 있어
   - 대여 **이력**이 남지 않음 (반납하면 이전 기록 소실)
   - 회원이 독립 엔티티가 아니어서 회원별 대여 조회 불가
2. **Apps Script 병목**: 배포/수정이 번거롭고, 응답이 느리고, 스키마 검증·트랜잭션·동시성 제어가 없음 (두 명이 동시에 같은 책 대여 가능)
3. **인증 없음**: 누구나 URL만 알면 대여/반납 처리 가능
4. **테스트 없음**: 유틸(book.ts)조차 단위 테스트가 없음

### 1.4 로컬 저장소 정리 대상

머지 완료된 로컬 브랜치 3개 삭제 가능:
`feature/quick-return-and-bookcode-fix`, `refactor/split-page-components`, `codex/ops-cleanup`, (`feature/book-list-improvements`도 머지됨)

---

## 2. 목표 아키텍처

```
브라우저 → Next.js (Server Actions 또는 Route Handlers)
        → Supabase (Postgres + Auth + RLS)
```

Apps Script/Google Sheets는 마이그레이션 완료 후 **읽기 전용 백업**으로 강등 후 폐기.

### 2.1 제안 스키마 (Supabase / Postgres)

```sql
-- 도서 (마스터)
books (
  id uuid pk,
  book_code text unique,      -- CNDB 접두 바코드, normalizeCode 적용값
  title text not null,
  author text,
  created_at timestamptz
)

-- 회원
members (
  id uuid pk,
  member_code text unique,
  name text not null,
  phone text,                 -- normalizePhone 적용값
  created_at timestamptz
)

-- 대여 (이력 보존, 현재 대여 = returned_at is null)
rentals (
  id uuid pk,
  book_id uuid fk -> books,
  member_id uuid fk -> members null,  -- 비회원이면 null
  guest_name text,                    -- 비회원 대여자명
  guest_phone text,
  borrowed_at date not null,
  due_date date not null,
  returned_at timestamptz null,
  created_at timestamptz
)
-- 부분 유니크 인덱스: 같은 책의 미반납 대여는 1건만
create unique index one_active_rental on rentals(book_id) where returned_at is null;
```

핵심: 현행 `available/borrowed/overdue` 상태는 컬럼이 아니라 **rentals에서 파생** (미반납 건 없음 → available, due_date < today → overdue). `getBookStatus` 로직과 동일한 의미 유지.

---

## 3. 작업 로드맵

### PHASE A — 기반 정비 (마이그레이션 전, 소규모)

**TASK A-1. 저장소 정리**
- 머지 완료 로컬/원격 feature 브랜치 삭제
- 완료 조건: `git branch`에 main만 남음

**TASK A-2. 유틸 단위 테스트 도입**
- vitest 설치, `src/lib/book.ts` 전 함수 테스트 (특히 `getBookStatus` 경계일, `getDefaultDueDate` 타임존)
- 이유: 마이그레이션 중 회귀 방지의 최소 안전망
- 완료 조건: `npm test` 통과, CI(GitHub Actions)에서 lint+test+build 실행

**TASK A-3. 데이터 접근 계층 분리**
- 컴포넌트/페이지가 `fetch("/api/books")`를 직접 호출하는 부분을 `src/lib/api.ts` 같은 단일 모듈로 모음
- 이유: PHASE B에서 백엔드를 갈아끼울 때 수정 지점을 한 곳으로
- 완료 조건: UI 코드에 fetch 호출이 남지 않음, 동작 변화 없음

### PHASE B — Supabase 마이그레이션 (핵심)

**TASK B-1. Supabase 프로젝트 셋업 + 스키마 생성**
- 2.1 스키마로 마이그레이션 SQL 작성 (`supabase/migrations/`)
- `@supabase/supabase-js` 설치, 환경변수 `NEXT_PUBLIC_SUPABASE_URL`/`SUPABASE_SERVICE_ROLE_KEY` (service key는 서버 전용)

**TASK B-2. 데이터 이관 스크립트**
- Google Sheets 데이터를 CSV/Apps Script export → books/members/rentals로 변환하는 일회성 스크립트 (`scripts/migrate-from-sheets.ts`)
- 현재 대여 중인 행 → rentals에 미반납 건으로 생성
- 완료 조건: 이관 후 건수/대여중 수가 시트 통계와 일치하는지 검증 출력

**TASK B-3. API 라우트 교체**
- `src/app/api/books/route.ts`의 Apps Script 호출을 Supabase 쿼리로 교체
- **응답 계약 유지**: `{ ok, error?, books?/book? }` 형태 그대로 → 프론트 수정 최소화
- 대여 처리 시 `one_active_rental` 인덱스로 중복 대여 방지 (에러 시 한국어 메시지)
- 완료 조건: 기존 UI가 수정 없이(또는 최소 수정으로) 동일하게 동작

**TASK B-4. 이중 운영 → 전환**
- 전환 기간: 환경변수 플래그로 Sheets/Supabase 백엔드 선택 가능하게
- 1~2주 병행 확인 후 Apps Script 경로 제거

### PHASE C — 마이그레이션이 열어주는 기능

**TASK C-1. 운영자 인증 (Supabase Auth)**
- 이메일 로그인 1계정이면 충분. 대여/반납은 로그인 필수, 목록 조회는 공개 여부 선택
- RLS: 쓰기는 authenticated만

**TASK C-2. 대여 이력 페이지**
- 도서별/회원별 과거 대여 기록 조회 (현재 구조에선 불가능했던 것)
- 반납 실수 취소(undo) 기능

**TASK C-3. 회원 관리 화면**
- 회원 등록/수정/검색, 회원별 현재 대여·연체 표시

**TASK C-4. 도서 관리 (CRUD)**
- 현재는 시트에서 직접 추가해야 함 → 웹에서 도서 등록/수정/폐기
- 바코드(CNDB) 자동 채번 검토

**TASK C-5. 통계/대시보드 강화** (V1 TASK 10 승계)
- 월별 대여 추이, 인기 도서, 연체율 — SQL 집계로 구현

**TASK C-6. 연체 알림 (선택)**
- 반납 예정/연체 회원 목록 추출, 추후 알림톡/SMS 연동 검토

---

## 4. 공통 지시 (V1 승계 + 갱신)

1. `npm run build` 성공 필수, PHASE A-2 이후에는 `npm test` 통과 필수
2. 사용자 노출 텍스트는 한국어
3. 코드/전화번호는 `normalizeCode`/`normalizePhone` 적용 후 사용
4. API 응답 계약 `{ ok, error?, ... }` 유지 (마이그레이션 중 특히)
5. 상태 판정은 `getBookStatus` 의미론 유지 (available/borrowed/overdue 3종)
6. feature 브랜치 → PR → 머지 패턴 유지, PR 단위는 위 TASK 1개 이하
7. ~~Apps Script 변경 금지~~ → PHASE B부터 해제, 단 이관 완료 전 시트 데이터 파괴적 변경 금지

## 5. 권장 진행 순서

A-1 → A-2 → A-3 → B-1 → B-2 → B-3 → B-4 → C-1 → (C-2~C-6은 운영 우선순위에 따라)

PHASE A는 반나절 규모, PHASE B가 본 작업. C-1(인증)은 외부 공개 전 필수.
