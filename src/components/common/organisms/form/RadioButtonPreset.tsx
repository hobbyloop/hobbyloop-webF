import styled from "styled-components";
import FieldSetTemplate from "./FieldSetTemplate";
import LabeledRadioButton from "../../molecules/LabeledRadioButton";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";

type RadioButtonProps = Omit<
  ComponentProps<typeof LabeledRadioButton>,
  "name" | "onChange"
> &
  Required<Pick<ComponentProps<typeof LabeledRadioButton>, "value">>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    name: string;
    value?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    propsList: RadioButtonProps[];
  };
}

/** formType === "radio" */
const RadioButtonPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, inputElement }, ref) => {
    const { name, onChange, value, propsList } = inputElement;
    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <FlexContainer>
          {propsList.map(({ ...prop }) => (
            <LabeledRadioButton
              {...prop}
              key={name + prop.value}
              name={name}
              checked={value === prop.value}
              onChange={onChange}
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
