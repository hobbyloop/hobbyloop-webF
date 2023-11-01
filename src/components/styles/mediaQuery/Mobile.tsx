import { PropsWithChildren } from "react";
import MediaQuery from "react-responsive";
import { Breakpoint } from "utils/constants/breakpoint";

/** 모바일 breakpoint 렌더링 */
const Mobile = ({ children }: PropsWithChildren) => {
  return (
    <MediaQuery maxWidth={Breakpoint.DESKTOP_START - 1}>{children}</MediaQuery>
  );
};

export default Mobile;
