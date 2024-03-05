import styled from "styled-components";
import RectangleCheckbox from "../atoms/RectangleCheckbox";
import { ComponentProps } from "react";

interface Props {
  name: string;
  groupList: ComponentProps<typeof RectangleCheckbox>[];
}

const RectangleCheckboxGroup = ({ name, groupList }: Props) => {
  return (
    <FlexContainer>
      {groupList.map(({ ...prop }) => (
        <RectangleCheckbox {...prop} key={name + prop.value} name={name} />
      ))}
    </FlexContainer>
  );
};

export default RectangleCheckboxGroup;

const FlexContainer = styled.div`
  display: flex;
  gap: 8px;
`;
