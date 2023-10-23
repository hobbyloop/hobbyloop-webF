import styled from "styled-components";
import { NAVER_CLIENT_ID, NAVER_REDIRECT_URI } from "utils/constants/auth";
import { Colors } from "utils/constants/colors";
import LoginButton from "../atoms/LoginButton";
import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface LoginTemplateProps {
  authority: "관리자" | "강사";
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ccc;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 792px;
  height: 592px;
  border-radius: 20px;
  background-color: ${Colors.white};
`;

const H1 = styled.h1`
  margin-bottom: 20px;
  font-size: 38px;
  font-weight: 700;
`;

const Span = styled.span`
  margin-bottom: 40px;
  font-size: 22px;
  font-weight: 700;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 28px;
`;

const Anchor = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

/**
 * @description 권한 받아서 관리자/강사 로그인 구분
 * @param {string} authority - '강사' | '관리자'
 */
function LoginTemplate({ authority }: LoginTemplateProps) {
  const kakaoLogin = async () => {
    const response = await axios.get("/oauth2/authorization/kakao");
    return response.data;
  };

  const naverLogin = () => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&state=test&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}`;
  };

  return (
    <Container>
      <StyledWrapper>
        <H1>{authority} 로그인</H1>
        <Span>로그인 어쩌구 저쩌구</Span>
        <ButtonWrapper>
          <LoginButton platform="kakao" />
          <LoginButton platform="google" />
          <LoginButton onClick={naverLogin} platform="naver" />
          <LoginButton platform="apple" />
        </ButtonWrapper>
        {authority === "관리자" ? <Anchor>입점 신청하기</Anchor> : null}
      </StyledWrapper>
    </Container>
  );
}

export default LoginTemplate;
