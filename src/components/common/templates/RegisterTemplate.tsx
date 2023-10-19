import styled from "styled-components";
import TitleBar from "../molecules/TitleBar";

export interface IRegisterTemplateProps {
  title: string;
  subTitle: string;
  showPage?: boolean;
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
`;

function RegisterTemplate({
  children,
  subTitle,
  title,
  showPage,
}: IRegisterTemplateProps) {
  return (
    <Container>
      <TitleBar />
      {children}
    </Container>
  );
}

export default RegisterTemplate;
