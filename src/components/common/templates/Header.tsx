import React from "react";
import styled from "styled-components";

interface HeaderProps {
  children: React.ReactNode;
}

const Container = styled.div<{ multipleChildren: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 78px;
  background-color: lightsalmon;
  justify-content: ${(props) =>
    props.multipleChildren ? "space-between" : "flex-start"};
`;

function Header({ children }: HeaderProps) {
  const childCount = React.Children.count(children);
  const multipleChildren = childCount > 1;

  return <Container multipleChildren={multipleChildren}>{children}</Container>;
}

export default Header;
