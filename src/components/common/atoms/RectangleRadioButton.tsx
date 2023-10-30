import { InputHTMLAttributes, forwardRef, useId } from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * inline 스타일인지 여부
   * @description true - width: auto
   * @description false - width: 100%
   * @default true
   */
  inline?: boolean;
  /**
   * 라벨 (내부 텍스트)
   */
  label: string;
}

// reference) https://stackoverflow.com/a/4642152
const RectangleRadioButton = forwardRef<HTMLInputElement, Props>(
  ({ id, label, inline = true, ...rest }, ref) => {
    const uniqueId = useId();
    const radioButtonId = id ?? uniqueId; // id를 지정했다면 그대로 사용, 지정하지 않았다면 uniqueId 사용

    return (
      <Container inline={inline}>
        <Input {...rest} id={radioButtonId} ref={ref} />
        <Label htmlFor={radioButtonId} inline={inline}>
          {label}
        </Label>
      </Container>
    );
  },
);

RectangleRadioButton.displayName = "RadioButton";
export default RectangleRadioButton;

const Container = styled.div<{ inline: boolean }>`
  position: relative;
  width: ${({ inline }) => (inline ? "auto" : "100%")};
  min-height: 48px;
  display: flex;
  align-items: center;
`;

const Input = styled.input.attrs(() => ({
  type: "radio",
}))`
  display: none;

  &:checked + label {
    border: 1px solid ${Colors.green};
    background-color: ${Colors.green};
    color: ${Colors.white};
  }
`;

const Label = styled.label<{ inline: boolean }>`
  width: 100%;
  height: 100%;
  padding: 12px 20px;
  margin: 0;
  box-sizing: border-box;
  cursor: pointer;
  /* TODO 색상 변수로 빼기 */
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background-color: ${Colors.white};
  display: flex;
  align-items: center;

  color: ${({ inline }) => (inline ? Colors.black : Colors.placeholder)};
  font-size: ${({ inline }) => (inline ? "16px" : "14px")};
  font-weight: 500;
  line-height: 21px;
`;
