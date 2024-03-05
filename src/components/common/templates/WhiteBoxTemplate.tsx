import React from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

export interface WhiteBoxTemplateProps {
  headerElements?: React.ReactElement;
  children: React.ReactNode;
}

function WhiteBoxTemplate({ children }: WhiteBoxTemplateProps) {
  return (
    <Container>
      <WhiteWrapper>{children}</WhiteWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteWrapper = styled.div`
  width: 792px;
  margin-top: 48px;
  margin-bottom: 120px;
  padding: 80px 100px;
  border-radius: 16px;
  border: 1px solid #e8e5e3;
  background-color: ${Colors.white_F};
`;

export default WhiteBoxTemplate;
