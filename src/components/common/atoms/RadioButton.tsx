import styled from "styled-components";

export interface IRadioButtonProps {}

const Container = styled.input.attrs((props) => ({
  type: "radio",
}))`
  display: flex;
`;

function RadioButton() {
  return <Container>RadioButton</Container>;
}

export default RadioButton;
