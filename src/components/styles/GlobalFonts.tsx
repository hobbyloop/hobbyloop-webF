import { createGlobalStyle } from "styled-components";
import Font_Black from "fonts/Pretendard-Black.woff";
import Font_Bold from "fonts/Pretendard-Bold.woff";
import Font_ExtraBold from "fonts/Pretendard-ExtraBold.woff";
import Font_ExtraLight from "fonts/Pretendard-ExtraLight.woff";
import Font_Light from "fonts/Pretendard-Light.woff";
import Font_Medium from "fonts/Pretendard-Medium.woff";
import Font_Regular from "fonts/Pretendard-Regular.woff";
import Font_SemiBold from "fonts/Pretendard-SemiBold.woff";
import Font_Thin from "fonts/Pretendard-Thin.woff";

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Font_Black';
        font-display: SWAP;
        src: url(${Font_Black});
    }
    @font-face {
        font-family: 'Font_Bold';
        font-display: fallback;
        src: url(${Font_Bold});
    }
    @font-face {
        font-family: 'Font_ExtraBold';
        font-display: fallback;
        src: url(${Font_ExtraBold});
    }
    @font-face {
        font-family: 'Font_ExtraLight';
        font-display: fallback;
        src: url(${Font_ExtraLight});
    }
    @font-face {
        font-family: 'Font_Light';
        font-display: fallback;
        src: url(${Font_Light});
    }
    @font-face {
        font-family: 'Font_Medium';
        font-display: fallback;
        src: url(${Font_Medium});
    }
    @font-face {
        font-family: 'Font_Regular';
        font-display: fallback;
        src: url(${Font_Regular});
    }
    @font-face {
        font-family: 'Font_SemiBold';
        font-display: fallback;
        src: url(${Font_SemiBold});
    }
    @font-face {
        font-family: 'Font_Thin';
        font-display: fallback;
        src: url(${Font_Thin});
    }
`;
