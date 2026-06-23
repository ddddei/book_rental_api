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

- `main`이 베이스. feature 브랜치 → PR → squash/merge 패턴
- 머지된 PR: #1 `feature/quick-return-and-bookcode-fix` (빠른 반납 패널, bookCode 필드 불일치 수정), #2 `refactor/split-page-components` (page.tsx를 Hero/Stats/Borrow/BookList 컴포넌트로 분리)
- **현재 작업 브랜치**: `feature/book-list-improvements` — 도서 목록 검색/필터/더보기 UX 개선 (커밋 `1a2400e`, 아직 PR 미생성)
- 로컬에 남은 다른 브랜치: `feature/quick-return-and-bookcode-fix`, `refactor/split-page-components` (둘 다 머지 완료, 정리 대상일 수 있음)

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

## 자주 쓰는 명령어

```bash
npm run dev      # 개발 서버 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
npm run lint     # ESLint
```

## 현재 진행 중인 작업 및 다음 작업 목록

- [x] 빠른 반납 패널 추가, bookCode 필드 불일치 수정 (PR #1)
- [x] page.tsx를 컴포넌트 단위로 분리 (PR #2)
- [x] 도서 목록 검색/필터/더보기 UX 개선 (`feature/book-list-improvements`, 커밋 `1a2400e`)
- [ ] `feature/book-list-improvements` PR 생성 및 머지
- [ ] 머지 완료된 로컬 브랜치(`feature/quick-return-and-bookcode-fix`, `refactor/split-page-components`) 정리 검토
- [ ] `docs/BOOK_RENTAL_OPENCODE_ROADMAP_V1.md` 기준 다음 로드맵 항목 확인 필요
