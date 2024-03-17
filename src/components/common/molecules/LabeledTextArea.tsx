import Atom from "components/common/atoms";
import { LabelConfig } from "components/common/atoms/Label";
import styled, { CSSObject } from "styled-components";
import { TextareaConfig } from "../atoms/Textarea";

interface Props {
  isRequired?: boolean;
  labelConfig: LabelConfig;
  textareaConfig: TextareaConfig;
  labelStyle?: CSSObject;
  textareaStyle?: CSSObject;
}

function LabeledTextarea({
  isRequired,
  labelConfig,
  labelStyle,
  textareaConfig,
  textareaStyle,
}: Props) {
  return (
    <Container>
      <Atom.Label
        isRequired={isRequired}
        {...labelConfig}
        customStyle={labelStyle}
      />
      <Atom.Textarea {...textareaConfig} customStyle={textareaStyle} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default LabeledTextarea;
