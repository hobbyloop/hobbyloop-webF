import FieldSetTemplate from "../FieldSetTemplate";
import { ComponentProps, forwardRef } from "react";
import useForm from "hooks/useForm";
import RectangleCheckboxGroup from "components/common/molecules/RectangleCheckboxGroup";

type RectangleCheckboxGroupProps = ComponentProps<
  typeof RectangleCheckboxGroup
>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputFactory: RectangleCheckboxGroupProps;
}

/** formType === "rectangleCheckboxGroup" */
const RectangleCheckboxGroupPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputFactory }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string[];

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <RectangleCheckboxGroup
          {...inputFactory}
          groupList={inputFactory.groupList.map(({ ...groupItem }) => ({
            ...groupItem,
            checked:
              !!groupItem.value &&
              castedValue.includes(groupItem.value.toString()),
            onChange: (e) => {
              const { value } = e.target;
              if (castedValue.includes(value)) {
                setValue(castedValue.filter((v) => v !== value));
              } else {
                setValue([...castedValue, value]);
              }
            },
          }))}
        />
      </FieldSetTemplate>
    );
  },
);

RectangleCheckboxGroupPreset.displayName = "RectangleCheckboxGroupPreset";
export default RectangleCheckboxGroupPreset;
