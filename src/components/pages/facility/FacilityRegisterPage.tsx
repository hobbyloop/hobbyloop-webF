import Logo from "components/common/atoms/Logo";
import Header from "components/common/templates/Header";
import styled from "styled-components";
import FacilityRegisterForm from "./components/FacilityRegisterForm";

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default FacilityRegisterPage;
