import styled from "styled-components";
import FieldSetTemplate from "./FieldSetTemplate";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";
import RectangleRadioButton from "components/common/atoms/RectangleRadioButton";

type RectangleRadioButtonProps = Omit<
  ComponentProps<typeof RectangleRadioButton>,
  "name" | "onChange" | "labelNumber"
> &
  Required<Pick<ComponentProps<typeof RectangleRadioButton>, "value">>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    name: string;
    value?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    isInline?: boolean;
    /**
     * 라벨에 넘버링 기능을 사용 할 것인지 여부
     * @default false
     * */
    isLabelNumbering?: boolean;
    propsList: RectangleRadioButtonProps[];
  };
}

/** formType === "rectangleRadio" */
const RectangleRadioButtonPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, inputElement }, ref) => {
    const {
      name,
      value,
      onChange,
      isInline = true,
      isLabelNumbering = false,
      propsList,
    } = inputElement;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <FlexContainer inline={isInline}>
          {propsList.map(({ ...prop }, idx) => (
            <RectangleRadioButton
              {...prop}
              inline={isInline}
              key={name + prop.value}
              name={name}
              labelNumber={isLabelNumbering ? idx + 1 : undefined}
              checked={value === prop.value}
              onChange={onChange}
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
