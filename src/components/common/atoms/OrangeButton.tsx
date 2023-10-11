import React from 'react';
import { styled } from 'styled-components';
import { Colors } from 'utils/constants/colors';

interface OrangeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: Colors;
  width: string;
}

const Button = styled.button<OrangeButtonProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) =>
    props.backgroundColor === Colors.orange ? Colors.white : Colors.orange};
  width: ${(props) => props.width};
  height: 48px;
  border: 1px solid
    ${(props) =>
      props.backgroundColor === Colors.orange ? Colors.white : Colors.orange};
  border-radius: 8px;
`;

function OrangeButton({ backgroundColor, children, width }: OrangeButtonProps) {
  return (
    <Button backgroundColor={backgroundColor} width={width}>
      {children}
    </Button>
  );
}

export default OrangeButton;
