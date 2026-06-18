# 청년동 도서관리 시스템 디자인 패키지 v1

## 문서 목적
본 문서는 청년동 도서관리 시스템의 UI 리뉴얼을 위한 기준 문서입니다.

---

# 1. 프로젝트 개요

## 목표
- 빠른 도서 대여 등록
- 빠른 반납 처리
- 신규 직원도 즉시 사용 가능
- 운영툴이지만 따뜻한 사용자 경험 제공

## 핵심 원칙
1. Function First
2. Editorial Design
3. Warm & Friendly
4. Mobile Responsive

---

# 2. 디자인 키워드

## Primary
- Warm
- Editorial
- Clean
- Friendly
- Trustworthy

## Secondary
- Community
- Library
- Youth

## Avoid
- ERP 느낌
- 공공기관 느낌
- 과한 관리자 페이지 느낌
- 과도한 애니메이션

---

# 3. 컬러 시스템

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

Secondary Text
#6B7280

---

# 4. 전체 레이아웃

Hero

↓

Stats Cards

↓

대여 등록 | 도서 목록

---

# 5. Hero Section

제목:
청년동 도서관리

부제:
도서 대여부터 반납까지 한 화면에서 처리하세요.

설명:
회원 조회, 바코드 스캔, 대여·반납 현황 관리를 한 번에 진행할 수 있습니다.

---

# 6. Stats Section

항목
- 전체 도서
- 대여 가능
- 대여 중
- 연체
- 오늘 반납 예정

Desktop
5개 카드 가로 배치

Tablet
3 + 2

Mobile
2열

---

# 7. Borrow Panel

흐름

회원/비회원 선택
↓
도서 선택
↓
카메라 스캔
↓
이름/연락처 입력
↓
대여일/반납일 입력
↓
대여 처리

원칙
- self-start 유지
- 가장 중요한 영역
- 단계별 흐름 강조

---

# 8. Book List Panel

기능
- 검색
- 상태 필터
- 새로고침
- 더보기

표시 컬럼
- 도서명
- 상태
- 대여자
- 반납예정일
- 처리

원칙
- 최초 10개 표시
- 더보기로 추가 노출
- 모바일 카드형 검토

---

# 9. 모바일 구조

Hero

Stats Cards

대여 등록

도서 목록

---

# 10. 상태 컬러

대여 가능
green

대여 중
yellow

연체
red

---

# 11. 카드 스타일

rounded-3xl
border
shadow-sm
bg-white

---

# 12. 타이포그래피

Hero
text-5xl
font-bold

Section
text-xl
font-semibold

Body
text-sm

---

# 13. 구현 시 변경 금지

- Apps Script API
- /api/books
- 대여 로직
- 반납 로직
- 회원 검증 로직
- 더보기 로직

---

# 14. 변경 가능

- Hero UI
- Stats UI
- 카드 디자인
- 색상
- 여백
- 반응형
- 타이포그래피

---

# 15. 레퍼런스 방향

- Fictional
- Juliane Jeske
- Gusta
- Clay & Bones
- Orbita

참고 요소
- 넓은 여백
- 에디토리얼 타이포
- 카드 중심 구조
- 따뜻한 색감

제외 요소
- WebGL
- 3D
- 과한 애니메이션

---

# 16. Opencode 작업 기준

참고 문서
- docs/UI_DESIGN_GUIDE.md
- docs/UI_WIREFRAME.md

목표
1. Hero 개선
2. Stats 개선
3. Borrow Panel 개선
4. Book List 개선
5. 모바일 최적화

금지
- API 변경
- 상태값 변경
- Apps Script 연동 변경

---

# 17. 1차 리뉴얼 범위

포함
- Hero
- Stats
- 대여 등록 카드
- 도서 목록 카드
- 전체 배경

제외
- 기능 추가
- API 수정
- Apps Script 수정
- 통계 기능 추가
