import styled from "styled-components";
import PhoneAuthInput from "components/common/molecules/PhoneAuthInput";

const TestComponents = () => {
  return (
    <Container>
      <PhoneAuthInput isAuthenticated={false} />
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
