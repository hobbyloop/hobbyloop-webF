import Logo from "components/common/atoms/Logo";
import Header from "components/common/templates/Header";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
`;

const LoginButton = styled.button`
  width: 117px;
  height: 40px;
  border: 1px solid ${Colors.orange};
  border-radius: 20px;
  background-color: white;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 16px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 22px;
`;

const Body = styled.div`
  display: flex;
`;

const Introduce1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 791px;
  height: 503px;
`;
const Introduce2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 384px;
  height: 503px;
`;

function HomePage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <Logo />
        <ButtonsWrapper>
          <LoginButton onClick={() => navigate("/login_admin")}>
            관리자 로그인
          </LoginButton>
          <LoginButton onClick={() => navigate("/login_instructor")}>
            강사 로그인
          </LoginButton>
        </ButtonsWrapper>
      </Header>
      <Body>
        <Introduce1>프로모션</Introduce1>
        <Introduce2>가격정보</Introduce2>
      </Body>
    </Container>
  );
}

export default HomePage;
