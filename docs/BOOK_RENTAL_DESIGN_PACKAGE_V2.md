# BOOK RENTAL DESIGN PACKAGE v2

# 청년동 도서관리 시스템

## 프로젝트 비전

청년동 운영자가 가장 빠르고 직관적으로 사용할 수 있는 도서 대여·반납 시스템 구축

---

# 디자인 방향

## 핵심 키워드

- Warm
- Editorial
- Clean
- Friendly
- Trustworthy

## 참고 레퍼런스

- Fictional
- Juliane Jeske
- Gusta
- Clay & Bones
- Orbita

## 가져올 요소

- 넓은 여백
- 큰 타이포그래피
- 카드 중심 구조
- 깔끔한 정보 계층
- 부드러운 색감

## 제외 요소

- WebGL
- 3D
- 과한 애니메이션
- 스크롤 쇼케이스

---

# 컬러 시스템

Background
#F5F8F5

Surface
#FFFFFF

Primary
#0EA371

Accent
#00B5C9

Text
#111827

Sub Text
#6B7280

---

# 데스크톱 와이어프레임

[ HERO ]
청년동 도서관리
도서 대여부터 반납까지 한 화면에서 처리하세요.

[ STATS ]
전체도서 | 대여가능 | 대여중 | 연체 | 오늘반납

[ CONTENT ]

┌───────────────┬───────────────────────────┐
│ 대여 등록      │ 도서 목록                 │
│               │                           │
│ 회원/비회원    │ 검색                      │
│ 도서 선택      │ 상태 필터                │
│ 카메라 스캔    │ 새로고침                 │
│ 대여 처리      │ 도서 테이블              │
│               │ 더보기                   │
└───────────────┴───────────────────────────┘

---

# 모바일 와이어프레임

Hero

Stats

대여 등록

도서 목록

---

# 컴포넌트 구조

Page
 ├ HeroSection
 ├ StatsSection
 ├ BorrowPanel
 └ BookListPanel

---

# Stats Card

항목

- 전체 도서
- 대여 가능
- 대여 중
- 연체
- 오늘 반납 예정

반응형

Desktop: 5열
Tablet: 3+2
Mobile: 2열

---

# Borrow Panel

순서

회원 선택
→ 이름 입력
→ 전화번호 입력
→ 도서 선택
→ 대여 처리

원칙

- self-start 유지
- 가장 중요한 영역
- 단계별 진행 강조

---

# Book List

기능

- 검색
- 필터
- 새로고침
- 더보기

기본 표시 수

10권

더보기

+10권씩 추가

---

# 상태 디자인

대여 가능
Green

대여 중
Yellow

연체
Red

---

# 타이포그래피

Hero
text-5xl font-bold

Section
text-xl font-semibold

Body
text-sm

---

# 개발 원칙

절대 변경 금지

- Apps Script
- /api/books
- 대여 로직
- 반납 로직
- 회원 검증
- 더보기 상태 로직

변경 가능

- UI
- 컬러
- 간격
- 카드
- 타이포그래피
- 반응형

---

# Opencode 작업 지시서

참고 문서

- docs/UI_DESIGN_GUIDE.md
- docs/UI_WIREFRAME.md

목표

1. Hero 개선
2. Stats 개선
3. Borrow Panel 개선
4. Book List 개선
5. 모바일 최적화

수정 후

- npm run build 성공 필수
- 기능 로직 변경 금지
