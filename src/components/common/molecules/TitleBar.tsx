import styled from "styled-components";
import { Colors } from "utils/constants/colors";
import Pagination, { PaginationProps } from "../atoms/Pagination";

interface TitleBarProps extends PaginationProps {
  showPage?: boolean;
  title: string;
  subTitle: string;
}

function TitleBar({
  currentPage = 1,
  maxPage,
  showPage = true,
  title,
  subTitle,
}: TitleBarProps) {
  return (
    <Container>
      <StyledWrapper>
        <H1>{title}</H1>
        {showPage && <Pagination currentPage={currentPage} maxPage={maxPage} />}
      </StyledWrapper>
      <H2>{subTitle}</H2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 120px;
  border-bottom: 1px solid ${Colors.black_14};
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
`;

const H2 = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
`;

export default TitleBar;
