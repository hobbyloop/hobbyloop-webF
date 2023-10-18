import React from "react";
import styled from "styled-components";
import Label from "../atoms/Label";
import TextInput from "../atoms/TextInput";

interface LabeledInputProps {
  labelText: string;
  inputId: string;
  placeholder: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function LabeledInput({ labelText, inputId, placeholder }: LabeledInputProps) {
  return (
    <Container>
      <Label htmlFor={inputId}>{labelText}</Label>
      <TextInput inputSize="long" id={inputId} placeholder={placeholder} />
    </Container>
  );
}

export default LabeledInput;
