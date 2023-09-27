import { ReactComponent as CalenderIcon } from "assets/ic_calender.svg";
import { ReactComponent as Logo } from "assets/logotype.svg";
import GreenButton from "components/common/atoms/GreenButton";
import Input from "components/common/atoms/Input";
import Label from "components/common/atoms/Label";
import LabeledInput from "components/common/molecules/LabeledInput";
import StuffedInput from "components/common/molecules/StuffedInput";
import Header from "components/common/templates/Header";
import HomePage from "pages/HomePage";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  Other global styles go here
  html, body {
    padding: 0;
  }
  div, input {
    box-sizing: border-box;
  }
  * {
    padding: 0;
    margin: 0;
  }
`;

const StyledLogo = styled(Logo)`
  position: fixed;
  top: 25px;
  left: 120px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
`;
const StyledCalenderIcon = styled(CalenderIcon)`
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 0 5px;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
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
