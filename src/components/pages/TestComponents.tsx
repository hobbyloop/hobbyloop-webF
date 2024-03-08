import styled from "styled-components";

import { useState } from "react";
import { IOption, SelectBox } from "components/common/atoms/SelectBox";

const OPTIONS = [
  { key: "1", value: "헬스/피티" },
  { key: "2", value: "필라테스" },
  { key: "3", value: "공방" },
  { key: "4", value: "쿠키" },
  { key: "5", value: "그림" },
  { key: "6", value: "반려동물" },
];
const TestComponents = () => {
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

  console.log(selectedOption);

  return (
    <Container>
      {/* <PhoneAuthInput isAuthenticated={false} /> */}

      <SelectBox
        options={OPTIONS}
        defaultOption={OPTIONS[0]}
        onChange={(option: IOption) => setSelectedOption(option)}
      />
    </Container>
  );
};

const Container = styled.div`
  background-color: aliceblue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default TestComponents;
