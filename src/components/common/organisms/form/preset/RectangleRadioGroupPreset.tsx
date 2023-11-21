import FieldSetTemplate from "../FieldSetTemplate";
import { ComponentProps, forwardRef } from "react";
import useForm from "hooks/useForm";
import RectangleRadioGroup from "components/common/molecules/RectangleRadioGroup";

type RectangleRadioGroupProps = ComponentProps<typeof RectangleRadioGroup>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputFactory: RectangleRadioGroupProps;
}

/** formType === "rectangleRadioGroup" */
const RectangleRadioGroupPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputFactory }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <RectangleRadioGroup
          {...inputFactory}
          groupList={inputFactory.groupList.map(({ ...groupItem }) => ({
            ...groupItem,
            checked: castedValue === groupItem.value,
            onChange: (e) => {
              setValue(e.target.value);
            },
          }))}
        />
      </FieldSetTemplate>
    );
  },
);

RectangleRadioGroupPreset.displayName = "RectangleRadioGroupPreset";
export default RectangleRadioGroupPreset;
