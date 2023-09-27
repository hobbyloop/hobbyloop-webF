import React from "react";
import styled from "styled-components";

interface HeaderProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 80px;
  padding: 0 78px;
  background-color: #ccc;
`;

function Header({ children }: HeaderProps) {
  return <Container>{children}</Container>;
}

export default Header;
