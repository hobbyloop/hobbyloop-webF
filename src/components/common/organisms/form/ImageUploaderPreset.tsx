import ImageUploader from "components/common/atoms/ImageUploader";
import { ComponentProps, forwardRef } from "react";
import FieldSetTemplate from "./FieldSetTemplate";
import styled from "styled-components";

type ImageUploaderFactory = Omit<
  ComponentProps<typeof ImageUploader>,
  "onChange"
> & { value: File[] };
type FieldSetOptions = ComponentProps<typeof FieldSetTemplate>;

interface Props {
  fieldSetOptions?: FieldSetOptions;
  factory: {
    onChange: (value: File[]) => void;
    element: ImageUploaderFactory;
  };
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_IMAGE_UPLOAD_COUNT = 5;

const filterLimitedFileSize = (files: FileList) => {
  const filteredFiles: File[] = [];
  let oversizeCount = 0;

  for (let i = 0; i < files.length; i++) {
    if (files[i].size > MAX_FILE_SIZE) {
      oversizeCount++;
    } else {
      filteredFiles.push(files[i]);
    }
  }

  return {
    filteredFiles,
    oversizeCount,
  };
};

/** formType === "imageUploader" */
const ImageUploaderPreset = forwardRef<HTMLDivElement, Props>(
  ({ fieldSetOptions, factory }, ref) => {
    const {
      onChange,
      element: { value: oldFiles, ...elementRest },
    } = factory;

    return (
      <FieldSetTemplate {...fieldSetOptions} ref={ref}>
        <HorizontalScrollContainer>
          <ImageUploader
            {...elementRest}
            onChange={(e) => {
              const newFiles = e.target.files;
              if (!newFiles) return;

              // 이미지 최대 첨부 개수 초과
              if (newFiles.length + oldFiles.length > MAX_IMAGE_UPLOAD_COUNT) {
                alert(
                  `이미지는 최대 ${MAX_IMAGE_UPLOAD_COUNT}개까지 첨부할 수 있습니다.`,
                );
                return;
              }

              // 허용 용량 초과한 경우 이미지 제거
              const { filteredFiles, oversizeCount } =
                filterLimitedFileSize(newFiles);

              onChange(filteredFiles);

              if (oversizeCount > 0) {
                alert(
                  `첨부할 수 있는 이미지의 크기는 최대 ${
                    MAX_FILE_SIZE / 1024 / 1024
                  }MB입니다. (${oversizeCount}개의 이미지 첨부 실패)`,
                );
              }
            }}
          />
          {oldFiles.map((image) => {
            const url = URL.createObjectURL(image);
            return (
              <ImageContainer key={url}>
                <Image src={url} />
              </ImageContainer>
            );
          })}
        </HorizontalScrollContainer>
      </FieldSetTemplate>
    );
  },
);

ImageUploaderPreset.displayName = "ImageUploaderPreset";
export default ImageUploaderPreset;

const HorizontalScrollContainer = styled.div`
  position: relative;
  width: calc(100% + 204px);
  left: -102px;
  padding: 0 102px;
  display: flex;
  gap: 24px;
  box-sizing: border-box;

  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 282px;
  min-width: 282px;
  height: 206px;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
