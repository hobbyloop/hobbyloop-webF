import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/constants/colors';

interface StuffedInputProps {
  children: React.ReactNode;
}

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Colors.gray};
  border-radius: 8px;
  height: 48px;
  width: 180px;
  padding: 0 2px;
  /* background-color: #ccc; */
`;

const Input = styled.input`
  display: inline-block;
  border: none;
  width: 130px;
  padding: 9px 20px;
  background: none;

  color: ${Colors.placeholder};
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;

function StuffedInput({ children }: StuffedInputProps) {
  return (
    <InputBox>
      <Input placeholder="inactive" />
      {children}
    </InputBox>
  );
}

export default StuffedInput;
