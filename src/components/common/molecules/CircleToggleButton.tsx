import { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { Colors } from "utils/constants/colors";
import Span from "../atoms/Span";

/**
 *
 * @description 재활용성? 낮아보여서 한곳에 useState , 컴포넌트 ui들을 더 쪼개지 않고 한곳에 두었습니다.
 */

export default function CircleToggleButton() {
  const [toggle, setToggle] = useState(false);

  const handleToggleBtn = useCallback(() => {
    setToggle((prev) => !prev);
  }, [toggle]);

  return (
    <StyledButton
      onClick={handleToggleBtn}
      toggle={toggle}
      aria-label={`change toggle`}
    >
      <StyledCircle toggle={toggle as boolean} />
      <StyledSpanWrap>
        <Span>ON</Span>
        <Span>OFF</Span>
      </StyledSpanWrap>
    </StyledButton>
  );
}

const StyledSpanWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
const StyledButton = styled.button<{ toggle: boolean }>`
  width: 60px;
  height: 31px;
  background-color: ${Colors.gray_D7};
  border-radius: 16px;
  border: 1px solid ${Colors.gray_D7};
  position: relative;
  cursor: pointer;
  outline: none;

  ${({ toggle }) =>
    toggle &&
    css`
      background-color: ${Colors.black_14};
      border-color: ${Colors.black_14};
    `}
`;

const StyledCircle = styled.div<{ toggle: boolean }>`
  position: absolute;
  width: 29px;
  height: 29px;
  top: 0;
  left: 0px;
  border-radius: 100%;
  background-color: ${Colors.white_F};
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  trasnform: translateX(0px);

  ${({ toggle }) =>
    toggle &&
    css`
      transform: translateX(29px);
    `}
`;
