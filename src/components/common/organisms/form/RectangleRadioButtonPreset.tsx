import styled from "styled-components";
import FieldSetTemplate from "./FieldSetTemplate";
import { ComponentProps, forwardRef } from "react";
import RectangleRadioButton from "components/common/atoms/RectangleRadioButton";

type RectangleRadioButtonFactory = Omit<
  ComponentProps<typeof RectangleRadioButton>,
  "name" | "onChange" | "labelNumber"
> &
  Required<Pick<ComponentProps<typeof RectangleRadioButton>, "value">>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  factory: {
    name: string;
    onChange: (v: string) => void;
    isInline?: boolean;
    /**
     * 라벨에 넘버링 기능을 사용 할 것인지 여부
     * @default false
     * */
    isLabelNumbering?: boolean;
    elements: RectangleRadioButtonFactory[];
  };
}

/** formType === "rectangleRadio" */
const RectangleRadioButtonPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, factory }, ref) => {
    const {
      name,
      onChange,
      isInline = true,
      isLabelNumbering = false,
      elements,
    } = factory;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <FlexContainer inline={isInline}>
          {elements.map(({ ...rest }, idx) => (
            <RectangleRadioButton
              {...rest}
              inline={isInline}
              key={name + rest.value}
              name={name}
              labelNumber={isLabelNumbering ? idx + 1 : undefined}
              onChange={(e) => onChange(e.target.value)}
            />
          ))}
        </FlexContainer>
      </FieldSetTemplate>
    );
  },
);

RectangleRadioButtonPreset.displayName = "RadioButtonPreset";
export default RectangleRadioButtonPreset;

const FlexContainer = styled.div<{ inline: boolean }>`
  display: flex;
  gap: ${(props) => (props.inline ? "8px" : "16px")};
  flex-direction: ${(props) => (props.inline ? "row" : "column")};
`;
