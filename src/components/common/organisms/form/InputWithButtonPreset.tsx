import styled from "styled-components";
import FieldSetTemplate from "./FieldSetTemplate";
import { ComponentProps, forwardRef } from "react";
import InputWithButton from "components/common/molecules/InputWithButton";

type InputWithButtonFactory = ComponentProps<typeof InputWithButton>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  factory: {
    onChange: (v: string) => void;
    element: InputWithButtonFactory;
  };
}

/** formType === "inputWithButton" */
const InputWithButtonPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, factory }, ref) => {
    const { onChange, element } = factory;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <FlexContainer>
          <InputWithButton
            {...element}
            onChange={(e) => {
              onChange(e.target.value);
            }}
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
