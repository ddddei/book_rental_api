# 배포 1차 운영 인수인계 기록 — 2026-07-05

Deployment Plan V1 기준으로 코드/배포 자동화는 Production에 반영되었고, 실제 운영 전에는 아래 남은 수동 게이트를 닫아야 합니다.

## 현재 배포 상태

| 항목 | 값 |
|---|---|
| GitHub PR | `#12` 배포 V1 통합 준비 |
| Production commit | `773715606181e88ed184a799e01f08249c51cb5b` |
| Vercel deployment | `dpl_Ew3rsTmfMp2MyYXS2tDEwL9BYvBP` |
| Production URL | `https://book-rental-api-seven.vercel.app` |
| 배포 상태 | `READY` |
| main CI | 통과 |
| `/api/health` | `200`, `ok: true`, operator access `enabled` |
| `/api/books` | `200` |
| 최근 production runtime error | 없음 |

## 자동/데스크톱 확인 기록

아래 항목은 2026-07-05에 Production URL 기준으로 확인했습니다.

| 항목 | 결과 |
|---|---|
| `git diff --check` | 통과 |
| `npm run lint` | 통과 |
| `npm test` | 통과, 3 files / 25 tests |
| `npm run build` | 통과 |
| Production `/api/health` | `200`, `ok: true` |
| Production `/api/books` | `200` |
| Production runtime errors | 최근 1시간 없음 |
| `npm run check:deployment:v1` | PIN 활성화 후에도 통과해야 함 |
| `REQUIRE_OPERATOR_ACCESS=1 npm run check:deployment:v1` | PIN 활성화 후 필수 통과 |
| 데스크톱 브라우저 로드 | 성공, title `도서 대여 관리` |
| 통계/대여 등록/검색 UI | 표시 확인 |
| 도서 검색 | `CNDB001` 검색 시 1건 표시 확인 |
| 상태 필터 | `연체` 필터 진입 확인 |
| 전체 목록 복귀 | `10 / 219 표시 중` 확인 |
| 브라우저 콘솔 오류 | 없음 |
| 모바일 세로 viewport | 390x844, 주요 UI 표시, 가로 오버플로 없음, 콘솔 오류 없음 |
| 모바일 가로 viewport | 844x390, 주요 UI 표시, 가로 오버플로 없음, 콘솔 오류 없음 |

## 반영 완료 항목

- `.env.example` 추가 및 `.env.local` 비커밋 구조 확인
- 목록 API 전화번호 마스킹
- GitHub Actions CI 추가: lint, test, build
- 선택형 운영자 PIN 접근 제한 코드 추가
- `/api/health` readiness endpoint 추가
- 운영자 안내서 추가: `docs/USER_GUIDE.md`
- QA 기록지 추가: `docs/DEPLOYMENT_QA_CHECKLIST_V1.md`

## 남은 운영 전 필수 게이트

### 1. 운영자 PIN 활성화

현재 Production `/api/health` 응답에서 `operatorAccess.mode`가 `enabled`입니다. 접근 제한 환경변수는 설정되었습니다.

Vercel 프로젝트 설정에서 Production 환경변수로 아래 두 값이 유지되어야 합니다.

| 변수 | 값 |
|---|---|
| `OPERATOR_ACCESS_CODE` | 운영자가 입력할 숫자/문자 접근 코드 |
| `OPERATOR_ACCESS_COOKIE_SECRET` | 충분히 긴 임의 secret 문자열 |

주의:
- 두 변수가 모두 있어야 PIN 게이트가 활성화됩니다.
- 접근 코드는 저장소, 문서, 채팅 로그에 남기지 않습니다.
- 값 변경 후에는 Production을 재배포해야 기존 배포에 반영됩니다.

활성화 확인:

```bash
curl -sS https://book-rental-api-seven.vercel.app/api/health
```

기대 결과:

```json
{
  "ok": true,
  "checks": {
    "operatorAccess": {
      "ok": true,
      "mode": "enabled"
    }
  }
}
```

추가 확인:
- `/` 접속 시 `/operator-access`로 이동한다.
- 올바른 접근 코드를 입력하면 메인 화면에 진입한다.
- 잘못된 접근 코드는 한국어 오류를 보여준다.

반복 검증 명령:

```bash
REQUIRE_OPERATOR_ACCESS=1 npm run check:deployment:v1
```

PIN 활성화 전에는 아래 명령으로 현재 Production 상태를 확인할 수 있습니다.

```bash
npm run check:deployment:v1
```

### 2. 실기기 QA 수행

`docs/DEPLOYMENT_QA_CHECKLIST_V1.md`를 복사하거나 그대로 작성해 아래 환경을 확인합니다.

- 데스크톱 Chrome
- iOS Safari
- Android Chrome

특히 바코드 스캔은 HTTPS Production URL에서만 최종 확인합니다.

필수 확인:
- 카메라 권한 요청
- `CNDB` 코드 인식
- 잘못된 바코드 한국어 오류
- 회원/비회원 대여 등록
- 도서 목록 반납
- 최근 대여 빠른 반납
- 모바일 세로/가로 회전 시 레이아웃 겹침 없음

### 3. 운영자 전달

운영자에게 전달할 항목:

- Production URL
- 운영자 접근 코드
- `docs/USER_GUIDE.md`
- 문제 발생 시 전달할 정보: 발생 시각, 접속 URL, 수행한 작업, 화면 캡처

## 현재 완료 판정

배포 자체와 운영자 PIN 환경변수 활성화는 완료되었습니다. 남은 완료 조건은 PIN 제출 리다이렉트 핫픽스가 Production에 배포되어 `REQUIRE_OPERATOR_ACCESS=1 npm run check:deployment:v1`이 통과하고, 실기기 카메라 스캔 QA가 기록되는 것입니다.
