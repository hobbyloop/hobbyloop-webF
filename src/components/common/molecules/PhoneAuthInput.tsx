import { FC, HTMLAttributes } from "react";
import styled, { CSSObject, css } from "styled-components";
import Label from "../atoms/Label";
import TextButton from "../atoms/TextButton";

interface Props extends HTMLAttributes<HTMLElement> {
  isAuthenticated: boolean;
}

const PhoneAuthInput: FC<Props> = ({ isAuthenticated }) => {
  return (
    <Container>
      <Label required>전화번호 인증</Label>

      <Contents $isAuthenticated={isAuthenticated}>
        <TopInputContainer>
          <Select>
            <option value="skt">SKT</option>
            <option value="kt">KT</option>
            <option value="lg">LG</option>
          </Select>
          <Span>|</Span>
          <Input
            type="text"
            placeholder="-를 뺀 숫자만 입력해 주세요."
            maxLength={20}
          />
        </TopInputContainer>

        <BottomInputContainer>
          <BottomInput placeholder="인증번호를 입력해 주세요." />
          <TextButton customStyle={ButtonCustom}>인증번호 받기</TextButton>
        </BottomInputContainer>
      </Contents>

      <WarningMessage>잘못된 인증번호 입니다.</WarningMessage>
    </Container>
  );
};

const ButtonCustom: CSSObject = {
  backgroundColor: "transparent",
  border: "1px solid #5B8B4B",
  color: "#5B8B4B",
  width: "117px",
  height: "32px",
};

const Container = styled.div`
  width: 588px;

  * {
    box-sizing: border-box;
  }
`;

const Contents = styled.div<{ $isAuthenticated: boolean }>`
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  padding: 16px 0 0 20px;
  margin-top: 16px;

  background-color: white;

  ${(props) =>
    !props.$isAuthenticated &&
    css`
      border-color: #eb2323;

      & > div:nth-of-type(1) {
        border-color: #eb2323;
      }
    `}
`;

const TopInputContainer = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 15px;
`;

const Select = styled.select`
  width: calc(100% - 73%);
  font-size: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Span = styled.span`
  position: relative;
  top: 4px;
  color: #d9d9d9;
`;

const Input = styled.input`
  width: calc(100% - 27%);
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 0;
  font-size: 16px;

  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: #6c6c6c;
  }
`;

const BottomInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 16px 8px 0;
`;

const BottomInput = styled(Input)`
  padding: 3px 0;
  width: calc(100% - 21%);
`;

const WarningMessage = styled.div`
  margin-top: 10px;
  color: #eb2323;

  font-size: 12px;
  font-weight: 500;
`;

export default PhoneAuthInput;
