import Logo from "components/common/atoms/Logo";
import Header from "components/common/templates/Header";
import React from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  background-color: red;
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

function HomePage() {
  return (
    <Container>
      <Header>
        <Logo />
        <ButtonsWrapper>
          <LoginButton>관리자 로그인</LoginButton>
          <LoginButton>강사 로그인</LoginButton>
        </ButtonsWrapper>
      </Header>
    </Container>
  );
}

export default HomePage;
