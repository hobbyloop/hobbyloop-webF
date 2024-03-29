import Atom from "components/common/atoms";
import { ITextToggle } from "components/common/atoms/TextToggle";
import styled from "styled-components";

export interface IMultiTextToggleProps {
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
}: IMultiTextToggleProps) {
  return (
    <Container>
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 68px);
`;

export default MultiTextToggle;
