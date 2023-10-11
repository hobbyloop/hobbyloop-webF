import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/constants/colors';
import Header from './Header';

export interface WhiteContentTemplateProps {
  headerElements?: React.ReactElement;
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.app};
`;

const WhiteWrapper = styled.div`
  width: 792px;
  margin-top: 48px;
  margin-bottom: 120px;
  background-color: ${Colors.white};
`;

function WhiteContentTemplate({
  headerElements,
  children,
}: WhiteContentTemplateProps) {
  return (
    <Container>
      <Header>logo{headerElements}</Header>
      <WhiteWrapper>{children}</WhiteWrapper>
    </Container>
  );
}

export default WhiteContentTemplate;
