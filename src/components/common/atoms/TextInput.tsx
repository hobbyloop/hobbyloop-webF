import { InputHTMLAttributes, forwardRef } from "react";
import { styled } from "styled-components";
import { ICustomStyle } from "types/style";
import { Colors } from "utils/constants/colors";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    ICustomStyle {
  inputSize: "long" | "medium" | "short";
  placeholder?: string;
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

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    { inputSize, placeholder, required = false, customStyle, ...restProps },
    ref,
  ) => {
    return (
      <Input
        customStyle={customStyle}
        required={required}
        inputSize={inputSize}
        placeholder={placeholder}
        ref={ref}
        {...restProps}
      />
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
