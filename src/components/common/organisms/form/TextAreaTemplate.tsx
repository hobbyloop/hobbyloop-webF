import TextArea from "components/common/atoms/TextArea";
import FieldSetTemplate from "./FieldSetTemplate";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";
import useForm from "hooks/useForm";

type TextAreaProps = Omit<
  ComponentProps<typeof TextArea>,
  "value" | "onChange"
>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    props?: TextAreaProps;
  };
}

/** formType === "textarea" */
const TextAreaPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputElement }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string;

    const { props = {}, onChange } = inputElement;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <TextArea
          {...props}
          onChange={(e) => {
            setValue(e.target.value);
            onChange?.(e);
          }}
          value={castedValue}
        />
      </FieldSetTemplate>
    );
  },
);

TextAreaPreset.displayName = "TextAreaPreset";
export default TextAreaPreset;
