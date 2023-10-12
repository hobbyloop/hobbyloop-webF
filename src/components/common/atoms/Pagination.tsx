import styled from "styled-components";
import { Colors } from "utils/constants/colors";

export interface PaginationProps {
  currentPage: number;
  maxPage: number;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 27px;
  vertical-align: middle;
  color: ${Colors.white};
  background-color: ${Colors.black};
  border: none;
  border-radius: 18px;
`;

function Pagination({ currentPage, maxPage }: PaginationProps) {
  return (
    <Container>
      {currentPage}/{maxPage}
    </Container>
  );
}

export default Pagination;
