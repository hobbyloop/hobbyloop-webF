import styled from "styled-components";
import FieldSetTemplate from "./FieldSetTemplate";
import { ComponentProps, forwardRef } from "react";
import RectangleCheckbox from "components/common/atoms/RectangleCheckbox";

type RectangleCheckboxFactory = Omit<
  ComponentProps<typeof RectangleCheckbox>,
  "name" | "onChange"
> &
  Required<Pick<ComponentProps<typeof RectangleCheckbox>, "value">>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  factory: {
    name: string;
    onChange: (v: string, isChecked: boolean) => void;
    elements: RectangleCheckboxFactory[];
  };
}

/** formType === "rectangleCheckbox" */
const RectangleCheckboxPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, factory }, ref) => {
    const { name, onChange, elements } = factory;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <FlexContainer>
          {elements.map(({ ...rest }) => (
            <RectangleCheckbox
              {...rest}
              key={name + rest.value}
              name={name}
              onChange={(e) => {
                onChange(e.target.value, e.target.checked);
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
