import React, { useRef } from 'react';
import { styled } from 'styled-components';
import { Colors } from 'utils/constants/colors';

interface InputProps {
  inputSize: 'long' | 'medium' | 'short';
  placeholder: string;
}

const StyledInput = styled.input<InputProps>`
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  font-family: 'Font_Black';
  font-size: 16px;
  font-weight: 500;
  width: ${(props) => {
    switch (props.inputSize) {
      case 'long':
        return '588px';
      case 'medium':
        return '290px';
      case 'short':
        return '180px';
    }
  }};
  height: 48px;
  padding: 0 20px;
  ::placeholder {
    color: ${Colors.placeholder};
  }
`;

function Input({ inputSize, placeholder }: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <StyledInput
      inputSize={inputSize}
      placeholder={placeholder}
      ref={inputRef}
    />
  );
}

export default Input;
