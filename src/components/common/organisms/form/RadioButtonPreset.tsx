import styled from "styled-components";
import FieldSetTemplate from "./FieldSetTemplate";
import LabeledRadioButton from "../../molecules/LabeledRadioButton";
import { ComponentProps, forwardRef } from "react";

/**
 * TODO: Template 어느정도 구성되면 제거 ㄱ (동현)
 * 개발 컨셉
 *
 * Preset
 * - 외부 atom, molecule, organism 합쳐서 템플릿을 구성하는 컴포넌트
 * - Preset에서는 외부에서 받은 props를 가공하여 내부 컴포넌트에 전달
 * - (중요!) 개발자가 사용할 타입을 정의해줌 (ex. RadioButtonFactory, FieldSetTemplateFactory)
 *   - Preset을 사용하는 곳(FormField)에서는 FormField를 사용하는 곳에서 만들어준 객체를 그대로 bypass해줌
 */

type RadioButtonFactory = Omit<
  ComponentProps<typeof LabeledRadioButton>,
  "name" | "onChange"
> &
  Required<Pick<ComponentProps<typeof LabeledRadioButton>, "value">>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  factory: {
    name: string;
    onChange: (v: string) => void;
    elements: RadioButtonFactory[];
  };
}

/** formType === "radio" */
const RadioButtonPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, factory }, ref) => {
    const { name, onChange, elements } = factory;
    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <FlexContainer>
          {elements.map(({ ...rest }) => (
            <LabeledRadioButton
              {...rest}
              key={name + rest.value}
              name={name}
              onChange={(e) => onChange(e.target.value)}
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
