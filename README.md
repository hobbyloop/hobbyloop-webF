## 사용 언어 및 라이브러리

- **언어/JS라이브러리:** TypeScript/React
- **라이브러리:**
  - @tanstack/react-query
  - axios
  - dayjs
- **전역 상태 관리:** zustand
- **CSS in JS:** styled-components

## 환경

- **Node 버전:** 20.6.0
- **Yarn 버전:** 1.22.19

## 코드 작성 Convention

- **상수:** colors\_색상계열\_EE22EE
- **변수명:** 동사X, 배열: ~s(복수형)
- **함수명:** 동사O
- **로직 종료 후에는 한 줄 띄우기**
- **재사용되는 함수, 컴포넌트에는 JSDoc 주석 추가**(description, param, return)
- **로직 순서:** import문 -> type 선언문 -> 상수 선언 등 컴포넌트 외부 로직 -> 컴포넌트 로직 -> export문
- **주석:** 컴포넌트, 훅을 작성할 때에는 JSDoc으로 description, param에 대한 설명 추가

## 코드 구조 및 디자인 시스템

- **Atomic Design 구조 사용**
- **Root.tsx:** 컨테이너 컴포넌트
- **App.tsx:** 라우팅
- **assets:** production에 사용되는 것은 src/assets, 아닌 것은 public/assets
- **components/common:** Atomic Design 구조를 따라 atom, molecules, organisms, templates로 구성
- **components/pages:** 페이지 단위로 나눠놓은 폴더. 특정 페이지에서만 필요한 컴포넌트는 해당 페이지와 같은 디렉토리에서 작성
- **components/styles:** GlobalStyles, GlobalFonts, 반응형 설정
- **pages/components:** 해당 페이지에서 재사용되는 컴포넌트

- **styled-components와 atomic components 구분:** atomic components는 네임스페이스를 붙여 구분 (Atom.TextInput, Molecule.LabeledInput)
- **타입 선언:** 컴포넌트로 전해지는 prop 타입은 해당 컴포넌트 내부에 작성

## Git Commit Convention

- Commit message는 다음과 같은 규칙으로 작성
  - **Add:** UI 추가, 개발 관련 코드 추가
  - **Fix:** 오타, 버그 수정
  - **Update:** 기존 부분 수정
  - **Feat:** 새로운 기능 추가
  - **Design:** UI 변경
  - **!HotFix:** 급하게 치명적인 버그 수정
  - **Docs:** 개발 문서 추가/수정
  - **Test:** 테스트 코드 작성
  - **Refactor:** 코드/구조 리팩토링
  - **Rename:** 폴더/파일명 변경
  - **Remove:** 불필요 파일/코드 삭제
