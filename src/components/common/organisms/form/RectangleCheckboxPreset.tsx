import styled from "styled-components";
import FieldSetTemplate from "./FieldSetTemplate";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";
import RectangleCheckbox from "components/common/atoms/RectangleCheckbox";
import useForm from "hooks/useForm";

type RectangleCheckboxProps = Omit<
  ComponentProps<typeof RectangleCheckbox>,
  "name" | "onChange"
> &
  Required<Pick<ComponentProps<typeof RectangleCheckbox>, "value">>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    name: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    propsList: RectangleCheckboxProps[];
  };
}

/** formType === "rectangleCheckbox" */
const RectangleCheckboxPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputElement }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string[];

    const { name, onChange, propsList } = inputElement;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <FlexContainer>
          {propsList.map(({ ...prop }) => (
            <RectangleCheckbox
              {...prop}
              key={name + prop.value}
              name={name}
              checked={castedValue.includes(prop.value.toString())}
              onChange={(e) => {
                const { value } = e.target;
                if (castedValue.includes(value)) {
                  setValue(castedValue.filter((v) => v !== value));
                } else {
                  setValue([...castedValue, value]);
                }
                onChange?.(e);
              }}
            />
          ))}
        </FlexContainer>
      </FieldSetTemplate>
    );
  },
);

RectangleCheckboxPreset.displayName = "RectangleCheckboxPreset";
export default RectangleCheckboxPreset;

const FlexContainer = styled.div`
  display: flex;
  gap: 8px;
`;
