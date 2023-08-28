import { useState, ChangeEvent } from "react";

interface FormValues {
  name: string;
  email: string;
}

export default function useForm(getFreshModelObject: () => FormValues) {
  const [values, setValues] = useState<FormValues>(getFreshModelObject());
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  };
}
