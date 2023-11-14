import { ComponentProps, Ref, forwardRef } from "react";
import RadioButtonPreset from "./form/RadioButtonPreset";
import FieldSetTemplate from "./form/FieldSetTemplate";
import TextInputPreset from "./form/TextInputPreset";
import TextAreaPreset from "./form/TextAreaTemplate";
import RectangleRadioButtonPreset from "./form/RectangleRadioButtonPreset";
import RectangleCheckboxPreset from "./form/RectangleCheckboxPreset";
import InputWithButtonPreset from "./form/InputWithButtonPreset";
import DateInputPreset from "./form/DateInputPreset";
import ImageUploaderPreset from "./form/ImageUploaderPreset";

type TemplateId =
  | "radio"
  | "textInput"
  | "textarea"
  | "rectangleRadio"
  | "rectangleCheckbox"
  | "inputWithButton"
  | "dateInput"
  | "imageUploader";

type FieldsetOptions = ComponentProps<typeof FieldSetTemplate>;
// type RadioButtonProps = ComponentProps<
//   typeof RadioButtonPreset
// >["inputElement"];
type TextInputProps = ComponentProps<typeof TextInputPreset>["inputElement"];
type TextAreaProps = ComponentProps<typeof TextAreaPreset>["inputElement"];
type RectangleRadioButtonProps = ComponentProps<
  typeof RectangleRadioButtonPreset
>["inputElement"];
// type RectangleCheckboxProps = ComponentProps<
//   typeof RectangleCheckboxPreset
// >["inputElement"];
// type InputWithButtonProps = ComponentProps<
//   typeof InputWithButtonPreset
// >["inputElement"];
// type DateInputProps = ComponentProps<typeof DateInputPreset>["inputElement"];
// type ImageUploaderProps = ComponentProps<
//   typeof ImageUploaderPreset
// >["inputElement"];

interface Props<T extends TemplateId> {
  /** 사용할 form template의 id를 입력  */
  templateId: T;

  /** fieldset 옵션 */
  fieldsetOptions?: FieldsetOptions;

  /** templateId에 매핑된 컴포넌트를 사용하기 위해 필요한 값 (구성요소) */
  inputElement: // T extends "radio"
  // ? RadioButtonProps
  T extends "textInput"
    ? TextInputProps
    : T extends "textarea"
    ? TextAreaProps
    : T extends "rectangleRadio"
    ? RectangleRadioButtonProps
    : // : T extends "rectangleCheckbox"
      // ? RectangleCheckboxProps
      // : T extends "inputWithButton"
      // ? InputWithButtonProps
      // : T extends "dateInput"
      // ? DateInputProps
      // : T extends "imageUploader"
      // ? ImageUploaderProps
      never;
}

const FormItem4Ref = <T extends TemplateId>(
  { fieldsetOptions, templateId, inputElement }: Props<T>,
  ref: Ref<HTMLDivElement>,
) => {
  // radio button fieldset
  // if (templateId === "radio") {
  //   return (
  //     <RadioButtonPreset
  //       ref={ref}
  //       inputElement={{ ...(inputElement as RadioButtonProps) }}
  //       fieldSetOptions={fieldsetOptions}
  //     />
  //   );
  // }

  // text input fieldset
  if (templateId === "textInput") {
    return (
      <TextInputPreset
        ref={ref}
        inputElement={{ ...(inputElement as TextInputProps) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // text area fieldset
  if (templateId === "textarea") {
    return (
      <TextAreaPreset
        ref={ref}
        inputElement={{ ...(inputElement as TextAreaProps) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // rectangle radio button fieldset
  if (templateId === "rectangleRadio") {
    return (
      <RectangleRadioButtonPreset
        ref={ref}
        inputElement={{ ...(inputElement as RectangleRadioButtonProps) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // rectangle checkbox fieldset
  // if (templateId === "rectangleCheckbox") {
  //   return (
  //     <RectangleCheckboxPreset
  //       ref={ref}
  //       inputElement={{ ...(inputElement as RectangleCheckboxProps) }}
  //       fieldSetOptions={fieldsetOptions}
  //     />
  //   );
  // }

  // input with button fieldset
  // if (templateId === "inputWithButton") {
  //   return (
  //     <InputWithButtonPreset
  //       ref={ref}
  //       inputElement={{ ...(inputElement as InputWithButtonProps) }}
  //       fieldSetOptions={fieldsetOptions}
  //     />
  //   );
  // }

  // date input fieldset
  // if (templateId === "dateInput") {
  //   return (
  //     <DateInputPreset
  //       ref={ref}
  //       inputElement={{ ...(inputElement as DateInputProps) }}
  //       fieldSetOptions={fieldsetOptions}
  //     />
  //   );
  // }

  // image uploader fieldset
  // if (templateId === "imageUploader") {
  //   return (
  //     <ImageUploaderPreset
  //       ref={ref}
  //       inputElement={{ ...(inputElement as ImageUploaderProps) }}
  //       fieldSetOptions={fieldsetOptions}
  //     />
  //   );
  // }

  return <></>;
};

const FormItem = forwardRef(FormItem4Ref) as <T extends TemplateId>(
  props: Props<T> & { ref?: Ref<HTMLDivElement> },
) => JSX.Element;

export default FormItem;
