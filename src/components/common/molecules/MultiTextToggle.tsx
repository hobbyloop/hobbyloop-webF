import Atom from "components/common/atoms";
import { ITextToggle } from "components/common/atoms/TextToggle";
import styled from "styled-components";
import { ICustomStyle } from "types/style";

export interface Props extends ICustomStyle {
  toggleStates: ITextToggle[];
  onClickToggleEvent: (name: string) => void;
}

/**
 * @description 여러 개의 TextToggle 관리 컴포넌트
 * @param toggleState - ITextToggle 타입의 객체들을 요소로 가지는 배열
 * @param onClickToggleEvent - TextToggle onClick 이벤트
 */
function MultiTextToggle({
  toggleStates,
  onClickToggleEvent,
  customStyle,
}: Props) {
  return (
    <Container customStyle={customStyle}>
      {toggleStates.map((state) => {
        return (
          <Atom.TextToggle
            key={state.name}
            name={state.name}
            isSelected={state.isSelected}
            onClickToggleEvent={onClickToggleEvent}
          >
            {state.text}
          </Atom.TextToggle>
        );
      })}
    </Container>
  );
}

const Container = styled.div<ICustomStyle>`
  display: flex;
  justify-content: space-between;

  ${(props) => props.customStyle}
`;

export default MultiTextToggle;
