import { TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = ({ ...rest }: Props) => {
  return <Container {...rest} />;
};

export default TextArea;

const Container = styled.textarea`
  width: 100%;
  height: 123px;
  min-height: 123px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${Colors.black_14};
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid ${Colors.gray};
  resize: none;
  font-weight: 500;
  padding: 12px 20px;
  outline: none;
  font-family: "Pretendard"; // TODO 전체 스타일로 빠지면 제거
  scroll-padding: 12px;

  &::placeholder {
    color: ${Colors.placeholder};
  }
`;
