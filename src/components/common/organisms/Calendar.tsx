import styled from "styled-components";

export interface ICalendarProps {}

const Container = styled.div`
  display: flex;
`;

function Calendar({}: ICalendarProps) {
  return <Container>Calendar</Container>;
}

export default Calendar;
