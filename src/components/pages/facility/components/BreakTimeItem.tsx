import { ReactComponent as DeleteIcon } from "assets/icon_delete.svg";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

interface Props {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
}

const Container = styled.li`
  display: flex;
  align-items: center;
  width: 384px;
  height: 48px;
  border: 1px solid ${Colors.gray_D7};
  border-radius: 8px;
  padding: 0 16px 0 24px;
`;

const Divider = styled.div`
  width: 1px;
  height: 19px;
  background-color: ${Colors.gray_D7};
  margin: 0 25px 0 24px;
`;

const Day = styled.span``;
const TimeWrapper = styled.div`
  display: flex;
`;
const Span = styled.span`
  display: block;
  margin: 0 16px;
`;
const DeleteButton = styled(DeleteIcon)`
  margin-left: auto;
`;

function BreakTimeItem({ id, day, startTime, endTime }: Props) {
  return (
    <Container>
      <Day>{day}</Day>
      <Divider />
      <TimeWrapper>
        {startTime}
        <Span>~</Span>
        {endTime}
      </TimeWrapper>
      <DeleteButton />
    </Container>
  );
}

export default BreakTimeItem;
