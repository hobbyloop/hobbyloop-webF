import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import styled from "styled-components";

type FormValue = { [key: string]: unknown };

export const FormContext = createContext<
  [unknown, SetStateAction<unknown>] | undefined
>(undefined);

interface Props<T extends FormValue> {
  initialValue: T;
  onSubmit: (values: T) => void;
}

const Root = <T extends FormValue>({
  children,
  initialValue,
  onSubmit,
}: PropsWithChildren<Props<T>>) => {
  const formValue = useState(initialValue);

  return (
    <FormContext.Provider value={formValue}>
      <Form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onSubmit(formValue[0]);
        }}
      >
        {children}
      </Form>
    </FormContext.Provider>
  );
};

export default Root;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
