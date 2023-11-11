// TODO) 삭제 예정 캘린더
import styled from "styled-components";
import { useRef } from "react";

type Date = {
  year: number;
  month: number;
  day: number;
};

interface Props {
  hasEndDate?: boolean;
  close: () => void;
  onApplied: (startDate?: Date, endDate?: Date) => void;
}

const SampleCalendar = ({ hasEndDate, close, onApplied }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const placeholder = hasEndDate ? "YYYY.MM.DD ~ YYYY.MM.DD" : "YYYY.MM.DD";

  return (
    <Container>
      <Input ref={ref} placeholder={placeholder} />
      <Button
        type="button"
        onClick={() => {
          const value = ref.current?.value;
          if (!value) {
            onApplied();
            close();
            return;
          }

          const [startDate, endDate] = value.split(" ~ ");
          const [startYear, startMonth, startDay] = startDate
            .split(".")
            .map((v) => Number(v));
          const [endYear, endMonth, endDay] = endDate
            .split(".")
            .map((v) => Number(v));

          const start = {
            year: startYear,
            month: startMonth,
            day: startDay,
          };

          const end = {
            year: endYear,
            month: endMonth,
            day: endDay,
          };

          onApplied(start, hasEndDate ? end : undefined);
          close();
        }}
      >
        적용
      </Button>
    </Container>
  );
};

export default SampleCalendar;

const Container = styled.div`
  width: 300px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

const Input = styled.input`
  height: 36px;
`;

const Button = styled.button`
  height: 36px;
  border-radius: 8px;
  background-color: #f5f5f5;
  border: 1px solid #d7d7d7;
  cursor: pointer;
`;
