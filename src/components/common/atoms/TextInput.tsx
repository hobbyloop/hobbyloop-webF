import { InputHTMLAttributes, useRef } from "react";
import { styled } from "styled-components";
import { Colors } from "utils/constants/colors";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize: "long" | "medium" | "short";
  placeholder: string;
  required?: boolean;
}

const Input = styled.input.attrs(() => ({
  type: "text",
}))<InputProps>`
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  font-family: "Font_Black";
  font-size: 16px;
  font-weight: 500;
  width: ${(props) => {
    switch (props.inputSize) {
      case "long":
        return "588px";
      case "medium":
        return "290px";
      case "short":
        return "180px";
    }
  }};
  height: 48px;
  padding: 0 20px;

  ::placeholder {
    color: ${Colors.placeholder};
  }
`;

function TextInput({
  inputSize,
  placeholder,
  required = false,
  ...restProps
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Input
      required={required}
      inputSize={inputSize}
      placeholder={placeholder}
      ref={inputRef}
      {...restProps}
    />
  );
}

export default TextInput;
