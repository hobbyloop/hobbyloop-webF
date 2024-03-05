import Footer from "components/common/templates/Footer";
import Header from "components/common/templates/Header";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

import addFacilityImg from "assets/Group 4404.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 80vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ProfileSelectPage() {
  return (
    <Container>
      <Header>
        <button>이용기간 연장하기</button>
      </Header>
      <ContentWrapper>
        <h1>하비루프에 오신 것을 환영합니다.</h1>
        <span>서비스 이용기간 2023.07.18 ~ 2024.07.18</span>
        <Link to="register">
          <img src={addFacilityImg} alt="시설 생성 버튼" />
        </Link>
        <span>시설을 등록해 주세요</span>
      </ContentWrapper>
      <Footer />
    </Container>
  );
}

export default ProfileSelectPage;
