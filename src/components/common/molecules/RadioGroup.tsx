import { ComponentProps } from "react";
import styled from "styled-components";
import LabeledRadioButton from "./LabeledRadioButton";

interface Props {
  name: string;
  groupList: Omit<ComponentProps<typeof LabeledRadioButton>, "name">[];
}

const RadioGroup = ({ name, groupList }: Props) => {
  return (
    <Container>
      {groupList.map(({ ...prop }) => (
        <LabeledRadioButton {...prop} key={name + prop.value} name={name} />
      ))}
    </Container>
  );
};

export default RadioGroup;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
