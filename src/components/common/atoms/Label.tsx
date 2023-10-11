import React from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";
import { ReactComponent as Info } from "assets/ic_info.svg";

interface LabelProps extends StyledLabelProps {
  children: React.ReactNode;
}

interface StyledLabelProps {
  required?: boolean;
  showInfo?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: flex;
  align-items: center;
  height: 11px;
  color: ${Colors.black};
  font-family: "Font_Black";
  font-size: 16px;
  font-weight: 700;
`;

const RequiredIndicator = styled.span`
  color: ${Colors.indicator};
  font-size: 16px;
  margin-left: 4px;
`;

const StyledInfo = styled(Info)`
  width: 24px;
  height: 24px;
  line-height: 24px;
  margin-left: 6px;
  padding-bottom: 2px;

  /* background-color: black; */
`;
function Label({ children, required, showInfo }: LabelProps) {
  return (
    <StyledLabel required={required} showInfo={showInfo}>
      {children}
      {required && <RequiredIndicator>*</RequiredIndicator>}
      {showInfo && <StyledInfo width="16px" height="16px" />}
    </StyledLabel>
  );
}

export default Label;
