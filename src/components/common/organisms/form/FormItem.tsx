import { ComponentProps, Ref, forwardRef } from "react";
import FieldSetTemplate from "./FieldSetTemplate";
import TextInputPreset from "./preset/TextInputPreset";
import TextAreaPreset from "./preset/TextAreaPreset";
import InputWithButtonPreset from "./preset/InputWithButtonPreset";
import DateInputPreset from "./preset/DateInputPreset";
import ImageUploaderPreset from "./preset/ImageUploaderPreset";
import RadioGroupPreset from "./preset/RadioGroupPreset";
import RectangleRadioGroupPreset from "./preset/RectangleRadioGroupPreset";
import RectangleCheckboxGroupPreset from "./preset/RectangleCheckboxGroupPreset";

type TemplateId =
  | "radioGroup"
  | "textInput"
  | "textarea"
  | "rectangleRadioGroup"
  | "rectangleCheckboxGroup"
  | "inputWithButton"
  | "dateInput"
  | "imageUploader";

type FieldsetOptions = ComponentProps<typeof FieldSetTemplate>;
type RadioGroupProps = ComponentProps<typeof RadioGroupPreset>["inputFactory"];
type TextInputProps = ComponentProps<typeof TextInputPreset>["inputFactory"];
type TextAreaProps = ComponentProps<typeof TextAreaPreset>["inputFactory"];
type RectangleRadioGroupProps = ComponentProps<
  typeof RectangleRadioGroupPreset
>["inputFactory"];
type RectangleCheckboxGroupProps = ComponentProps<
  typeof RectangleCheckboxGroupPreset
>["inputFactory"];
type InputWithButtonProps = ComponentProps<
  typeof InputWithButtonPreset
>["inputFactory"];
type DateInputProps = ComponentProps<typeof DateInputPreset>["inputFactory"];
type ImageUploaderProps = ComponentProps<
  typeof ImageUploaderPreset
>["inputFactory"];

interface Props<T extends TemplateId> {
  /** 사용할 form template의 id를 입력  */
  templateId: T;

  /** 관리할 프로퍼티명 */
  propertyName: string;

  /** fieldset 옵션 */
  fieldsetOptions?: FieldsetOptions;

  /** templateId에 매핑된 컴포넌트를 사용하기 위해 필요한 값 (구성요소) */
  inputFactory: T extends "radioGroup"
    ? RadioGroupProps
    : T extends "textInput"
    ? TextInputProps
    : T extends "textarea"
    ? TextAreaProps
    : T extends "rectangleRadioGroup"
    ? RectangleRadioGroupProps
    : T extends "rectangleCheckboxGroup"
    ? RectangleCheckboxGroupProps
    : T extends "inputWithButton"
    ? InputWithButtonProps
    : T extends "dateInput"
    ? DateInputProps
    : T extends "imageUploader"
    ? ImageUploaderProps
    : never;
}

const FormItem4Ref = <T extends TemplateId>(
  { fieldsetOptions, templateId, inputFactory, propertyName }: Props<T>,
  ref: Ref<HTMLDivElement>,
) => {
  // radio group fieldset
  if (templateId === "radioGroup") {
    return (
      <RadioGroupPreset
        ref={ref}
        propertyName={propertyName}
        inputFactory={{ ...(inputFactory as RadioGroupProps) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // text input fieldset
  if (templateId === "textInput") {
    return (
      <TextInputPreset
        ref={ref}
        propertyName={propertyName}
        inputFactory={{ ...(inputFactory as TextInputProps) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // text area fieldset
  if (templateId === "textarea") {
    return (
      <TextAreaPreset
        ref={ref}
        propertyName={propertyName}
        inputFactory={{ ...(inputFactory as TextAreaProps) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // rectangle radio group fieldset
  if (templateId === "rectangleRadioGroup") {
    return (
      <RectangleRadioGroupPreset
        ref={ref}
        propertyName={propertyName}
        inputFactory={{ ...(inputFactory as RectangleRadioGroupProps) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // rectangle checkbox fieldset
  if (templateId === "rectangleCheckboxGroup") {
    return (
      <RectangleCheckboxGroupPreset
        ref={ref}
        propertyName={propertyName}
        inputFactory={{ ...(inputFactory as RectangleCheckboxGroupProps) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // input with button fieldset
  if (templateId === "inputWithButton") {
    return (
      <InputWithButtonPreset
        ref={ref}
        propertyName={propertyName}
        inputFactory={{ ...(inputFactory as InputWithButtonProps) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // date input fieldset
  if (templateId === "dateInput") {
    return (
      <DateInputPreset
        ref={ref}
        propertyName={propertyName}
        inputFactory={{ ...(inputFactory as DateInputProps) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // image uploader fieldset
  if (templateId === "imageUploader") {
    return (
      <ImageUploaderPreset
        ref={ref}
        propertyName={propertyName}
        inputFactory={{ ...(inputFactory as ImageUploaderProps) }}
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
