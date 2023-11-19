import FieldSetTemplate from "../FieldSetTemplate";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";
import useForm from "hooks/useForm";
import RectangleRadioGroup from "components/common/molecules/RectangleRadioGroup";

type RectangleRadioGroupProps = ComponentProps<typeof RectangleRadioGroup>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    props: RectangleRadioGroupProps;
  };
}

/** formType === "rectangleRadioGroup" */
const RectangleRadioGroupPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputElement }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string;

    const { onChange, props: prop } = inputElement;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <RectangleRadioGroup
          {...prop}
          groupList={prop.groupList.map(({ ...groupItem }) => ({
            ...groupItem,
            checked: castedValue === groupItem.value,
            onChange: (e) => {
              setValue(e.target.value);
              onChange?.(e);
            },
          }))}
        />
      </FieldSetTemplate>
    );
  },
);

RectangleRadioGroupPreset.displayName = "RectangleRadioGroupPreset";
export default RectangleRadioGroupPreset;
