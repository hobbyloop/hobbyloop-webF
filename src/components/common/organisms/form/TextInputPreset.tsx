import FieldSetTemplate from "./FieldSetTemplate";
import { ComponentProps, forwardRef } from "react";
import TextInput from "components/common/atoms/TextInput";

type TextInputFactory = ComponentProps<typeof TextInput>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  factory: {
    onChange: (v: string) => void;
    element: TextInputFactory;
  };
}

/** formType === "textInput" */
const TextInputPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, factory }, ref) => {
    const { onChange, element } = factory;
    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <TextInput {...element} onChange={(e) => onChange(e.target.value)} />
      </FieldSetTemplate>
    );
  },
);

TextInputPreset.displayName = "TextInputPreset";
export default TextInputPreset;
