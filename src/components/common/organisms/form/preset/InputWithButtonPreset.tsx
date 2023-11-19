import styled from "styled-components";
import FieldSetTemplate from "../FieldSetTemplate";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";
import InputWithButton from "components/common/molecules/InputWithButton";
import useForm from "hooks/useForm";

type InputWithButtonProps = Omit<
  ComponentProps<typeof InputWithButton>,
  "value" | "onChange"
>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    props: InputWithButtonProps;
  };
}

/** formType === "inputWithButton" */
const InputWithButtonPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputElement }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string;

    const { onChange, props } = inputElement;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <FlexContainer>
          <InputWithButton
            {...props}
            onChange={(e) => {
              setValue(e.target.value);
              onChange?.(e);
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
