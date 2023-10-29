import { ComponentProps, Ref, forwardRef } from "react";
import RadioButtonPreset from "./form/RadioButtonPreset";
import FieldSetTemplate from "./form/FieldSetTemplate";

type TemplateId = "radio";

type FieldsetOptions = ComponentProps<typeof FieldSetTemplate>;
type RadioButtonFactory = ComponentProps<typeof RadioButtonPreset>["factory"];

interface Props<T extends TemplateId> {
  /** 사용할 form template의 id를 입력  */
  templateId: T;

  /** fieldset 옵션 */
  fieldsetOptions?: FieldsetOptions;

  /** templateId에 매핑된 컴포넌트를 사용하기 위해 필요한 값 (구성요소) */
  factory: T extends "radio" ? RadioButtonFactory : never;
}

const FormItem4Ref = <T extends TemplateId>(
  { fieldsetOptions, templateId, factory }: Props<T>,
  ref: Ref<HTMLDivElement>,
) => {
  // radio button fieldset
  if (templateId === "radio") {
    return (
      <RadioButtonPreset
        ref={ref}
        factory={{ ...(factory as RadioButtonFactory) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  return <></>;
};

const FormItem = forwardRef(FormItem4Ref) as <T extends TemplateId>(
  props: Props<T> & { ref?: Ref<HTMLDivElement> },
) => JSX.Element;

export default FormItem;
