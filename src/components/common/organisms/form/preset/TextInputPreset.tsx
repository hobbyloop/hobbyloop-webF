import FieldSetTemplate from "../FieldSetTemplate";
import { ComponentProps, forwardRef } from "react";
import TextInput from "components/common/atoms/TextInput";
import useForm from "hooks/useForm";

// (validation 함수, boolean or newValue 반환값 제공해주기) onChange의 두번째 파라미터로 setter 넘겨줄수도 있긴 함..
type TextInputProps = Omit<ComponentProps<typeof TextInput>, "value">;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputFactory: TextInputProps;
}

/** formType === "textInput" */
const TextInputPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputFactory }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <TextInput
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

TextInputPreset.displayName = "TextInputPreset";
export default TextInputPreset;
