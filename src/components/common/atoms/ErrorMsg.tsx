import styled from "styled-components";
import { ErrorProps } from "./TextField";

const ErrorMsg = ({ errorMsg, ...rest }: ErrorProps) => {
  return <StyledErrorMsg {...rest}>{errorMsg}</StyledErrorMsg>;
};

const StyledErrorMsg = styled.p`
  color: red;
`;
export default ErrorMsg;
