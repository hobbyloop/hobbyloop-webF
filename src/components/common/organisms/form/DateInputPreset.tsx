import { ComponentProps, useState, forwardRef } from "react";
import DateInput, { DateValue } from "components/common/atoms/DateInput";
import styled from "styled-components";
import SampleCalendar from "components/common/atoms/SampleCalendar";
import FieldSetTemplate from "./FieldSetTemplate";

type DateInputFactory = Omit<
  ComponentProps<typeof DateInput>,
  "onChange" | "onClickCalendar"
>;
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  factory: {
    onChange: (value: DateValue) => void;
    element: DateInputFactory;
  };
}

/** formType === "dateInput" */
const DateInputPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, factory }, ref) => {
    const { onChange, element } = factory;

    const [isOpenCalendar, setOpenCalendar] = useState(false);

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <Container>
          <DateInput
            {...element}
            onClickCalendar={() => setOpenCalendar(true)}
            onChange={(value) => {
              onChange(value);
            }}
          />
          {isOpenCalendar && (
            <AbsoluteContainer>
              {/* TODO) 커스텀 캘린더 제작 완성 후 넣기 */}
              <SampleCalendar
                hasEndDate={element.hasEndDate}
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
