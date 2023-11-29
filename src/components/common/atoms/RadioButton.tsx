import { InputHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const RadioButton = forwardRef<HTMLInputElement, Props>(({ ...rest }, ref) => {
  return <Container {...rest} ref={ref} />;
});

RadioButton.displayName = "RadioButton";
export default RadioButton;

const Container = styled.input.attrs(() => ({
  type: "radio",
}))`
  width: 24px;
  height: 24px;
  /* TODO 색상 변수로 빼기 */
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:checked {
    border: 1px solid ${Colors.orange};

    &:after {
      content: "";
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${Colors.orange};
    }
  }
`;
