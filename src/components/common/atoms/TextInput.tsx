import { InputHTMLAttributes, useRef } from "react";
import { styled } from "styled-components";
import { ICustomStyle } from "types/style";
import { Colors } from "utils/constants/colors";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    ICustomStyle {
  inputSize: "long" | "medium" | "short";
  required?: boolean;
}

const Input = styled.input.attrs(() => ({
  type: "text",
}))<InputProps>`
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  width: ${(props) => {
    switch (props.inputSize) {
      case "long":
        return "100%";
      case "medium":
        return "290px";
      case "short":
        return "180px";
    }
  }};
  height: 48px;
  padding: 0 20px;
  box-sizing: border-box;

  ::placeholder {
    color: ${Colors.placeholder};
  }

  ${(props) => props.customStyle};
`;

function TextInput({
  inputSize,
  placeholder,
  required = false,
  customStyle,
  ...restProps
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Input
      customStyle={customStyle}
      required={required}
      inputSize={inputSize}
      placeholder={placeholder}
      ref={inputRef}
      {...restProps}
    />
  );
}

export default TextInput;
