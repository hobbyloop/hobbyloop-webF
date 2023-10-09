import React, { useEffect } from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";
import LoginButton from "../atoms/LoginButton";
import axios from "axios";
import { NAVER_CLIENT_ID, NAVER_REDIRECT_URI } from "utils/constants/auth";

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

const H1 = styled.h1``;

/**
 * @description 권한 받아서 관리자/강사 로그인 구분
 * @param {string} authority - '강사' | '관리자'
 */
function LoginTemplate({ authority }: LoginTemplateProps) {
  const naverLogin = () => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&state=test&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}`;
  };

  return (
    <Container>
      <StyledWrapper>
        <H1>{authority} 로그인</H1>
        <span>로그인 어쩌구 저쩌구</span>
        <LoginButton platform="kakao" />
        <LoginButton platform="google" />
        <LoginButton onClick={naverLogin} platform="naver" />
        <LoginButton platform="apple" />
        {authority === "관리자" ? <span>입점 신청하기</span> : null}
      </StyledWrapper>
    </Container>
  );
}

export default LoginTemplate;
