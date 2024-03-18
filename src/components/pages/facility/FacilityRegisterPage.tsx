import Label from "components/common/atoms/Label";
import Logo from "components/common/atoms/Logo";
import Pagination from "components/common/atoms/Pagination";
import Header from "components/common/templates/Header";
import WhiteBoxTemplate from "components/common/templates/WhiteBoxTemplate";
import { CSSProperties, useRef } from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaciltyRegisterSchema, facilityRegisterSchema } from "./schema";
import TextField from "components/common/atoms/TextField";
import FormButton from "components/common/atoms/FormButton";
import { ReactComponent as BackArrowIcon } from "assets/ic_backArrow.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function FacilityRegisterPage() {
  const buttonRef = useRef(null);

  const {
    register,
    handleSubmit: faciltyRegisterHandle,
    formState: { errors, isValid, isDirty },
  } = useForm<FaciltyRegisterSchema>({
    resolver: zodResolver(facilityRegisterSchema),
  });

  // console.log("isDirty?", isDirty);

  const onSubmit: SubmitHandler<FaciltyRegisterSchema> = (data) => {
    if (buttonRef) {
      console.log("버튼타입에따라", buttonRef.current);
    }
    console.log("Form data submitted:", data);
  };

  const onError: SubmitErrorHandler<FaciltyRegisterSchema> = (error) => {
    console.log("error", error);
  };

  const businessNumberHandle = () => {
    console.log("인증번호 onClick");
  };

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <WhiteBoxTemplate>
        <StyledTextOuter>
          <BackArrowIcon />
          <StyledText fontSize="38px" fontWeight="700">
            시설 등록
          </StyledText>
          <Pagination currentPage={2} maxPage={2} />
          <StyledText fontSize="22px">
            시설 등록을 위한 정보를 입력해 주세요.
          </StyledText>
        </StyledTextOuter>
        <StyledFormWrap onSubmit={faciltyRegisterHandle(onSubmit, onError)}>
          <StyledFlex>
            <Label isRequired htmlFor="representaviveName">
              대표자 이름
            </Label>
            <TextField
              id="representaviveName"
              width="100%"
              {...register("representativeName")}
              errorMsg={errors.representativeName?.message}
            />
          </StyledFlex>
          <StyledFlex>
            <Label isRequired htmlFor="businessNumber">
              사업자 번호
            </Label>
            <TextField
              submitInner
              id="businessNumber"
              width="100%"
              {...register("businessNumber")}
              errorMsg={errors.businessNumber?.message}
            >
              <FormButton
                // type="submit"
                submitInner
                onClick={businessNumberHandle}
                name="businessNumber"
                ref={buttonRef}
                backgroundColor="transparent"
              >
                번호인증
              </FormButton>
            </TextField>
          </StyledFlex>
          <StyledFlex>
            <Label isRequired htmlFor="OpeningDate">
              개업일자
            </Label>
            {/* <DateInput
              value={selectedDate}
              onClickCalendar={handleCalendarClick}
            /> */}
          </StyledFlex>
          <StyledFlex>
            <Label isRequired htmlFor="mailOrderNumber">
              통신판매 번호
            </Label>
            <TextField
              id="mailOrderNumber"
              placeholder="통신판매 번호가 있을시 입력해 주세요."
              width="100%"
              {...register("mailOrderNumber")}
              errorMsg={errors.mailOrderNumber?.message}
            />
          </StyledFlex>
          <StyledButtonWrap>
            <FormButton backgroundColor="transparent">취소</FormButton>
            <FormButton
              // disabled={!isDirty || !isValid}
              type="submit"
              width="384px"
            >
              다음
            </FormButton>
          </StyledButtonWrap>
        </StyledFormWrap>
      </WhiteBoxTemplate>
    </Container>
  );
}

const StyledFormWrap = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin: 32px 0 56px;
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  position: relative;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
// display: grid;
// grid-template-columns: 180px 384px;

const StyledText = styled.p<Pick<CSSProperties, "fontSize" | "fontWeight">>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

const StyledTextOuter = styled.div`
  display: grid;
  border-bottom: 1px solid ${Colors.black_14};
  grid-template-columns: 40px auto 1fr;

  :not(${StyledText}) {
    justify-self: end;
  }
  ${StyledText} {
    &:first-child {
      grid-column: 2/3;
    }
    &:last-child {
      padding: 32px 0;
      grid-column: 1/3;
    }
  }
`;

export default FacilityRegisterPage;
