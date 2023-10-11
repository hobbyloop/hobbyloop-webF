import React from "react";
import styled from "styled-components";

interface LabeledInputProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function LabeledInput({ children }: LabeledInputProps) {
  return <Container>{children}</Container>;
}

export default LabeledInput;
