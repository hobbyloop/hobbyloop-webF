import { InputHTMLAttributes, forwardRef, useId } from "react";
import styled from "styled-components";
import RadioButton from "../atoms/RadioButton";
import { Colors } from "utils/constants/colors";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const LabeledRadioButton = forwardRef<HTMLDivElement, Props>(
  ({ label, id, name, ...rest }, ref) => {
    const uniqueId = useId();
    const radioButtonId = id ?? uniqueId; // id를 지정했다면 그대로 사용, 지정하지 않았다면 uniqueId 사용

    return (
      <Container ref={ref}>
        <RadioButton {...rest} id={radioButtonId} name={name} />
        <Label htmlFor={radioButtonId}>{label}</Label>
      </Container>
    );
  },
);

LabeledRadioButton.displayName = "LabeledRadioButton";
export default LabeledRadioButton;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  color: ${Colors.black_14};
  font-size: 16px;
  letter-spacing: -0.02;
  font-weight: 500;
  cursor: pointer;
`;
