import { ButtonHTMLAttributes, forwardRef } from "react";
import styled, { CSSProperties, css } from "styled-components";
import { Colors } from "utils/constants/colors";

type FormButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  backgroundColor?: string;
  width?: string;
  height?: string;
  submitInner?: boolean;
  color?: string;
};

const FormButton = forwardRef<HTMLButtonElement, FormButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton {...props} type={props.type} ref={ref}>
        {children}
      </StyledButton>
    );
  },
);

const StyledButton = styled.button<
  Pick<
    FormButtonProps,
    "backgroundColor" | "width" | "height" | "submitInner" | "color"
  >
>`
  border: 1px solid ${Colors.gray_6C};
  border-radius: 8px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : Colors.orange_FF5F05};
  width: ${({ width }) => (width ? width : "180px")};
  height: ${({ height }) => (height ? height : "48px")};
  color: ${({ color }) => (color ? color : Colors.black_14)};
  ${({ submitInner }) =>
    submitInner &&
    css`
      width: 107px;
      height: 32px;
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translate(0, -50%);
    `};
`;

FormButton.displayName = "FormButton";

export default FormButton;
