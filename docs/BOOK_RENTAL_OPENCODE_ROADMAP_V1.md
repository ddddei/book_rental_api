# BOOK RENTAL UI ROADMAP v1
# Opencode 작업 지시서

## 프로젝트 상태

완료
- Next.js 구조 정리
- src/app 단일 구조 통합
- Apps Script 연동
- 회원 이름/전화번호 조회
- 도서명 선택 대여
- 통계 카드 복구

진행 예정
- UI 리뉴얼
- 모바일 최적화
- 운영 편의 기능 추가

---

# TASK 01
## Hero 리뉴얼

목표
- 에디토리얼 스타일 적용
- 큰 타이틀
- 부드러운 설명 영역

완료 조건
- Hero 영역 가독성 향상
- 모바일 대응

---

# TASK 02
## Stats 카드 개선

목표
- 카드 디자인 통일
- 정보 가독성 향상

대상
- 전체 도서
- 대여 가능
- 대여 중
- 연체
- 오늘 반납 예정

---

# TASK 03
## Borrow Panel 개선

목표
- 단계형 UX 적용

순서
회원 선택
→ 도서 선택
→ 회원 정보 확인
→ 대여 처리

---

# TASK 04
## Book List 개선

목표
- 검색 영역 정리
- 필터 UI 개선
- 더보기 UX 개선

---

# TASK 05
## 모바일 최적화

목표
- 모바일 사용 가능 수준 확보

항목
- 카드 재배치
- 버튼 크기 개선
- 입력 영역 개선

---

# TASK 06
## 디자인 토큰 정리

컬러
- Primary
- Accent
- Background

타이포
- Hero
- Section
- Body

---

# TASK 07
## 컴포넌트 분리

목표
- 유지보수성 향상

분리 후보
- HeroSection
- StatsSection
- BorrowPanel
- BookListPanel

---

# TASK 08
## 접근성 개선

항목
- 버튼 라벨
- 입력 필드
- 키보드 접근성

---

# TASK 09
## 운영 편의 기능

후보
- 빠른 반납
- 최근 대여 목록
- 최근 반납 목록

---

# TASK 10
## V2 기능 기획

후보
- 도서 상세 페이지
- 인기 도서 통계
- 월별 대여 통계
- 운영 대시보드

---

# Opencode 공통 지시

항상 준수

1. 기능 로직 변경 금지
2. Apps Script 변경 금지
3. API 구조 변경 금지
4. npm run build 성공 필수
5. UI 변경 전 계획 제시
6. 작업 후 변경 요약 작성
