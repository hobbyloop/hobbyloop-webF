import { useState } from "react";
import styled, { css } from "styled-components";
import { Colors } from "utils/constants/colors";
import { ReactComponent as ChevronIcon } from "assets/ic_chevron.svg";

/** options에 사용될 공통 인터페이스 */
export interface IOption {
  key: string;
  value: string;
}

interface Props {
  options: { key: string; value: string }[];
  onChange?: (selectedValue: IOption) => void;
  width?: number;
  height?: number;
  size?: number;
  defaultOption?: IOption;
  placeholder?: string;
}

/**
 * @example 
 *    <SelectBox
        options={OPTIONS}
        selectedOption={[
          { key: "1", value: "헬스/피티" },
          { key: "2", value: "필라테스" }]}
        onChange={(option: IOption) => setSelectedCategory(option)}
      /> 
 * @param options - selectbox에 들어갈 옵션
 * @param selectedOption - 선택된 옵션
 * @param onChange - 옵션 선택시 실행될 함수
 * @param width - selectbox 너비
 * @param height - selectbox 높이
 * @param size - 몇개까지 표시할지
 * @param placeholder - 선택된 옵션이 없을 경우 표시할 문구
 */
export const SelectBox = ({
  options,
  onChange,
  width = 200,
  height = 47,
  size = options.length,
  defaultOption,
  placeholder = "선택",
}: Props) => {
  // selectbox 오픈 여부
  const [isOpen, setIsOpen] = useState(false);
  // 선택된 옵션
  const [selectedOption, setSelectedOption] = useState<IOption | undefined>(
    defaultOption || undefined,
  );

  /** option 선택시 실행할 함수 */
  const handleOptionClick = (selectedOption: IOption) => {
    setIsOpen(false);
    setSelectedOption(selectedOption);
    if (onChange) {
      onChange(selectedOption);
    }
  };

  return (
    <Container width={width} height={height}>
      <SelectBoxContainer isOpen={isOpen}>
        <Select
          height={height}
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {selectedOption ? (
            <span>{selectedOption.value}</span>
          ) : (
            <span className="placeholder">{placeholder}</span>
          )}
          <ChevronIconStyle isOpen={isOpen}>
            <ChevronIcon />
          </ChevronIconStyle>
        </Select>
        {isOpen && (
          <Options height={height} size={size}>
            {options.map((option, index) => {
              return (
                <Option
                  height={height}
                  isLast={options.length - 1 === index}
                  key={option.key}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.value}
                </Option>
              );
            })}
          </Options>
        )}
      </SelectBoxContainer>
    </Container>
  );
};

export default SelectBox;

const Container = styled.div<{ width: number; height: number }>`
  position: relative;
  width: ${(props) => props.width}px;
  margin-bottom: ${(props) => props.height}px;
`;

const SelectBoxContainer = styled.div<{
  isOpen: boolean;
}>`
  position: absolute;
  width: 100%;
  font-size: 16px;
  background-color: ${Colors.white_F};
  border: 1px solid ${Colors.gray_D9};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Select = styled.div<{ height: number; isOpen: boolean }>`
  position: relative;
  padding: 12px;
  width: 100%;
  height: ${(props) => props.height}px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .placeholder {
    color: ${Colors.gray_6C};
  }

  ${(props) =>
    props.isOpen &&
    css`
      &:after {
        position: absolute;
        content: "";
        bottom: 0px;
        left: 12px;
        width: 100%;
        height: 1px;
        background-color: ${Colors.gray_D9};
      }
    `}
`;

const ChevronIconStyle = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(props) => props.isOpen && "scaleY(-1)"};
`;

const Options = styled.ul<{ height: number; size: number }>`
  width: 100%;
  height: ${(props) => props.size * props.height}px;
  background-color: transparent;
  overflow-y: scroll;

  //스크롤바 숨기기
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Option = styled.li<{ height: number; isLast: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px;
  width: 100%;
  height: ${(props) => props.height}px;

  &:after {
    position: absolute;
    content: "";
    bottom: 0px;
    left: 12px;
    width: 100%;
    height: 1px;
    background-color: ${Colors.gray_D9};

    //마지막 요소일 때 밑줄 제거
    ${(props) =>
      props.isLast &&
      css`
        display: none;
      `}
  }

  cursor: pointer;

  &:hover {
    background-color: rgba(217, 217, 217, 0.3);
  }
`;
