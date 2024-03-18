import styled from "styled-components";
import BreakTimeItem from "./BreakTimeItem";

function BreakTimeList() {
  return (
    <Container>
      <BreakTimeItem id={1} day="월" startTime="10:00" endTime="9:00" />
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default BreakTimeList;
