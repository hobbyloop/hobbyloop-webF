// Calendar.js
import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";
import SelectBox from "../atoms/SelectBox";
import dayjs from "dayjs";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

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
    <Container>
      <Header>
        <div>
          {/* {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })} */}
          <SelectBox defaultValue={currentDate.format("YYYY")} />
        </div>
        <div>
          <button onClick={prevMonth}>&lt;</button>
          <button onClick={nextMonth}>&gt;</button>
        </div>
      </Header>
      <Body>
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

const Container = styled.div`
  width: 440px;
  height: 388px;
  border-radius: 16px;
  font-family: "Arial", sans-serif;
  background-color: #ccc;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 16px 32px;
  border-radius: 16px 16px 0 0;
  background-color: ${Colors.black_14};
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* gap: 10px; */
  grid-row-gap: 4px;
  grid-column-gap: 16px;
  padding: 10px;
`;

const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.green_5B8B4B};
    border-radius: 16px;
  }
  font-size: 14px;
  font-weight: 700;

  color: ${(props) =>
    typeof props.children !== "number" ? Colors.gray_6C : Colors.black_14};
`;

export default Calendar;
