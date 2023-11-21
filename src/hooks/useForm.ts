import { FormContext } from "components/common/organisms/form/Root";
import { Dispatch, SetStateAction, useContext } from "react";

interface Params {
  propertyName: string;
}

const useForm = ({ propertyName }: Params) => {
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error("useForm hook은 Form.Root 내부에서만 사용할 수 있습니다.");
  }

  const [value, setValue] = formContext as [
    { [key: string]: unknown },
    Dispatch<SetStateAction<{ [key: string]: unknown }>>,
  ];

  if (Object.hasOwnProperty.call(value, propertyName) === false) {
    throw new Error(
      `"${propertyName}"로 정의된 데이터를 관리하지 않습니다. 사용한다면 추가해주세요`,
    );
  }

  const formValue = value[propertyName];

  const setValueByKey = (value: unknown) => {
    setValue((prev) => ({
      ...prev,
      [propertyName]: value,
    }));
  };

  return {
    value: formValue,
    setValue: setValueByKey,
  };
};

export default useForm;
