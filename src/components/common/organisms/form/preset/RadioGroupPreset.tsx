import FieldSetTemplate from "../FieldSetTemplate";
import { ComponentProps, forwardRef } from "react";
import useForm from "hooks/useForm";
import RadioGroup from "components/common/molecules/RadioGroup";

type RadioGroupProps = ComponentProps<typeof RadioGroup>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  propertyName: string;
  fieldSetOptions?: FieldSetOptions;
  inputFactory: RadioGroupProps;
}

/** formType === "radioGroup" */
const RadioGroupPreset = forwardRef<HTMLDivElement, Props>(
  ({ propertyName, fieldSetOptions, inputFactory }, ref) => {
    const { value, setValue } = useForm({ propertyName });
    const castedValue = value as string;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <RadioGroup
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

RadioGroupPreset.displayName = "RadioGroupPreset";
export default RadioGroupPreset;
