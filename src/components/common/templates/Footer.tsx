import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/constants/colors';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 200px;
  padding: 50px 120px;
  background-color: ${Colors.footer};

  color: #777;
  font-family: 'Font_Black';
  font-size: 12px;
  font-weight: 500;
`;

function Footer() {
  return <Container>Footer</Container>;
}

export default Footer;
