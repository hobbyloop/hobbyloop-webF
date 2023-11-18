import { ComponentProps, useState, forwardRef } from "react";
import DateInput, { DatePair } from "components/common/atoms/DateInput";
import styled from "styled-components";
import SampleCalendar from "components/common/atoms/SampleCalendar";
import FieldSetTemplate from "./FieldSetTemplate";

type DateInputProps = Omit<
  ComponentProps<typeof DateInput>,
  "value" | "onChange" | "onClickCalendar"
>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  inputElement: {
    value?: DatePair;
    onChange: (value: DatePair) => void;
    props: DateInputProps;
  };
}

/** formType === "dateInput" */
const DateInputPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, inputElement }, ref) => {
    const { value = {}, onChange, props: prop } = inputElement;

    const [isOpenCalendar, setOpenCalendar] = useState(false);

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <Container>
          <DateInput
            {...prop}
            value={value}
            onClickCalendar={() => setOpenCalendar(true)}
            onChange={(value) => {
              onChange(value);
            }}
          />
          {isOpenCalendar && (
            <AbsoluteContainer>
              {/* TODO) 커스텀 캘린더 제작 완성 후 넣기 */}
              <SampleCalendar
                hasEndDate={prop.hasEndDate}
                close={() => setOpenCalendar(false)}
                onApplied={(startDate, endDate) => {
                  onChange({ startDate, endDate });
                }}
              />
            </AbsoluteContainer>
          )}
        </Container>
      </FieldSetTemplate>
    );
  },
);

DateInputPreset.displayName = "DateInputPreset";
export default DateInputPreset;

const Container = styled.div`
  position: relative;
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  top: calc(100% + 16px);
  left: 0;
  z-index: 1;
`;
