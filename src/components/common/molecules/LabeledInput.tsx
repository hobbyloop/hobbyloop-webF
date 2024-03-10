import styled, { CSSObject } from "styled-components";
import Atom from "components/common/atoms";
import { LabelConfig } from "components/common/atoms/Label";
import { InputConfig } from "components/common/atoms/TextInput";

interface Props {
  isRequired?: boolean;
  labelConfig?: LabelConfig;
  inputConfig?: InputConfig;
  labelStyle?: CSSObject;
  inputStyle?: CSSObject;
}

function LabeledInput({
  isRequired,
  labelConfig,
  labelStyle,
  inputConfig,
  inputStyle,
}: Props) {
  return (
    <Container>
      <Atom.Label
        isRequired={isRequired}
        {...labelConfig}
        customStyle={labelStyle}
      />
      <Atom.TextInput {...inputConfig} customStyle={inputStyle} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default LabeledInput;
