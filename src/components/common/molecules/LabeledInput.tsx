import styled from "styled-components";
import Atom from "components/common/atoms";

interface LabeledInputProps {
  labelText: string;
  inputId: string;
  placeholder: string;
}

function LabeledInput({ labelText, inputId, placeholder }: LabeledInputProps) {
  return (
    <Container>
      <Atom.Label htmlFor={inputId}>{labelText}</Atom.Label>
      <Atom.TextInput inputSize="long" id={inputId} placeholder={placeholder} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default LabeledInput;
