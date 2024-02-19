// import { useState } from "react";
// import styled from "styled-components";
// import { Colors } from "utils/constants/colors";

// export interface IOption {
//   key: string;
//   value: string;
// }

// interface ISelectBoxProps {
//   width?: number;
//   height?: number;
//   options: { key: string; value: string }[];
//   size?: number;
//   selectedOption: IOption | null;
//   placeholder?: string;
//   onChange?: (selectedValue: IOption) => void;
// }

// function NewSelectBox({
//   width = 200,
//   height = 30,
//   size = 4,
//   options,
//   selectedOption,
//   placeholder = "선택",
//   onChange,
// }: ISelectBoxProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOptionClick = (selectedOption: IOption) => {
//     setIsOpen(false);
//     if (onChange) {
//       onChange(selectedOption);
//     }
//   };
//   return (
//     <SelectBoxContainer width={width} isOpen={isOpen}>
//       <Select height={height} onClick={() => setIsOpen((prev) => !prev)}>
//         {selectedOption ? (
//           <span>{selectedOption.value}</span>
//         ) : (
//           <span className="palceholder">{placeholder}</span>
//         )}

//         {/* 아이콘 추출 예정.. */}
//         <span>{isOpen ? "▲" : "▼"}</span>
//       </Select>
//       {isOpen && (
//         <Options height={height} size={size}>
//           {options.map((option) => {
//             return (
//               <Option
//                 height={height}
//                 key={option.key}
//                 onClick={() => handleOptionClick(option)}
//               >
//                 {option.value}
//               </Option>
//             );
//           })}
//         </Options>
//       )}
//     </SelectBoxContainer>
//   );
// }

// export default NewSelectBox;

// const SelectBoxContainer = styled.div<{
//   width: number;
//   isOpen: boolean;
// }>`
//   position: relative;
//   width: ${(props) => props.width}px;
// `;

// const Select = styled.div<{ height: number }>`
//   padding: 8px;
//   width: 100%;
//   height: ${(props) => props.height}px;
//   border: 1px solid ${Colors.gray_D9};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   cursor: pointer;
// `;

// const Options = styled.ul<{ height: number; size: number }>`
//   position: absolute;
//   width: 100%;
//   height: ${(props) => props.size * props.height}px;
//   overflow-y: scroll;
//   border: 1px solid ${Colors.gray_D9};
//   border-top: none;
// `;

// const Option = styled.li<{ height: number }>`
//   padding: 8px;
//   width: 100%;
//   height: ${(props) => props.height}px;
//   border-bottom: 1px solid ${Colors.gray_D9};
//   cursor: pointer;

//   &:hover {
//     background-color: ${Colors.gray_D7};
//   }
// `;

import { useState } from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

/** options에 사용될 공통 인터페이스 */
export interface IOption {
  key: string;
  value: string;
}

interface ISelectBoxProps {
  /** selectbox에 들어갈 옵션 */
  options: { key: string; value: string }[];
  /** 현재 선택된 옵션 */
  selectedOption: IOption | null;
  /** 옵션 선택시 실행될 함수 */
  onChange: (selectedValue: IOption) => void;
  /** selectbox 너비 */
  width?: number;
  /** selectbox 높이 */
  height?: number;
  /** 몇개까지 표시할지 */
  size?: number;
  /** placeholder - 선택된 옵션이 없을 경우 표시 */
  placeholder?: string;
}

export const NewSelectBox = ({
  options,
  selectedOption,
  onChange,
  width = 200,
  height = 30,
  size = options.length,
  placeholder = "선택",
}: ISelectBoxProps) => {
  // selectbox 오픈 여부
  const [isOpen, setIsOpen] = useState(false);

  /** option 선택시 실행할 함수 */
  const handleOptionClick = (selectedOption: IOption) => {
    setIsOpen(false);
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
          <div>
            <p>
              {selectedOption ? (
                <span>{selectedOption.value}</span>
              ) : (
                <span className="placeholder">{placeholder}</span>
              )}

              {/* 아이콘 추출 예정.. */}
              <span className="icon">{isOpen ? "▲" : "▼"}</span>
            </p>
          </div>
        </Select>
        {isOpen && (
          <Options height={height} size={size}>
            {options.map((option, index) => {
              return (
                <Option
                  height={height}
                  key={option.key}
                  onClick={() => handleOptionClick(option)}
                  isLast={options.length - 1 === index}
                >
                  <div>
                    <p>{option.value}</p>
                  </div>
                </Option>
              );
            })}
          </Options>
        )}
      </SelectBoxContainer>
    </Container>
  );
};

export default NewSelectBox;

const Container = styled.div<{ width: number; height: number }>`
  position: relative;
  width: ${(props) => props.width}px;
  margin-bottom: ${(props) => props.height}px;
  font-size: 15px;
`;

const SelectBoxContainer = styled.div<{
  isOpen: boolean;
}>`
  position: absolute;
  width: 100%;
  background-color: ${Colors.white_F};
  border: 1px solid ${Colors.gray_D9};
  border-radius: 10px;
  box-shadow: 0 3px 3px 0 ${Colors.gray_D9};
`;

const Select = styled.div<{ height: number; isOpen: boolean }>`
  width: 100%;
  height: ${(props) => props.height}px;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  div {
    width: 93%;
    height: 100%;

    p {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: ${(props) =>
        props.isOpen ? `1px solid ${Colors.gray_D9}` : "none"};
    }
  }

  .placeholder {
    color: ${Colors.gray_6C};
  }

  .icon {
    margin-right: 10px;
  }
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
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
  /* padding: 8px; */
  width: 100%;
  height: ${(props) => props.height}px;

  div {
    width: 93%;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: ${(props) =>
      props.isLast ? "" : `1px solid ${Colors.gray_D9}`};
  }

  cursor: pointer;

  &:hover {
    background-color: ${Colors.gray_D7};
  }
`;
