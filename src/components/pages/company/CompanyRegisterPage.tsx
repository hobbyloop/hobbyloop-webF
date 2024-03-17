import Logo from "components/common/atoms/Logo";
import styled from "styled-components";
import TermsAgreementForm from "./TermsAgreementForm";
import Header from "components/common/templates/Header";

function CompanyRegisterPage() {
  //   const [page, setPage] = useState<number>(1);
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <TermsAgreementForm />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 60px;
`;

export default CompanyRegisterPage;
