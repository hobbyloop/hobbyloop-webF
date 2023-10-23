import styled from "styled-components";
import TitleBar from "../molecules/TitleBar";
import { Colors } from "utils/constants/colors";

export interface IRegisterTemplateProps {
  title: string;
  subTitle: string;
  showPage?: boolean;
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  height: 100vh;
  gap: 36px;
`;

const WhiteWrapper = styled.div`
  width: 792px;
  /* margin-top: 48px; */
  /* margin-bottom: 120px; */
  padding: 80px 100px;
  border-radius: 16px;
  border: 1px solid #e8e5e3;
  background-color: ${Colors.white};
`;

function RegisterTemplate({
  children,
  subTitle,
  title,
  showPage,
}: IRegisterTemplateProps) {
  return (
    <Container>
      <WhiteWrapper>
        <TitleBar maxPage={4} />
        {children}
      </WhiteWrapper>
    </Container>
  );
}

export default RegisterTemplate;
