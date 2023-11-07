import { useMediaQuery } from "react-responsive";

/**
 * breakpoint(800px)를 기준으로 데스크탑, 모바일 여부를 반환
 */
const useBreakpoint = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });
  const isMobile = !isDesktop;

  return {
    /**
     * 800px ~
     */
    isDesktop,
    /**
     * ~ 799px
     */
    isMobile,
  };
};

export default useBreakpoint;
