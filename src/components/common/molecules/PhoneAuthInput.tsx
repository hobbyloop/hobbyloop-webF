import { FC, HTMLAttributes } from "react";
import styled, { CSSObject, css } from "styled-components";
import Atom from "components/common/atoms";
import { Colors } from "utils/constants/colors";

interface Props {
  isAuthenticated: boolean;
  getPhoneVerification?: () => void;
}

/**
 * @param isAuthenticated - 전화번호 인증 여부 (안되면 경고 UI)
 * @param getPhoneVerification - 인증번호 받기 함수
 */
const PhoneAuthInput: FC<Props> = ({
  isAuthenticated,
  getPhoneVerification,
}) => {
  return (
    <Container>
      <Atom.Label isRequired={true}>전화번호 인증</Atom.Label>

      <Contents $isAuthenticated={isAuthenticated}>
        <TopInputContainer>
          <Select>
            <option value="SKT">SKT</option>
            <option value="KT">KT</option>
            <option value="LG">LG</option>
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
          <Atom.TextButton customStyle={ButtonCustom}>
            인증번호 받기
          </Atom.TextButton>
        </BottomInputContainer>
      </Contents>

      {!isAuthenticated && (
        <WarningMessage>인증번호를 확인해 주세요.</WarningMessage>
      )}
    </Container>
  );
};

const ButtonCustom: CSSObject = {
  backgroundColor: "white",
  border: `1px solid ${Colors.gray_D7}`,
  color: `${Colors.black_14}`,
  width: "117px",
  height: "32px",
  fontWeight: 600,
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
