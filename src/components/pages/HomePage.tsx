import Logo from "components/common/atoms/Logo";
import TextButton from "components/common/atoms/TextButton";
import Footer from "components/common/templates/Footer";
import Header from "components/common/templates/Header";
import { useNavigate } from "react-router-dom";
import styled, { CSSObject } from "styled-components";
import { Colors } from "utils/constants/colors";

function HomePage() {
  const navigate = useNavigate();

  const adminCustomStyle: CSSObject = {
    fontWeight: 500,
    borderRadius: "30px",
    width: "117px",
    height: "40px",
  };

  const instructorCustomStyle: CSSObject = {
    fontWeight: 500,
    borderRadius: "30px",
    width: "117px",
    height: "40px",
    backgroundColor: Colors.white,
    color: Colors.black_14,
    border: `1px solid ${Colors.orange}`,
  };

  const footerCustomStyle: CSSObject = {
    backgroundColor: Colors.footer_EA,
  };

  return (
    <Container>
      <Header>
        <Logo />
        <ButtonsWrapper>
          <TextButton
            onClick={() => navigate("/login_admin")}
            customStyle={adminCustomStyle}
          >
            관리자 로그인
          </TextButton>
          <TextButton
            onClick={() => navigate("/login_instructor")}
            customStyle={instructorCustomStyle}
          >
            강사 로그인
          </TextButton>
        </ButtonsWrapper>
      </Header>
      <Body>
        <Promotion>
          <h2>Promotion</h2>
          <p>가입 플로우 안내 내용</p>
          <p>업체 등록 프로모션 내용</p>
          <p>하비루프는요</p>
        </Promotion>
        <PriceInfo>
          <h2>가격정보</h2>
          <span>기본요금: 38,500원</span>
          <span>프리미엄: 300,000원</span>
          <TextButton>업체 등록하기</TextButton>
        </PriceInfo>
      </Body>
      <Footer customStyle={footerCustomStyle} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 22px;
`;

const Body = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  padding: 80px 120px 120px 80px;
`;

const Promotion = styled.div`
  display: flex;
  flex-direction: column;
  width: 791px;
  height: 503px;
  padding: 40px 60px;
  border: 1px solid #f9f9f9;
  border-radius: 16px;
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 384px;
  height: 503px;
  padding: 40px 0;
  border: 1px solid #f9f9f9;
  border-radius: 16px;
`;

export default HomePage;
