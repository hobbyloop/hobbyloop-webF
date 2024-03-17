import TextButton from "components/common/atoms/TextButton";
import TitleBar from "components/common/molecules/TitleBar";
import WhiteBoxTemplate from "components/common/templates/WhiteBoxTemplate";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";
import TermsItem from "./components/TermsItem";

interface Props {}

const termsList = [
  {
    id: "terms-allcheck",
    isSelected: false,
    isRequired: false,
    label: "약관 전체 동의(선택 정보 포함)",
  },
  { id: "terms1", isSelected: false, isRequired: true, label: "[필수]약관01" },
  { id: "terms2", isSelected: false, isRequired: true, label: "[필수]약관02" },
  { id: "terms3", isSelected: false, isRequired: false, label: "[선택]약관03" },
  { id: "terms4", isSelected: false, isRequired: false, label: "[선택]약관04" },
];

function TermsAgreementForm() {
  return (
    <WhiteBoxTemplate>
      <TitleBar
        title="입점 등록신청"
        subTitle="업체 등록을 위한 약관에 동의해주세요."
        currentPage={1}
        maxPage={4}
      />
      <TermsList>
        {termsList.map((item) => {
          return (
            <TermsItem
              key={item.id}
              name={item.id}
              isSelected={item.isSelected}
              isRequired={item.isRequired}
              termsTitle={item.label}
            />
          );
        })}
      </TermsList>
      <ButtonWrapper>
        <TextButton
          customStyle={{
            backgroundColor: Colors.white_F,
            width: "180px",
            color: Colors.gray_6C,
            border: `1px solid ${Colors.gray_D7}`,
          }}
        >
          취소
        </TextButton>
        <TextButton>다음</TextButton>
      </ButtonWrapper>
    </WhiteBoxTemplate>
  );
}

const TermsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 57px;
`;

export default TermsAgreementForm;
