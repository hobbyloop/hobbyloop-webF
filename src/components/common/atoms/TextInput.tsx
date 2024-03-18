import { forwardRef, InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { ICustomStyle } from "types/style"; // ICustomStyle의 정확한 정의가 필요합니다.
import { Colors } from "utils/constants/colors"; // Colors의 정확한 값이 필요합니다.

export type InputConfig = InputHTMLAttributes<HTMLInputElement>;

type Props = InputConfig & ICustomStyle;

const defaultStyles = css<Props>`
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  width: ${(props) => props.width || "180px"};
  height: 48px;
  padding: 0 20px;
  box-sizing: border-box;

  ::placeholder {
    color: ${Colors.gray_6C};
  }

  ${(props) => props.customStyle && css(props.customStyle)}
`;

const Input = styled.input<Props>`
  ${defaultStyles}
`;

const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <Input ref={ref} {...props} />;
});

TextInput.displayName = "TextInput";

export default TextInput;
