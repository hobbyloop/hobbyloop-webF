import { createGlobalStyle } from "styled-components";

export const GlobalFonts = createGlobalStyle`
  @font-face {
  font-family: 'Pretendard';
  /* font-weight: 600; */
  font-display: swap;
  src: url('/fonts/Pretendard-Black.woff2') format('woff2'), url('/fonts/Pretendard-Black.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  /* font-weight: 700; */
  font-display: swap;
  src: url('/fonts/Pretendard-Bold.woff2') format('woff2'), url('/fonts/Pretendard-Bold.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  /* font-weight: 800; */
  font-display: swap;
  src: url('/fonts/Pretendard-ExtraBold.woff2') format('woff2'), url('/fonts/Pretendard-ExtraBold.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  /* font-weight: 700; */
  font-display: swap;
  src: url('/fonts/Pretendard-Light.woff2') format('woff2'), url('/fonts/Pretendard-Light.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  /* font-weight: 500; */
  font-display: swap;
  src: url('/fonts/Pretendard-Medium.woff2') format('woff2'), url('/fonts/Pretendard-Medium.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  /* font-weight: 400; */
  font-display: swap;
  src: url('/fonts/Pretendard-Regular.woff2') format('woff2'), url('/fonts/Pretendard-Regular.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  /* font-weight: 600; */
  font-display: swap;
  src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2'), url('/fonts/Pretendard-SemiBold.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  /* font-weight: 800; */
  font-display: swap;
  src: url('/fonts/Pretendard-Thin.woff2') format('woff2'), url('/fonts/Pretendard-Thin.woff') format('woff');
}   

* {
    font-family: 'Pretendard';
}
`;
