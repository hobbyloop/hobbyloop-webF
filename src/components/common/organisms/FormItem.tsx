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
type RadioButtonFactory = ComponentProps<typeof RadioButtonPreset>["factory"];
type TextInputFactory = ComponentProps<typeof TextInputPreset>["factory"];
type TextAreaFactory = ComponentProps<typeof TextAreaPreset>["factory"];
type RectangleRadioButtonFactory = ComponentProps<
  typeof RectangleRadioButtonPreset
>["factory"];
type RectangleCheckboxFactory = ComponentProps<
  typeof RectangleCheckboxPreset
>["factory"];
type InputWithButtonFactory = ComponentProps<
  typeof InputWithButtonPreset
>["factory"];
type DateInputFactory = ComponentProps<typeof DateInputPreset>["factory"];
type ImageUploaderFactory = ComponentProps<
  typeof ImageUploaderPreset
>["factory"];

interface Props<T extends TemplateId> {
  /** 사용할 form template의 id를 입력  */
  templateId: T;

  /** fieldset 옵션 */
  fieldsetOptions?: FieldsetOptions;

  /** templateId에 매핑된 컴포넌트를 사용하기 위해 필요한 값 (구성요소) */
  factory: T extends "radio"
    ? RadioButtonFactory
    : T extends "textInput"
    ? TextInputFactory
    : T extends "textarea"
    ? TextAreaFactory
    : T extends "rectangleRadio"
    ? RectangleRadioButtonFactory
    : T extends "rectangleCheckbox"
    ? RectangleCheckboxFactory
    : T extends "inputWithButton"
    ? InputWithButtonFactory
    : T extends "dateInput"
    ? DateInputFactory
    : T extends "imageUploader"
    ? ImageUploaderFactory
    : never;
}

const FormItem4Ref = <T extends TemplateId>(
  { fieldsetOptions, templateId, factory }: Props<T>,
  ref: Ref<HTMLDivElement>,
) => {
  // radio button fieldset
  if (templateId === "radio") {
    return (
      <RadioButtonPreset
        ref={ref}
        factory={{ ...(factory as RadioButtonFactory) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // text input fieldset
  if (templateId === "textInput") {
    return (
      <TextInputPreset
        ref={ref}
        factory={{ ...(factory as TextInputFactory) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // text area fieldset
  if (templateId === "textarea") {
    return (
      <TextAreaPreset
        ref={ref}
        factory={{ ...(factory as TextAreaFactory) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // rectangle radio button fieldset
  if (templateId === "rectangleRadio") {
    return (
      <RectangleRadioButtonPreset
        ref={ref}
        factory={{ ...(factory as RectangleRadioButtonFactory) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // rectangle checkbox fieldset
  if (templateId === "rectangleCheckbox") {
    return (
      <RectangleCheckboxPreset
        ref={ref}
        factory={{ ...(factory as RectangleCheckboxFactory) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // input with button fieldset
  if (templateId === "inputWithButton") {
    return (
      <InputWithButtonPreset
        ref={ref}
        factory={{ ...(factory as InputWithButtonFactory) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // date input fieldset
  if (templateId === "dateInput") {
    return (
      <DateInputPreset
        ref={ref}
        factory={{ ...(factory as DateInputFactory) }}
        fieldSetOptions={fieldsetOptions}
      />
    );
  }

  // image uploader fieldset
  if (templateId === "imageUploader") {
    return (
      <ImageUploaderPreset
        ref={ref}
        factory={{ ...(factory as ImageUploaderFactory) }}
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
