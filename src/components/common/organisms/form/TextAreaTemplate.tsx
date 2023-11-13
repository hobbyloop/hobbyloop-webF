import TextArea from "components/common/atoms/TextArea";
import FieldSetTemplate from "./FieldSetTemplate";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";

type TextAreaProps = Omit<
  ComponentProps<typeof TextArea>,
  "value" | "onChange"
>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    props?: TextAreaProps;
  };
}

/** formType === "textarea" */
const TextAreaPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, inputElement }, ref) => {
    const { props = {}, value, onChange } = inputElement;
    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <TextArea {...props} onChange={onChange} value={value} />
      </FieldSetTemplate>
    );
  },
);

TextAreaPreset.displayName = "TextAreaPreset";
export default TextAreaPreset;
