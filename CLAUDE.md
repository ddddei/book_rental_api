# book_rental_api (gm-youthzone)

청소년공간(spaces) 도서 대여 관리 웹앱. Google Apps Script를 백엔드로 쓰는 Next.js 프론트엔드.

## 프로젝트 개요 및 구조

- **스택**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- **데이터 저장소**: Google Sheets (Apps Script Web App을 API 게이트웨이로 사용). `APPS_SCRIPT_WEB_APP_URL` 환경변수(`.env.local`)로 연결
- **핵심 흐름**: 바코드 스캔(QR/카메라) 또는 도서명 선택 → 회원/비회원 대여 등록 → 반납 처리. 도서 목록은 검색/필터/더보기(load more) 지원

```
src/
  app/
    page.tsx          # 메인 페이지. 상태/핸들러 보유, 하위 컴포넌트에 props로 전달
    api/books/route.ts # GET/POST/PATCH — Apps Script Web App 호출하는 BFF
    rental/page.tsx    # 대여 관련 별도 라우트
    spaces/page.tsx    # 공간 관련 별도 라우트
    layout.tsx, globals.css
  components/
    HeroSection.tsx     # 상단 히어로 영역
    StatsSection.tsx     # 통계 카드 (전체/대여가능/대여중/연체/오늘마감)
    BorrowPanel.tsx       # 대여 등록 폼 + 카메라 스캐너 + 최근 대여 목록(빠른 반납)
    BookListPanel.tsx     # 도서 목록 검색/필터/페이지네이션
    SiteHeader.tsx, Header.tsx, ui.tsx  # 공용 UI 요소
  lib/book.ts            # Book 타입, 날짜/코드 정규화, 상태(available/borrowed/overdue) 판정 유틸
  types/html5-qrcode.d.ts
docs/                     # 기획/디자인 문서 (BOOK_RENTAL_DESIGN_PACKAGE_V1/V2, UI_DESIGN_GUIDE, UI_WIREFRAME, ROADMAP)
```

## 현재 PR/브랜치 흐름

- `main`이 베이스. feature 브랜치 → PR → 머지 패턴
- 머지된 PR: #1 빠른 반납/bookCode 수정, #2 page.tsx 컴포넌트 분리, #3 도서 목록 UX 개선, #4~#5 문서 추가, #6 ops 정리, #7 디자인 토큰 코드화 + 메인 페이지 리뉴얼(B+C 절충 시안)
- 머지 완료된 로컬 feature 브랜치는 정리됨 (2026-07 기준 main만 유지)
- Vercel 연동 완료: PR마다 프리뷰 배포 자동 생성 (Deployment Protection 활성)

## 주요 파일 역할

| 파일 | 역할 |
|---|---|
| [src/app/page.tsx](src/app/page.tsx) | 전체 상태(books, query, filter, 대여 폼 상태, 카메라 상태) 관리, fetchBooks/submitBorrow/handleReturn/카메라 제어 함수, 하위 컴포넌트 조합 |
| [src/app/api/books/route.ts](src/app/api/books/route.ts) | Apps Script Web App과의 유일한 통신 지점. GET(list/조회), POST(action=borrow), PATCH(action=return) |
| [src/lib/book.ts](src/lib/book.ts) | `Book` 타입, `getBookStatus`(대여가능/대여중/연체 판정), `normalizeCode`/`normalizePhone`, 날짜 유틸 |
| [src/components/BorrowPanel.tsx](src/components/BorrowPanel.tsx) | 회원/비회원 토글, 바코드/도서명 입력 토글, html5-qrcode 카메라 스캐너, 최근 대여 빠른 반납 |
| [src/components/BookListPanel.tsx](src/components/BookListPanel.tsx) | 검색어/상태 필터, pageSize 변경, visibleCount 기반 load-more |

## 코딩 컨벤션

- 클라이언트 컴포넌트는 파일 최상단에 `"use client"`
- 사용자 노출 텍스트(에러 메시지, 라벨)는 한국어
- 도서 코드는 `normalizeCode`(trim + uppercase)로, 전화번호는 `normalizePhone`(숫자만 추출)로 항상 정규화 후 사용
- 바코드는 `CNDB` 접두사로 시작해야 유효한 것으로 간주 (`bookInputMode === "barcode"`일 때 검증)
- API 라우트는 항상 `{ ok: boolean, error?: string, books?/book? }` 형태로 응답하고 실패해도 HTTP 200 또는 500 + 에러 메시지로 응답
- 상태(`BookStatus`)는 `available` / `borrowed` / `overdue` 세 가지만 존재, `getBookStatus`로만 판정 (borrower/dueDate 기반)
- 타입/유틸은 `src/lib/book.ts`에 집중, 새 도서 관련 헬퍼 추가 시 이 파일에 추가
- **디자인 토큰**: 컬러/라운딩은 `globals.css`의 `@theme` 토큰 유틸리티(`bg-canvas`, `text-ink`, `bg-brand`, `bg-overdue-soft`, `rounded-card` 등)만 사용. 임의 hex/기본 Tailwind 팔레트 직접 사용 금지 (docs/DESIGN_REFERENCE_GUIDE.md 참고)

## 자주 쓰는 명령어

```bash
npm run dev      # 개발 서버 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
npm run lint     # ESLint
```

## 현재 진행 중인 작업 및 다음 작업 목록

기준 문서: `docs/BOOK_RENTAL_ROADMAP_V2.md` (기능 로드맵), `docs/DEPLOYMENT_PLAN_V1.md` (배포), `docs/DESIGN_REFERENCE_GUIDE.md` (디자인)

- [x] 도서 목록 UX 개선, 컴포넌트 분리, 빠른 반납 (PR #1~#3)
- [x] 디자인 토큰 코드화 + 메인 페이지 리뉴얼 프로토타입 (PR #7)
- [ ] 디자인 후속: 키보드 단축키(`/` 검색, `S` 스캔, `N` 등록), 모바일 하단 고정 액션 바
- [ ] 배포 1차 (DEPLOYMENT_PLAN §8): `.env.example` 추가, 목록 API 전화번호 노출 점검/마스킹, GitHub Actions CI, QA 체크리스트 수행
- [ ] 로드맵 PHASE A: vitest 도입(`lib/book.ts` 테스트), 데이터 접근 계층 분리
- [ ] 로드맵 PHASE B: Supabase 마이그레이션 (스키마 생성 → 데이터 이관 → API 교체)
