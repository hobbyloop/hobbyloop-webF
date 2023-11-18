import Logo from "components/common/atoms/Logo";
import TitleBar from "components/common/molecules/TitleBar";
import Header from "components/common/templates/Header";
import WhiteBoxTemplate from "components/common/templates/WhiteBoxTemplate";
import styled from "styled-components";

function CompanyRegisterPage() {
  //   const [page, setPage] = useState<number>(1);
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <StyledWhite>
        <TitleBar currentPage={1} maxPage={4} />
      </StyledWhite>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 60px;
`;

const StyledWhite = styled(WhiteBoxTemplate)`
  flex: 1;
`;

export default CompanyRegisterPage;
