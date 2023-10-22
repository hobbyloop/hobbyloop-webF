import { PropsWithChildren } from "react";
import MediaQuery from "react-responsive";
import { Breakpoint } from "utils/constants/breakpoint";

/** 데스크탑 breakpoint 렌더링 */
const Desktop = ({ children }: PropsWithChildren) => {
  return (
    <MediaQuery minWidth={Breakpoint.desktop_start}>{children}</MediaQuery>
  );
};

export default Desktop;
