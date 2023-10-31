import { InputHTMLAttributes, forwardRef, useId } from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * 라벨 (내부 텍스트)
   */
  label: string;
}

const RectangleCheckbox = forwardRef<HTMLInputElement, Props>(
  ({ id, label, ...rest }, ref) => {
    const uniqueId = useId();
    const checkboxId = id ?? uniqueId; // id를 지정했다면 그대로 사용, 지정하지 않았다면 uniqueId 사용

    return (
      <Container>
        <Input {...rest} id={checkboxId} ref={ref} />
        <Label htmlFor={checkboxId}>{label}</Label>
      </Container>
    );
  },
);

RectangleCheckbox.displayName = "RadioButton";
export default RectangleCheckbox;

const Container = styled.div`
  position: relative;
  height: 48px;
  display: flex;
  align-items: center;
`;

const Input = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  display: none;

  &:checked + label {
    border: 1px solid ${Colors.green};
    background-color: ${Colors.green};
    color: ${Colors.white};
  }
`;

const Label = styled.label`
  height: 100%;
  padding: 0 20px;
  margin: 0;
  box-sizing: border-box;
  cursor: pointer;
  /* TODO 색상 변수로 빼기 */
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background-color: ${Colors.white};
  color: ${Colors.black};
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  line-height: 48px;
`;
