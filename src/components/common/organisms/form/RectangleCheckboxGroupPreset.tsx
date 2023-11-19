import FieldSetTemplate from "./FieldSetTemplate";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";
import useForm from "hooks/useForm";
import RectangleCheckboxGroup from "components/common/molecules/RectangleCheckboxGroup";

type RectangleCheckboxGroupProps = ComponentProps<
  typeof RectangleCheckboxGroup
>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    props: RectangleCheckboxGroupProps;
  };
}

/** formType === "rectangleCheckboxGroup" */
const RectangleCheckboxGroupPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputElement }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string[];

    const { onChange, props: prop } = inputElement;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <RectangleCheckboxGroup
          {...prop}
          groupList={prop.groupList.map(({ ...groupItem }) => ({
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
              onChange?.(e);
            },
          }))}
        />
      </FieldSetTemplate>
    );
  },
);

RectangleCheckboxGroupPreset.displayName = "RectangleCheckboxGroupPreset";
export default RectangleCheckboxGroupPreset;
