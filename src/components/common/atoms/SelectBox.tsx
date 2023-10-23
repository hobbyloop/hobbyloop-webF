import { SelectHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { ICustomStyle } from "types/style";

export interface ISelectBoxProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  // autoComplete?: string | undefined; 입력 필드에 대한 자동 완성 설정을 지정합니다.
  // disabled?: boolean | undefined;
  // form?: string | undefined; 요소가 어떤 <form> 요소에 속하는지를 지정합니다.
  // multiple?: boolean | undefined; 여러 옵션을 선택할 수 있는 다중 선택 목록인지 여부를 나타냅니다.
  // name?: string | undefined;
  // required?: boolean | undefined;
  // size?: number | undefined; 보여지는 옵션의 표시 줄 수를 지정합니다.
  // value?: string | ReadonlyArray<string> | number | undefined;
  // onChange?: ChangeEventHandler<T> | undefined;
  defaultValue: string;
}

const Select = styled.select<ICustomStyle>`
  display: flex;

  ${(props) => props.customStyle}
`;

function SelectBox({ defaultValue }: ISelectBoxProps) {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue); // 초기 선택값

  return <Select>SelectBox</Select>;
}

export default SelectBox;
