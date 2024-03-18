import Atom from "components/common/atoms";
import { ITextToggle } from "components/common/atoms/TextToggle";
import Molecule from "components/common/molecules";
import WhiteBoxTemplate from "components/common/templates/WhiteBoxTemplate";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";
import AddBreakTimeForm from "./AddBreakTimeForm";
import BreakTimeList from "./BreakTimeList";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const LabeledImageUploader = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexAlignCenterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageUploaderDivider = styled.div`
  width: 1px;
  height: 34px;
  background-color: ${Colors.gray_D7};
  margin: 0 12px;
`;

const Caption = styled.span`
  font-size: 12px;
  color: ${Colors.gray_6C};
  margin-top: 8px;
`;

const days: ITextToggle[] = [
  { name: "sun", text: "일", isSelected: false },
  { name: "mon", text: "월", isSelected: false },
  { name: "tue", text: "화", isSelected: false },
  { name: "wed", text: "수", isSelected: false },
  { name: "thu", text: "목", isSelected: false },
  { name: "fri", text: "금", isSelected: false },
  { name: "sat", text: "토", isSelected: false },
];

function FacilityRegisterForm() {
  const toggleDays = (name: string) => {
    console.log(name);
  };

  return (
    <WhiteBoxTemplate>
      <FormContainer>
        <Molecule.TitleBar
          title="시설 등록"
          subTitle="시설 등록을 위한 정보를 입력해 주세요."
          maxPage={2}
          currentPage={1}
        />
        <Molecule.LabeledInput
          labelConfig={{ isRequired: true, children: "시설명" }}
          inputConfig={{ width: "588px" }}
          isRequired={true}
        />
        <Molecule.LabeledInput
          labelConfig={{ isRequired: true, children: "위치정보" }}
          inputConfig={{ width: "588px" }}
          isRequired={true}
        />
        <LabeledImageUploader>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "17px",
            }}
          >
            <Atom.Label isRequired={true}>시설 소개 이미지</Atom.Label>
            {/* 나중에 따로 컴포넌트로 빼기 */}
            <FlexAlignCenterWrapper>
              <Atom.ImageUploader text="로고 이미지 추가하기" />
              <ImageUploaderDivider />
              <Atom.ImageUploader text="시설 이미지 추가하기" />
            </FlexAlignCenterWrapper>
          </div>
          <Caption>
            시설을 대표할 로고 이미지(png, jpg) 또는 대표 시설 이미지를 등록해
            주세요.
          </Caption>
        </LabeledImageUploader>
        {/* <Atom.Textarea name="asdf" /> */}
        <Molecule.LabeledTextarea
          labelConfig={{ children: "공지사항" }}
          textareaConfig={{
            name: "notice",
            placeholder: "공지사항을 입력해 주세요",
          }}
        />
        <Molecule.LabeledTextarea
          labelConfig={{ children: "시설소개" }}
          textareaConfig={{
            name: "introduce-facility",
            placeholder: "소개 글을 입력해 주세요",
          }}
        />
        <Molecule.LabeledInput
          labelConfig={{ isRequired: true, children: "문의 연락처" }}
          inputConfig={{ width: "588px" }}
          isRequired={true}
        />
        <Molecule.LabeledInput
          labelConfig={{ children: "오픈 카카오톡 문의" }}
          inputConfig={{ width: "588px" }}
        />
        <LabeledImageUploader>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "17px",
            }}
          >
            <Atom.Label isRequired={true}>운영시간</Atom.Label>
            {/* 나중에 따로 컴포넌트로 빼기 */}
            {/* 상태관리: useReducer? zustand? */}
            <FlexAlignCenterWrapper>
              <Molecule.MultiTextToggle
                toggleStates={days}
                onClickToggleEvent={toggleDays}
                customStyle={{ width: "384px" }}
              />
            </FlexAlignCenterWrapper>
          </div>
          <Caption>
            시설을 대표할 로고 이미지(png, jpg) 또는 대표 시설 이미지를 등록해
            주세요.
          </Caption>
        </LabeledImageUploader>
        <BreakTimeList />
        <AddBreakTimeForm />
      </FormContainer>
    </WhiteBoxTemplate>
  );
}

export default FacilityRegisterForm;
