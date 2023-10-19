import styled from "styled-components";
import { Colors } from "utils/constants/colors";
import Pagination, { PaginationProps } from "../atoms/Pagination";

interface TitleBarProps extends PaginationProps {
  showPage?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  border-bottom: 1px solid ${Colors.black};
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
function TitleBar({ currentPage, maxPage, showPage = true }: TitleBarProps) {
  return (
    <Container>
      <StyledWrapper>
        <H1>입점 등록신청</H1>
        {showPage ? (
          <Pagination currentPage={currentPage} maxPage={maxPage} />
        ) : (
          ""
        )}
      </StyledWrapper>
      <H2>업체 등록을 위한 약관에 동의해주세요.</H2>
    </Container>
  );
}

export default TitleBar;
