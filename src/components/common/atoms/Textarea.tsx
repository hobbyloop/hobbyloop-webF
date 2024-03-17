import { TextareaHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";
import { ICustomStyle } from "types/style";
import { Colors } from "utils/constants/colors";

export interface TextareaConfig
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

type Props = TextareaConfig & ICustomStyle;

const Textarea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  return <StyledTextarea ref={ref} {...props} />;
});

const StyledTextarea = styled.textarea<ICustomStyle>`
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  font-size: 16px;
  padding: 8px 12px;
  margin: 5px 0;
  width: 100%;
  height: 139px;
  resize: none;

  ::placeholder {
    color: ${Colors.gray_6C};
  }

  ${(props) => props.customStyle}
`;

Textarea.displayName = "Textarea";

export default Textarea;
