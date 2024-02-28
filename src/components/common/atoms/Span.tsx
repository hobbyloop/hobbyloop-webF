import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { ICustomStyle } from "types/style";
import { Colors } from "utils/constants/colors";

/**
 *
 * @description span 컴포넌트 스타일 추가
 */
function Span({ children }: PropsWithChildren) {
  return <StyledSpan>{children}</StyledSpan>;
}

const StyledSpan = styled.span<ICustomStyle>`
  font-size: 12px;
  color: ${Colors.white_F};
  ${(props) => props.customStyle};
`;

export default Span;
