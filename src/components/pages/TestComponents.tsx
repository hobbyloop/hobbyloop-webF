import styled from "styled-components";
import PhoneAuthInput from "components/common/molecules/PhoneAuthInput";
import CircleToggleButton from "components/common/molecules/CircleToggleButton";

const TestComponents = () => {
  return (
    <Container>
      <CircleToggleButton />
    </Container>
  );
};

const Container = styled.div`
  background-color: aliceblue;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TestComponents;
