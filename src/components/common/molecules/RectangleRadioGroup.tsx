import { ComponentProps } from "react";
import styled from "styled-components";
import RectangleRadioButton from "../atoms/RectangleRadioButton";

interface Props {
  name: string;
  groupList: ComponentProps<typeof RectangleRadioButton>[];
  /**
   * 라디오 버튼을 세로로 나열 할 것인지 여부
   * @default false
   */
  isVertical?: boolean;
  /**
   * 라벨에 넘버링 기능을 사용 할 것인지 여부
   * - 피그마에 가로버전은 안나와있어서 isVertical이 true일 때만 적용됨
   * @default false
   * */
  isLabelNumbering?: boolean;
}

const RectangleRadioGroup = ({
  name,
  groupList,
  isVertical = false,
  isLabelNumbering = false,
}: Props) => {
  return (
    <FlexContainer isVertical={isVertical}>
      {groupList.map(({ ...prop }, idx) => (
        <RectangleRadioButton
          {...prop}
          inline={!isVertical}
          key={name + prop.value}
          name={name}
          labelNumber={isLabelNumbering ? idx + 1 : undefined}
        />
      ))}
    </FlexContainer>
  );
};

export default RectangleRadioGroup;

const FlexContainer = styled.div<{ isVertical: boolean }>`
  display: flex;
  gap: ${(props) => (props.isVertical ? "16px" : "8px")};
  flex-direction: ${(props) => (props.isVertical ? "column" : "row")};
`;
