import TextButton from "components/common/atoms/TextButton";
import { ComponentProps, PropsWithChildren } from "react";

interface Props extends Omit<ComponentProps<typeof TextButton>, "type"> {}

const SubmitButton = ({ children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <TextButton {...rest} type="submit">
      {children}
    </TextButton>
  );
};

export default SubmitButton;
