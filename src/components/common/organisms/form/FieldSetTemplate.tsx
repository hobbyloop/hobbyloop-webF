import Label from "components/common/atoms/Label";
import { PropsWithChildren, forwardRef } from "react";
import styled from "styled-components";

interface Props {
  /** legend 텍스트 (undefined의 경우 legend 미노출) */
  legendText?: string;
  /** 값 입력 필수 항목 여부 (라벨에 * 생김) */
  required?: boolean;
}

/** fieldset을 구성하기 위한 템플릿 */
const FieldSetTemplate = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ legendText, required = false, children }, ref) => {
    return (
      <Container ref={ref}>
        {legendText && (
          <legend>
            <Label required={required}>{legendText}</Label>
          </legend>
        )}
        {children}
      </Container>
    );
  },
);

FieldSetTemplate.displayName = "FieldSetTemplate";
export default FieldSetTemplate;

/**
 * 참고) fieldset tag를 사용하려고 했으나, flex 속성이 적용되지 않는 버그가 있어서 div로 대체
 * https://github.com/FE-Lex-Kim/-TIL/blob/master/CSS/Fieldset%EC%9D%B4%20flex%EA%B0%80%20%EC%95%88%EB%90%98%EB%8A%94%20%EC%9D%B4%EC%9C%A0.md
 */
const Container = styled.div.attrs(() => ({
  role: "group",
}))`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
