import styled from "styled-components";
import { ICustomStyle } from "types/style";
import Logo from "../atoms/Logo";
import { Colors } from "utils/constants/colors";

interface FooterProps extends ICustomStyle {
  isDark?: boolean;
}

function Footer({ customStyle }: FooterProps) {
  return (
    <Container customStyle={customStyle}>
      <Logo />
      <AnchorContainer>
        <a>사업자 정보</a>
        <a>대표 번호</a>
        <a>홈페이지 주소</a>
      </AnchorContainer>
    </Container>
  );
}

const Container = styled.div<FooterProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 200px;
  padding: 50px 120px;
  background-color: ${(props) =>
    props.isDark ? Colors.black_14 : Colors.gray_EA};
  color: #c7c7c7;
  font-size: 12px;
  font-weight: 700;
`;

const AnchorContainer = styled.div`
  display: flex;
  gap: 28px;
`;

export default Footer;
