import styled from "styled-components";
import FieldSetTemplate from "./FieldSetTemplate";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";
import InputWithButton from "components/common/molecules/InputWithButton";

type InputWithButtonProps = Omit<
  ComponentProps<typeof InputWithButton>,
  "value" | "onChange"
>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    value?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    props: InputWithButtonProps;
  };
}

/** formType === "inputWithButton" */
const InputWithButtonPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, inputElement }, ref) => {
    const { value, onChange, props } = inputElement;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <FlexContainer>
          <InputWithButton {...props} onChange={onChange} value={value} />
        </FlexContainer>
      </FieldSetTemplate>
    );
  },
);

InputWithButtonPreset.displayName = "InputWithButtonPreset";

export default InputWithButtonPreset;

const FlexContainer = styled.div`
  display: flex;
  gap: 8px;
`;
