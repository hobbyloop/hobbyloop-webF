import { ButtonHTMLAttributes, CSSProperties } from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

interface LoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  platform: string;
}

const Button = styled.button<CSSProperties>`
  width: 386px;
  height: 48px;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
`;

function LoginButton({ platform, ...restButtonProps }: LoginButtonProps) {
  const theme = {
    icon: "",
    color: "",
  };

  switch (platform) {
    case "kakao":
      theme.icon = "카카오 아이콘";
      theme.color = Colors.kakao_login;
      break;
    case "google":
      theme.icon = "구글 아이콘";
      theme.color = Colors.google_login;
      break;
    case "naver":
      theme.icon = "네이버 아이콘";
      theme.color = Colors.naver_login;
      break;
    case "apple":
      theme.icon = "애플 아이콘";
      theme.color = Colors.apple_login;
      break;
  }

  return (
    <Button backgroundColor={theme.color} {...restButtonProps}>
      {theme.icon}
    </Button>
  );
}

export default LoginButton;
