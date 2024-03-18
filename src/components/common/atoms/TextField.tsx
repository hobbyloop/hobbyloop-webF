import { InputHTMLAttributes, forwardRef } from "react";
import styled, { css } from "styled-components";
import { Colors } from "utils/constants/colors";
import ErrorMsg from "./ErrorMsg";

type TextFieldProps = {
  placeholder?: string;
  errorMsg?: string;
  submitInner?: boolean;
};

export type ErrorProps = Pick<TextFieldProps, "errorMsg">;

type IntupAttribute = InputHTMLAttributes<HTMLInputElement> & TextFieldProps;

//use임플리먼트 리팩토링?
const TextField = forwardRef<HTMLInputElement, IntupAttribute>(
  ({ children, submitInner, ...props }, ref) => {
    return (
      <>
        <StyledInputWrap submitInner={submitInner}>
          <StyledInput
            ref={ref}
            placeholder={props.placeholder}
            autoComplete="off"
            type={props.type}
            {...props}
          />
          {children}
        </StyledInputWrap>
        {props.errorMsg && <ErrorMsg errorMsg={props.errorMsg} />}
      </>
    );
  },
);

const StyledInput = styled.input`
  border: 1px solid ${Colors.gray_D7};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  height: 48px;
  width: 100%;
  padding: 0 20px;

  ::placeholder {
    color: ${Colors.gray_6C};
  }
`;
//   ${(props) => props.customStyle && css(props.customStyle)}

const StyledInputWrap = styled.div<{ submitInner?: boolean }>`
  ${({ submitInner }) =>
    submitInner &&
    css`
      width: 100%;
      height: 48px;
      position: relative;
      border: 1px solid ${Colors.gray_D7};
      border-radius: 8px;

      ${StyledInput} {
        position: absolute;
        width: calc(100% - 162px);
        height: 100%;
        outline: none;
        border: none;
      }
    `}
`;

TextField.displayName = "TextField";

export default TextField;
