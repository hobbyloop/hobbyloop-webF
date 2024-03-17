import React, { useState, useRef, ChangeEvent } from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";
import { ReactComponent as CameraIcon } from "assets/ic_camera.svg";
import { InputHTMLAttributes } from "react";

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "accept" | "multiple" | "style" | "value"
  > {
  text: string;
}

const ImageUploader = ({ text, ...rest }: Props) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const openFileExplorer = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Container type="button" onClick={openFileExplorer}>
        {imagePreview ? (
          <ImagePreview src={imagePreview} alt="Preview" />
        ) : (
          <>
            <CameraIcon />
            <ButtonText>{text}</ButtonText>
          </>
        )}
      </Container>
      <input
        {...rest}
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        multiple
        onChange={handleImageChange}
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
  position: relative;
  overflow: hidden;
`;

const ButtonText = styled.span`
  padding: 0 8px;
  font-size: 12px;
  font-weight: 500;
  color: ${Colors.black_14};
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export default ImageUploader;
