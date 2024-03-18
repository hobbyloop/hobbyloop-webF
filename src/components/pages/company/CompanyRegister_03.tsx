import styled, { CSSObject } from "styled-components";
import { Colors } from "utils/constants/colors";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import Atom from "components/common/atoms";

function CompanyRegister03() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>({
    mode: "all",
  });

  interface IForm {
    businessAddress: string;
    businessNumber: string;
    openingDate: string;
    onlineReportNumber?: string;
    accountNumber: string;
  }

  const handleRegister = async (data: IForm) => {
    const {
      businessAddress,
      businessNumber,
      openingDate,
      onlineReportNumber,
      accountNumber,
    } = data;
    const body = {
      businessAddress,
      businessNumber,
      openingDate,
      onlineReportNumber,
      accountNumber,
    };

    console.log(body);
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <InputComponent
        label="사업장 주소"
        placeholder="사업장 주소를 입력해 주세요."
        isRequired
        errorMsg={errors.businessAddress && "사업장 주소를 입력해 주세요"}
        register={register("businessAddress", { required: true })}
      />
      <InputWithButtonContainer>
        <InputComponent
          label="사업자 번호"
          placeholder="사업자 번호를 입력해 주세요."
          isRequired
          errorMsg={errors.businessNumber && "인증번호를 확인해주세요"}
          register={register("businessNumber", { required: true })}
        ></InputComponent>
        <CertificationButton type="button">번호 인증</CertificationButton>
      </InputWithButtonContainer>
      <InputComponent
        width="180px"
        label="개업 일자"
        type="date"
        placeholder="입력"
        isRequired
        errorMsg={errors.openingDate && "일자를 입력해주세요"}
        register={register("openingDate", { required: true })}
      />
      <InputComponent
        label="통신판매 번호"
        placeholder="통신판매 번호가 있을시 입력해주세요"
        register={register("onlineReportNumber")}
      />
      <InputWithButtonContainer>
        <InputComponent
          label="계좌번호 등록"
          placeholder="계좌번호를 입력해주세요"
          isRequired
          errorMsg={errors.accountNumber && "인증번호를 확인해주세요"}
          register={register("accountNumber", { required: true })}
        />
        <CertificationButton type="button">번호 인증</CertificationButton>
      </InputWithButtonContainer>
      <ButtonContainer>
        <Atom.TextButton customStyle={CancelButtonStyled} type="button">
          취소
        </Atom.TextButton>
        <Atom.TextButton customStyle={NextButtonStyled} type="submit">
          다음
        </Atom.TextButton>
      </ButtonContainer>
    </form>
  );
}

const InputWithButtonContainer = styled.div`
  position: relative;
`;

const CertificationButton = styled.button`
  position: absolute;
  width: 107px;
  height: 32px;
  border: 1px solid ${Colors.gray_D7};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  z-index: 1;
  top: 45px;
  right: 10px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  margin-top: 56px;
`;

const CancelButtonStyled: CSSObject = {
  width: "180px",
  height: "48px",
  backgroundColor: `${Colors.white_F}`,
  border: `1px solid ${Colors.gray_D7}`,
  color: `${Colors.gray_6C}`,
};

const NextButtonStyled: CSSObject = {
  width: "384px",
};

export default CompanyRegister03;

// 여기서부터 react-hook-form 적용한 공통컴포넌트
interface InputComponentProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  type?: "text" | "password" | "number" | "date";
  width?: string;
  isRequired?: boolean;
  label?: string;
  placeholder?: string;
  errorMsg?: string;
  register?: UseFormRegisterReturn;
}

function InputComponent({
  type = "text",
  width = "100%",
  isRequired,
  label,
  placeholder,
  errorMsg,
  register,
}: InputComponentProps) {
  return (
    <InputContainer>
      {label && (
        <Label>
          {label}

          {isRequired && <span className="isRequired">*</span>}
        </Label>
      )}
      <Input
        type={type}
        width={width}
        placeholder={placeholder || ""}
        {...register}
      />
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </InputContainer>
  );
}

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const Label = styled.label`
  color: ${Colors.black_14};
  font-weight: 700;
  line-height: 21px;
  margin-bottom: 16px;

  .isRequired {
    margin-left: 3px;
    color: ${Colors.red_EB2323};
  }
`;

const Input = styled.input<{ width: string }>`
  width: ${(props) => props.width};
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${Colors.gray_D7};
  font-size: 16px;
  padding: 0 16px;

  &:focus {
    outline: none;
  }
`;

const ErrorMsg = styled.p`
  margin-top: 8px;
  color: ${Colors.red_EB2323};
  font-size: 12px;
  font-weight: 500;
`;
