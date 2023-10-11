import React from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

interface GreenButtonProps {
  children: React.ReactNode;
}

const Button = styled.button`
  width: 117px;
  height: 32px;
  background-color: ${Colors.white};

  border: 1px solid ${Colors.green};
  border-radius: 8px;

  color: ${Colors.green};
  font-family: "Font_Black";
  font-size: 16px;
  font-weight: 700;
  line-height: 190%;
`;

function GreenButton({ children }: GreenButtonProps) {
  return <Button>{children}</Button>;
}

export default GreenButton;
