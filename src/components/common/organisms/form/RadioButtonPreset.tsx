import styled from "styled-components";
import FieldSetTemplate from "./FieldSetTemplate";
import LabeledRadioButton from "../../molecules/LabeledRadioButton";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";
import useForm from "hooks/useForm";

type RadioButtonProps = Omit<
  ComponentProps<typeof LabeledRadioButton>,
  "name" | "onChange"
> &
  Required<Pick<ComponentProps<typeof LabeledRadioButton>, "value">>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    name: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    propsList: RadioButtonProps[];
  };
}

/** formType === "radio" */
const RadioButtonPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputElement }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string;

    const { name, onChange, propsList } = inputElement;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <FlexContainer>
          {propsList.map(({ ...prop }) => (
            <LabeledRadioButton
              {...prop}
              key={name + prop.value}
              name={name}
              checked={castedValue === prop.value}
              onChange={(e) => {
                setValue(e.target.value);
                onChange?.(e);
              }}
            />
          ))}
        </FlexContainer>
      </FieldSetTemplate>
    );
  },
);

RadioButtonPreset.displayName = "RadioButtonPreset";
export default RadioButtonPreset;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
