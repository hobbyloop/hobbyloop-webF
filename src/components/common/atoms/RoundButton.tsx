import React from 'react';
import styled from 'styled-components';

interface RoundButtonProps extends StyledButtonProps {
  children: React.ReactNode;
}

interface StyledButtonProps {
  themeColor: 'orange' | 'green';
  background: 'none' | 'orange' | 'green';
}

const Button = styled.button<StyledButtonProps>`
  border: 1px solid ${(props) => props.color};
  border-radius: 50%;
  height: 40px;
  background: none;
`;

function RoundButton({ children, themeColor, background }: RoundButtonProps) {
  return (
    <Button themeColor={themeColor} background={background}>
      {children}
    </Button>
  );
}

export default RoundButton;
