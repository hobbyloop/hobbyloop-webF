import styled from "styled-components";
import FieldSetTemplate from "./FieldSetTemplate";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";
import RectangleCheckbox from "components/common/atoms/RectangleCheckbox";

type RectangleCheckboxProps = Omit<
  ComponentProps<typeof RectangleCheckbox>,
  "name" | "onChange"
> &
  Required<Pick<ComponentProps<typeof RectangleCheckbox>, "value">>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    name: string;
    value?: string[];
    onChange: ChangeEventHandler<HTMLInputElement>;
    propsList: RectangleCheckboxProps[];
  };
}

/** formType === "rectangleCheckbox" */
const RectangleCheckboxPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, inputElement }, ref) => {
    const { name, value = [], onChange, propsList } = inputElement;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <FlexContainer>
          {propsList.map(({ ...prop }) => (
            <RectangleCheckbox
              {...prop}
              key={name + prop.value}
              name={name}
              checked={value.includes(prop.value.toString())}
              onChange={onChange}
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
