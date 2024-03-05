import { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { Colors } from "utils/constants/colors";

/**
 * @description on/off 토글 버튼
 */
function CircleToggleButton() {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggleBtn = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <StyledButton
      onClick={handleToggleBtn}
      toggle={toggle}
      aria-label={`change toggle`}
    >
      <StyledCircle toggle={toggle} />
      <StyledSpanWrap>
        <span>ON</span>
        <span>OFF</span>
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
  transform: translateX(0px);

  ${({ toggle }) =>
    toggle &&
    css`
      transform: translateX(29px);
    `}
`;

export default CircleToggleButton;
