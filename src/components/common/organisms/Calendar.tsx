// Calendar.js
import React, { useState } from "react";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  font-family: "Arial", sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 10px;
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 1px solid #ddd;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = () =>
    new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const renderDays = () => {
    const days = [];
    const daysCount = daysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth(),
    );

    for (let i = 1; i <= daysCount; i++) {
      days.push(
        <Day
          key={i}
          onClick={() =>
            alert(
              `Clicked on ${i}/${
                currentDate.getMonth() + 1
              }/${currentDate.getFullYear()}`,
            )
          }
        >
          {i}
        </Day>,
      );
    }

    const offset = Array.from({ length: firstDayOfMonth() }, (_, i) => (
      <Day key={`offset-${i}`} style={{ visibility: "hidden" }} />
    ));

    return [...offset, ...days];
  };

  const prevMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  const nextMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );

  return (
    <CalendarWrapper>
      <Header>
        <div>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <div>
          <button onClick={prevMonth}>&lt;</button>
          <button onClick={nextMonth}>&gt;</button>
        </div>
      </Header>
      <Body>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        {renderDays()}
      </Body>
    </CalendarWrapper>
  );
};

export default Calendar;
