import styled from "styled-components";
import Label from "../atoms/Label";
import TextInput from "../atoms/TextInput";

interface LabeledInputProps {
  labelText: string;
  inputPlaceholder: string;
  required?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function LabeledInput({
  labelText,
  inputPlaceholder,
  required,
}: LabeledInputProps) {
  return (
    <Container>
      <Label>{labelText}</Label>
      <TextInput
        inputSize="long"
        placeholder={inputPlaceholder}
        required={required}
      />
    </Container>
  );
}

export default LabeledInput;
