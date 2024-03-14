import exampleImage from "assets/check_active.png";
import { darken, lighten } from "polished";
import { MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import { Colors } from "utils/constants/colors";

export interface Props {
  name: string;
  isSelected: boolean;
  onClickToggle: MouseEventHandler<HTMLButtonElement>;
}

/**
 * @description text 토글버튼
 * @param {string} name - 토글 상태의 고유 이름값
 * @param {boolean} isSelected - 선택 여부
 * @param {boolean} onClickToggle - onClick 토글 이벤트
 */
function CheckToggle({ name, isSelected, onClickToggle }: Props) {
  return (
    <Circle name={name} $isSelected={isSelected} onClick={onClickToggle} />
  );
}

const Circle = styled.button<{ $isSelected: boolean }>`
  width: 24px;
  height: 24px;
  border: 1px solid ${Colors.gray_D7};
  border-radius: 50%;

  &:hover {
    background-color: ${lighten(0.1, Colors.gray_D7)};
    cursor: pointer;
  }
  &:active {
    background-color: ${darken(0.1, Colors.gray_D7)};
  }

  // 선택되었을 경우
  ${(props) =>
    props.$isSelected &&
    css`
      border: none;
      background-image: url(${exampleImage});
      background-size: cover; // 배경 이미지가 컨테이너를 완전히 채우도록 설정
      background-position: center; // 이미지를 중앙에 위치시킵니다      color: ${Colors.white_F};

      &:hover {
        background-color: ${lighten(0.2, Colors.black_14)};
      }
      &:active {
        background-color: ${lighten(0.1, Colors.black_14)};
      }
    `}
`;

export default CheckToggle;
