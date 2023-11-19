import FieldSetTemplate from "./FieldSetTemplate";
import { ChangeEventHandler, ComponentProps, forwardRef } from "react";
import useForm from "hooks/useForm";
import RadioGroup from "components/common/molecules/RadioGroup";

type RadioGroupProps = Omit<ComponentProps<typeof RadioGroup>, "onChange">;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    props: RadioGroupProps;
  };
}

/** formType === "radioGroup" */
const RadioGroupPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputElement }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string;

    const { onChange, props: prop } = inputElement;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <RadioGroup
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

RadioGroupPreset.displayName = "RadioGroupPreset";
export default RadioGroupPreset;
