import Logo from "components/common/atoms/Logo";
import Header from "components/common/templates/Header";
import WhiteBoxTemplate from "components/common/templates/WhiteBoxTemplate";
import React from "react";
import styled from "styled-components";
import FacilityRegisterForm from "./components/FacilityRegisterForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function FacilityRegisterPage() {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <FacilityRegisterForm />
    </Container>
  );
}

export default FacilityRegisterPage;
