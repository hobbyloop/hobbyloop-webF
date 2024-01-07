import styled from "styled-components";
import { Colors } from "utils/constants/colors";
import { ReactComponent as CameraIcon } from "assets/ic_camera.svg";
import { InputHTMLAttributes, useRef } from "react";

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "accept" | "multiple" | "style" | "value"
  > {}

const ImageUploader = ({ ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const openFileExplorer = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <Container type="button" onClick={openFileExplorer}>
        <CameraIcon />
        <AddButton>이미지 추가하기</AddButton>
      </Container>
      <input
        {...rest}
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        multiple
      />
    </>
  );
};

const Container = styled.button`
  width: 282px;
  min-width: 282px;
  height: 206px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${Colors.gray_D7};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const AddButton = styled.div`
  height: 20px;
  border: 1px solid ${Colors.black_14};
  border-radius: 12px;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 500;
  color: ${Colors.black_14};
`;

export default ImageUploader;
