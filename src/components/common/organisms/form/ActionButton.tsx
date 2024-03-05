import TextButton from "components/common/atoms/TextButton";
import { ComponentProps, PropsWithChildren, useContext } from "react";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";
import { FormContext } from "./Root";

interface Props
  extends Omit<ComponentProps<typeof TextButton>, "type" | "onClick"> {
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: unknown,
  ) => void;
}

const ActionButton = ({
  children,
  onClick,
  ...rest
}: PropsWithChildren<Props>) => {
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error("useForm hook은 Form.Root 내부에서만 사용할 수 있습니다.");
  }

  return (
    <Button
      {...rest}
      type="button"
      onClick={(e) => {
        onClick?.(e, formContext[0]);
      }}
    >
      {children}
    </Button>
  );
};

export default ActionButton;

const Button = styled(TextButton)`
  background-color: ${Colors.white_F};
  border: 1px solid #a3a3a3;
  color: #777777;
`;
