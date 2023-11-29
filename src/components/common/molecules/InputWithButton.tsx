import { InputHTMLAttributes, useRef } from "react";
import Input from "components/common/atoms/TextInput";
import styled from "styled-components";
import TextButton from "../atoms/TextButton";
import { Colors } from "utils/constants/colors";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  buttonText: string;
  onButtonClick: (v: string) => void;
}

function InputWithButton({
  buttonText,
  placeholder,
  onButtonClick,
  ...rest
}: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Container>
      <RightSpacingInput
        {...rest}
        ref={ref}
        inputSize="long"
        placeholder={placeholder}
      />
      <ActionButton
        type="button"
        onClick={() => {
          if (ref.current) {
            onButtonClick(ref.current.value);
          }
        }}
      >
        {buttonText}
      </ActionButton>
    </Container>
  );
}

export default InputWithButton;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  padding-right: 16px;
  box-sizing: border-box;
  background-color: ${Colors.white};
`;

const RightSpacingInput = styled(Input)`
  flex: 1;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: transparent;
`;

const ActionButton = styled(TextButton)`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border: 1px solid ${Colors.green};
  color: ${Colors.green};
  background-color: ${Colors.white};
  font-weight: bold;
  letter-spacing: -0.02em;
`;
