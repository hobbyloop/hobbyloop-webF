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
      theme.color = Colors.yellow_FDDC3F;
      break;
    case "google":
      theme.icon = "구글 아이콘";
      theme.color = Colors.white_F4;
      break;
    case "naver":
      theme.icon = "네이버 아이콘";
      theme.color = Colors.green_23CB5B;
      break;
    case "apple":
      theme.icon = "애플 아이콘";
      theme.color = Colors.black_0;
      break;
  }

  return (
    <Button backgroundColor={theme.color} {...restButtonProps}>
      {theme.icon}
    </Button>
  );
}

export default LoginButton;
