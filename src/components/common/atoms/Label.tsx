import { ReactComponent as Info } from "assets/ic_info.svg";
import { LabelHTMLAttributes } from "react";
import styled from "styled-components";
import { ICustomStyle } from "types/style";
import { Colors } from "utils/constants/colors";

export interface LabelConfig extends LabelHTMLAttributes<HTMLLabelElement> {
  showInfo?: boolean;
  isRequired?: boolean;
}

type Props = LabelConfig & ICustomStyle;

function Label({
  htmlFor,
  children,
  isRequired,
  showInfo,
  customStyle,
}: Props) {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      isRequired={isRequired}
      showInfo={showInfo}
      customStyle={customStyle}
    >
      {children}
      {isRequired && <RequiredIndicator>*</RequiredIndicator>}
      {showInfo && <StyledInfo width="16px" height="16px" />}
    </StyledLabel>
  );
}

const StyledLabel = styled.label<LabelConfig & ICustomStyle>`
  display: flex;
  align-items: center;
  height: 11px;
  color: ${Colors.black_14};
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;

  ${(props) => props.customStyle}
`;

const RequiredIndicator = styled.span`
  color: ${Colors.red_EB2323};
  font-size: 16px;
  margin-left: 4px;
`;

const StyledInfo = styled(Info)`
  width: 24px;
  height: 24px;
  line-height: 24px;
  margin-left: 6px;
  padding-bottom: 2px;
`;

export default Label;
