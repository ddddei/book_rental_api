# 청년동 도서관리 시스템 UI 디자인 가이드 v1

## 프로젝트 개요

청년동 내부 운영자를 위한 도서 대여·반납 관리 시스템

### 목표

- 빠른 도서 대여 등록
- 빠른 반납 처리
- 현재 상태를 한눈에 파악
- 신규 직원도 즉시 사용 가능
- 운영툴이지만 친근하고 깔끔한 경험 제공

---

# 디자인 원칙

## 1. Function First

예쁜 화면보다 빠른 업무 처리 우선

모든 UI는 운영 효율성을 높여야 한다.

---

## 2. Editorial Style

일반 관리자 페이지가 아닌

정돈된 에디토리얼 스타일 적용

참고:

- Fictional
- Juliane Jeske
- Gusta
- Clay & Bones
- Orbita

---

## 3. Calm & Friendly

공공기관 느낌 제거

ERP 느낌 제거

엑셀 느낌 제거

청년 공간에 어울리는 분위기 유지

---

# 디자인 키워드

## Primary

- Warm
- Clean
- Editorial
- Friendly
- Trustworthy

## Secondary

- Community
- Library
- Youth

## Avoid

- Corporate
- Government
- Dashboard Overload
- Excessive Animation

---

# 컬러 시스템

## Background

```css
#F5F8F5
```

페이지 전체 배경

---

## Surface

```css
#FFFFFF
```

카드 배경

---

## Primary

```css
#0EA371
```

주요 버튼

상태 표시

강조 요소

---

## Accent

```css
#00B5C9
```

보조 강조

포인트 정보

---

## Text

```css
#111827
```

기본 텍스트

---

## Secondary Text

```css
#6B7280
```

설명 텍스트

---

# 레이아웃 구조

## Desktop

```text
Hero

Stats Cards

┌─────────────┬──────────────────────┐
│ 대여 등록    │ 도서 목록            │
└─────────────┴──────────────────────┘
```

---

## Mobile

```text
Hero

Stats Cards

대여 등록

도서 목록
```

---

# Hero Section

## 목적

사용자가 현재 페이지 역할을 즉시 이해

---

## 제목

```text
청년동 도서관리
```

---

## 부제

```text
도서 대여부터 반납까지
한 화면에서 처리하세요.
```

---

## 설명

```text
회원 조회, 바코드 스캔,
대여·반납 현황 관리를
한 번에 진행할 수 있습니다.
```

---

# 통계 카드

## 표시 항목

### 전체 도서

```ts
stats.total;
```

---

### 대여 가능

```ts
stats.available;
```

---

### 대여 중

```ts
stats.borrowed;
```

---

### 연체

```ts
stats.overdue;
```

---

### 오늘 반납 예정

```ts
stats.dueToday;
```

---

## 배치

Desktop

```text
[전체]
[가능]
[대여중]
[연체]
[오늘반납]
```

---

Mobile

```text
[전체] [가능]

[대여중] [연체]

[오늘반납]
```

---

# 대여 등록 영역

## 중요도

가장 중요한 기능

---

## 구성 순서

```text
회원/비회원 선택

도서 선택

카메라 스캔

입력 정보

대여 등록
```

---

## 목표

사용자가 위에서 아래로 자연스럽게 진행

---

# 도서 목록 영역

## 기능

- 검색
- 상태 필터
- 새로고침
- 더보기

---

## 컬럼

```text
도서명
상태
대여자
반납예정일
처리
```

---

# 상태 디자인

## 대여 가능

```css
bg-green-50
text-green-700
```

---

## 대여 중

```css
bg-yellow-50
text-yellow-700
```

---

## 연체

```css
bg-red-50
text-red-700
```

---

# 카드 스타일

모든 카드 통일

```css
rounded-3xl
border
shadow-sm
bg-white
```

---

# 타이포그래피

## Hero Title

```css
text-5xl
font-bold
```

---

## Section Title

```css
text-xl
font-semibold
```

---

## Body

```css
text-sm
```

---

# 인터랙션 원칙

## 유지

- 더보기 기능
- 검색 기능
- 상태 필터
- 카메라 스캔

---

## 추가 가능

- 카드 Hover
- 버튼 Hover
- 부드러운 Transition

---

## 금지

- 패럴랙스
- 3D 효과
- 과도한 애니메이션
- WebGL

---

# 개발 원칙

## 수정 우선순위

1. UI 구조
2. 카드 디자인
3. 간격 및 여백
4. 모바일 대응
5. 애니메이션

---

## 수정 금지

- Apps Script 연동 로직
- 대여/반납 로직
- 검색 로직
- 더보기 로직
- API 구조

---

# 향후 단계

## v1

현재 디자인 정리

---

## v2

도서 상세 모달

최근 대여 내역

빠른 반납

---

## v3

대시보드

월별 통계

인기 도서

대여 추이 분석
