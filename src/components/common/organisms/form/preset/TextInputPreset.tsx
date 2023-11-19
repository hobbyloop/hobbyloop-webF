import FieldSetTemplate from "../FieldSetTemplate";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";
import TextInput from "components/common/atoms/TextInput";
import useForm from "hooks/useForm";

type TextInputProps = Omit<
  ComponentProps<typeof TextInput>,
  "onChange" | "value"
>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    // (validation 함수, boolean or newValue 반환값 제공해주기) onChange의 두번째 파라미터로 setter 넘겨줄수도 있긴 함..
    onChange?: ChangeEventHandler<HTMLInputElement>;
    props?: TextInputProps;
  };
}

/** formType === "textInput" */
const TextInputPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputElement }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string;

    const { props = { inputSize: "long" }, onChange } = inputElement;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <TextInput
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

TextInputPreset.displayName = "TextInputPreset";
export default TextInputPreset;
