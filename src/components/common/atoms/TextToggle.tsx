import { darken, lighten } from "polished";
import styled, { css } from "styled-components";
import { Colors } from "utils/constants/colors";

export interface ITextToggle {
  name: string;
  text: string;
  isSelected: boolean;
}

interface ITextToggleProps extends Pick<ITextToggle, "name" | "isSelected"> {
  children: string;
  onClickToggleEvent: (name: string) => void;
}

/**
 * @description text 토글버튼
 * @param {string} children - 사용할 텍스트
 * @param {string} name - 토글 상태의 고유 이름값
 * @param {boolean} isSelected - 선택 여부
 */
function TextToggle({
  children,
  name,
  isSelected,
  onClickToggleEvent,
}: ITextToggleProps) {
  return (
    <Container
      onClick={() => onClickToggleEvent(name)}
      name={name}
      isSelected={isSelected}
    >
      {children}
    </Container>
  );
}

const Container = styled.button<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid ${Colors.gray_D7};
  border-radius: 8px;
  font-size: 12px;
  color: ${Colors.black_14};
  background-color: ${Colors.white_F};

  &:hover {
    background-color: ${lighten(0.1, Colors.gray_D7)};
    cursor: pointer;
  }
  &:active {
    background-color: ${darken(0.1, Colors.gray_D7)};
  }

  // 선택됐을 경우 css
  ${(props) =>
    props.isSelected &&
    css`
      border: none;
      background-color: ${Colors.black_14};
      color: ${Colors.white_F};

      &:hover {
        background-color: ${lighten(0.2, Colors.black_14)};
      }
      &:active {
        background-color: ${lighten(0.1, Colors.black_14)};
      }
    `}
`;

export default TextToggle;
