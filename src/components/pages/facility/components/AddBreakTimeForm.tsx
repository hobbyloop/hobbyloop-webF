import { ReactComponent as AddIcon } from "assets/+.svg";
import { ReactComponent as DeleteIcon } from "assets/icon_delete.svg";
import SelectBox, { IOption } from "components/common/atoms/SelectBox";
import { useState } from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

const OPTIONS = [
  { key: "every", value: "매일" },
  { key: "mon", value: "월" },
  { key: "tue", value: "화" },
  { key: "wed", value: "수" },
  { key: "thu", value: "목" },
  { key: "fri", value: "금" },
  { key: "sat", value: "토" },
  { key: "sun", value: "일" },
];

function AddBreakTimeForm() {
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  return (
    <Container>
      <BreakTimeSelectInput>
        <SelectBox
          options={OPTIONS}
          defaultOption={OPTIONS[0]}
          onChange={(option: IOption) => setSelectedOption(option)}
          width={77}
        />
        <TimeInputWrapper>
          <TimeInput
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <Span>~</Span>
          <TimeInput
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          <DeleteButton />
        </TimeInputWrapper>
      </BreakTimeSelectInput>
      <AddButton>
        <AddIcon />
        {"휴게시간 추가"}
      </AddButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BreakTimeSelectInput = styled.div`
  display: flex;
  gap: 8px;
`;

const TimeInput = styled.input.attrs(() => ({
  type: "time",
}))`
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const TimeInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 299px;
  border: 1px solid ${Colors.gray_D7};
  border-radius: 8px;
  padding: 0 16px 0 24px;
`;

const Span = styled.span`
  display: block;
  margin: 0 16px;
`;

const DeleteButton = styled(DeleteIcon)`
  margin-left: auto;
`;

const AddButton = styled.button.attrs(() => ({
  type: "button",
}))`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  width: 384px;
  height: 48px;
  border: 1px solid ${Colors.black_14};
  border-radius: 8px;
`;

export default AddBreakTimeForm;
