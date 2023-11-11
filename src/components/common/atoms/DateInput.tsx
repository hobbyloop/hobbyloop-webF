import styled from "styled-components";
import { Colors } from "utils/constants/colors";
import { ReactComponent as CalendarIcon } from "assets/ic_calendar.svg";
import { InputHTMLAttributes, useRef } from "react";

export type Date = {
  year: number;
  month: number;
  day: number;
};

export type DateValue = {
  startDate?: Date;
  endDate?: Date;
};

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  hasEndDate?: boolean;
  onClickCalendar: () => void;
  value: DateValue;
  onChange?: (value: DateValue) => void;
}

const DateInput = ({
  hasEndDate = true,
  onClickCalendar,
  value: { startDate, endDate },
  onChange,
}: Props) => {
  const dateRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (onChange) {
      onChange({ startDate, endDate });
    }
  };

  const startDateReadable = `${
    startDate?.year.toString().padStart(4, "0") || "연"
  }.${startDate?.month.toString().padStart(2, "0") || "월"}.${
    startDate?.day.toString().padStart(2, "0") || "일"
  }`;

  const endDateReadable = `${
    endDate?.year.toString().padStart(4, "0") || "연"
  }.${endDate?.month.toString().padStart(2, "0") || "월"}.${
    endDate?.day.toString().padStart(2, "0") || "일"
  }`;

  const placeHolder = hasEndDate ? "연.월.일 ~ 연.월.일" : "연.월.일";
  const isValueUndefined = !startDate && !endDate;
  const value = hasEndDate
    ? `${startDateReadable} ~ ${endDateReadable}`
    : startDateReadable;

  return (
    <Container isLongWidth={!!hasEndDate}>
      <Input
        disabled
        ref={dateRef}
        type="text"
        placeholder={placeHolder}
        value={isValueUndefined ? undefined : value}
        onChange={handleChange}
      />
      <button type="button" onClick={onClickCalendar}>
        <CalendarIcon />
      </button>
    </Container>
  );
};

const Container = styled.div<{ isLongWidth: boolean }>`
  position: relative;
  width: ${({ isLongWidth }) => (isLongWidth ? "290px" : "180px")};
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  padding: 0 12px 0 20px;
  box-sizing: border-box;
  background-color: ${Colors.white};
`;

const Input = styled.input`
  width: fit-content;
  min-width: 0;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.black};
  background-color: transparent;

  &::placeholder {
    color: ${Colors.placeholder};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  &::after {
    content: ".";
  }
`;

export default DateInput;
