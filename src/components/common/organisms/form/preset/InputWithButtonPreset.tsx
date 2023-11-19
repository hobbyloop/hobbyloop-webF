import styled from "styled-components";
import FieldSetTemplate from "../FieldSetTemplate";
import { ComponentProps, forwardRef } from "react";
import InputWithButton from "components/common/molecules/InputWithButton";
import useForm from "hooks/useForm";

type InputWithButtonProps = Omit<
  ComponentProps<typeof InputWithButton>,
  "value"
>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputFactory: InputWithButtonProps;
}

/** formType === "inputWithButton" */
const InputWithButtonPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputFactory }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <FlexContainer>
          <InputWithButton
            {...inputFactory}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={castedValue}
          />
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
