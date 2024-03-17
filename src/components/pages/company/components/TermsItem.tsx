import styled, { css } from "styled-components";
import CheckToggle from "./CheckToggle";
import { Link } from "react-router-dom";
import { Colors } from "utils/constants/colors";
import { useEffect, useState } from "react";

interface Props {
  isSelected: boolean;
  isRequired: boolean;
  name: string;
  termsTitle: string;
}

const Container = styled.div<{ $isAllCheck: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid ${Colors.gray_D7};
  padding: 0 16px 0 8px;

  ${(props) =>
    props.$isAllCheck &&
    css`
      border-bottom: 1px solid ${Colors.black_14};
    `}
`;

const ToggleWithTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Span = styled.span`
  font-size: 16px;
  padding-top: 2px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function TermsItem({ isSelected, isRequired, name, termsTitle }: Props) {
  const [isAllCheck, setIsAllCheck] = useState(false);

  // isSelected 상태는 밖에서 useReducer나 zustand로 관리

  useEffect(() => {
    if (name === "terms-allcheck") {
      setIsAllCheck(true);
    }
  }, [isRequired, name]);
  // name이 all-check 인 TermsItem을 누르면 borderbottom 색 바꾸고 다 isSelected = true

  console.log(isAllCheck);

  return (
    <Container $isAllCheck={isAllCheck}>
      <ToggleWithTextWrapper>
        <CheckToggle
          name={name}
          isSelected={isSelected}
          onClickToggle={() => {
            console.log("반대로 함수");
          }}
        />
        <Span>{termsTitle}</Span>
      </ToggleWithTextWrapper>
      <StyledLink to="/terms-detail">전체보기</StyledLink>
    </Container>
  );
}

export default TermsItem;
