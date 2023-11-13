import FieldSetTemplate from "./FieldSetTemplate";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";
import TextInput from "components/common/atoms/TextInput";

type TextInputProps = Omit<
  ComponentProps<typeof TextInput>,
  "onChange" | "value"
>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    props?: TextInputProps;
  };
}

/** formType === "textInput" */
const TextInputPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, inputElement }, ref) => {
    const { props = { inputSize: "long" }, value, onChange } = inputElement;
    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <TextInput {...props} onChange={onChange} value={value} />
      </FieldSetTemplate>
    );
  },
);

TextInputPreset.displayName = "TextInputPreset";
export default TextInputPreset;
