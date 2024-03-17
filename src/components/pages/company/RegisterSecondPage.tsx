import styled from "styled-components";
import Logo from "components/common/atoms/Logo";
import Header from "components/common/templates/Header";
import { Colors } from "utils/constants/colors";
import WhiteBoxTemplate from "components/common/templates/WhiteBoxTemplate";
import TitleBar from "components/common/molecules/TitleBar";
import Label from "components/common/atoms/Label";
import PhoneAuthInput from "components/common/molecules/PhoneAuthInput";

const RegisterSecondPage = () => {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>

      <WhiteBoxTemplate>
        <TitleBar currentPage={2} maxPage={4} />

        <Contents>
          <Stack>
            <Label isRequired>면세사업자 여부</Label>

            <RowCenter>
              <RadioLabel htmlFor="YES" style={{ cursor: "pointer" }}>
                <Radio name="TAX_FREE" id="YES" />네
              </RadioLabel>
              <RadioLabel htmlFor="NO" style={{ cursor: "pointer" }}>
                <Radio name="TAX_FREE" id="NO" />
                아니오
              </RadioLabel>
            </RowCenter>
          </Stack>

          <Stack>
            <Label isRequired>대표자 이름</Label>
            <Input />
          </Stack>

          <Stack>
            <PhoneAuthInput
              isAuthenticated={true}
              getPhoneVerification={() => console.log("인증을 시작합니다")}
            />
          </Stack>
        </Contents>
      </WhiteBoxTemplate>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: ${Colors.green_5B8B4B};
`;

const Contents = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const RowCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
`;

const Radio = styled.input.attrs({
  type: "radio",
})`
  margin-top: -1px;
  vertical-align: middle;
  -webkit-appearance: none; // 웹킷 브라우저에서 기본 스타일 제거
  -moz-appearance: none; // 모질라 브라우저에서 기본 스타일 제거
  appearance: none; // 기본 브라우저에서 기본 스타일 제거
  width: 24px;
  height: 24px;
  border: 2px solid #ccc; // 체크되지 않았을 때의 테두리 색상
  border-radius: 50%;
  outline: none; // focus 시에 나타나는 기본 스타일 제거
  cursor: pointer;

  &:checked {
    background-color: ${Colors.black_14}; // 체크 시 내부 원으로 표시될 색상
    border: 3px solid white; // 테두리가 아닌, 테두리와 원 사이의 색상
    box-shadow: 0 0 0 1.6px ${Colors.black_14}; // 얘가 테두리가 됨
  }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

const Input = styled.input`
  padding: 0 16px;
  font-size: 16px;
  height: 48px;
  border: 1px solid ${Colors.gray_D7};
  border-radius: 8px;
`;

export default RegisterSecondPage;
