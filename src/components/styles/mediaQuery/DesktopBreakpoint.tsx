import { PropsWithChildren } from "react";
import MediaQuery from "react-responsive";
import { Breakpoint } from "utils/constants/breakpoint";

/** 데스크탑 breakpoint 렌더링 */
const DesktopBreakpoint = ({ children }: PropsWithChildren) => {
  return (
    <MediaQuery minWidth={Breakpoint.DESKTOP_START}>{children}</MediaQuery>
  );
};

export default DesktopBreakpoint;
