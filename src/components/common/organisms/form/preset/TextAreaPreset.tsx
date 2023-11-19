import TextArea from "components/common/atoms/TextArea";
import FieldSetTemplate from "../FieldSetTemplate";
import { ComponentProps, forwardRef } from "react";
import useForm from "hooks/useForm";

type TextAreaProps = Omit<ComponentProps<typeof TextArea>, "value">;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputFactory: TextAreaProps;
}

/** formType === "textarea" */
const TextAreaPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputFactory }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <TextArea
          {...inputFactory}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={castedValue}
        />
      </FieldSetTemplate>
    );
  },
);

TextAreaPreset.displayName = "TextAreaPreset";
export default TextAreaPreset;
