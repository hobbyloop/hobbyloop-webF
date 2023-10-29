import TextArea from "components/common/atoms/TextArea";
import FieldSetTemplate from "./FieldSetTemplate";
import { ComponentProps, forwardRef } from "react";

type TextAreaFactory = ComponentProps<typeof TextArea>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  factory: {
    onChange: (v: string) => void;
    element?: TextAreaFactory;
  };
}

/** formType === "textarea" */
const TextAreaPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, factory }, ref) => {
    const { onChange, element } = factory;
    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <TextArea {...element} onChange={(e) => onChange(e.target.value)} />
      </FieldSetTemplate>
    );
  },
);

TextAreaPreset.displayName = "TextAreaPreset";
export default TextAreaPreset;
