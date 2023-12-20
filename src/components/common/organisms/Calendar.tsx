// Calendar.js
import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";
import SelectBox from "../atoms/SelectBox";
import dayjs from "dayjs";
import useBreakpoint from "hooks/ui/useBreakpoint";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const breakpoint = useBreakpoint();

  const daysInMonth = (year: number, month: number) =>
    dayjs(`${year}-${month + 1}`).daysInMonth();
  const firstDayOfMonth = () =>
    dayjs(`${currentDate.year()}-${currentDate.month() + 1}-01`).day(); // dayjs 메소드 사용

  const renderDays = () => {
    const days = [];
    const daysCount = daysInMonth(currentDate.year(), currentDate.month());

    for (let i = 1; i <= daysCount; i++) {
      days.push(
        <Date
          key={i}
          onClick={() =>
            alert(
              `Clicked on ${i}/${
                currentDate.month() + 1
              }/${currentDate.year()}`,
            )
          }
        >
          {i}
        </Date>,
      );
    }

    const offset = Array.from({ length: firstDayOfMonth() }, (_, i) => (
      <Date key={`offset-${i}`} style={{ visibility: "hidden" }} />
    ));

    return [...offset, ...days];
  };

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  return (
    <Container isMobile={breakpoint.isMobile}>
      <Header>
        <div>
          <SelectBox defaultValue={currentDate.format("YYYY")} />
        </div>
        <div>
          <button onClick={prevMonth}>&lt;</button>
          <button onClick={nextMonth}>&gt;</button>
        </div>
      </Header>
      <Body isMobile={breakpoint.isMobile}>
        <Date>일</Date>
        <Date>월</Date>
        <Date>화</Date>
        <Date>수</Date>
        <Date>목</Date>
        <Date>금</Date>
        <Date>토</Date>
        {renderDays()}
      </Body>
    </Container>
  );
};

const Container = styled.div<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? "100%" : "440px")};
  border: 1px solid ${Colors.black_14};
  border-radius: 16px;
  font-family: "Arial", sans-serif;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 16px 32px;
  background-color: ${Colors.black_14};
`;

const Body = styled.div<{ isMobile: boolean }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-row-gap: 4px;
  grid-column-gap: ${({ isMobile }) => (isMobile ? "8px" : "16px")};
  padding: 10px;
`;

const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1;
  cursor: ${(props) =>
    typeof props.children === "number" ? "pointer" : "auto"};
  &:hover {
    background-color: ${(props) =>
      typeof props.children === "number" ? Colors.green_5B8B4B : "none"};
    border-radius: 16px;
    color: ${(props) =>
      typeof props.children === "number" ? Colors.white_F : Colors.gray_6C};
  }
  font-size: 14px;
  font-weight: 700;
  color: ${(props) =>
    typeof props.children === "number" ? Colors.black_14 : Colors.gray_6C};
`;

export default Calendar;
