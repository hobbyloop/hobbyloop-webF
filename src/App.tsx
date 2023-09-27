import HomePage from "pages/HomePage";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
`;

function App() {
  return (
    <Container>
      {/* <StyledLogo />
      <LoginHeader />
      <Label>asdf</Label>
      <Label required>asdf</Label>
      <Input inputSize="long" placeholder="inactive" />
      <Input inputSize="medium" placeholder="inactive" />
      <Input inputSize="short" placeholder="inactive" />
      <LabeledInput>
        <Label required showInfo>
          textbox title02
        </Label>
        <Input inputSize="long" placeholder="inactive" />
      </LabeledInput>
      <StuffedInput>
        <StyledCalenderIcon />
      </StuffedInput>
      <GreenButton>인증번호 받기</GreenButton>
      <RoundButton color="orange">asdf</RoundButton> */}
      <HomePage />
    </Container>
  );
}

export default App;
