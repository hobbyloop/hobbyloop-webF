import styled from "styled-components";
import { ICustomStyle } from "types/style";
import { Colors } from "utils/constants/colors";

export interface PaginationProps extends ICustomStyle {
  currentPage?: number;
  maxPage?: number;
}

const Container = styled.div<ICustomStyle>`
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

function Pagination({ currentPage, maxPage, customStyle }: PaginationProps) {
  return (
    <Container customStyle={customStyle}>
      {currentPage}/{maxPage}
    </Container>
  );
}

export default Pagination;
