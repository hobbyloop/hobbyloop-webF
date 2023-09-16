import React from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

interface LabelProps extends StyledLabelProps {
  children: React.ReactNode;
}

interface StyledLabelProps {
  required?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  color: ${Colors.inputLabel};
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
`;

const RequiredIndicator = styled.span`
  color: ${Colors.indicator};
  margin-left: 4px;
`;

function Label({ children, required }: LabelProps) {
  return (
    <StyledLabel required={required}>
      {children}
      {required && <RequiredIndicator>*</RequiredIndicator>}
    </StyledLabel>
  );
}

export default Label;
