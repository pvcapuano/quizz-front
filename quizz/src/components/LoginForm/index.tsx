import { createAPIEndpoint } from "../../api/index";
import { ENDPOINTS } from "../../constants/config";
import { useEffect } from "react";

import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import useStateContext from "../../hooks/useStateContext";

const getFreshModel = () => ({
  name: "",
  email: "",
});

const LoginForm = () => {
  const { context, setContext, resetContext } = useStateContext();
  const { values, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  const navigate = useNavigate();

  useEffect(() => {
    resetContext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      const postData = {
        name: values.name,
        email: values.email,
      };

      createAPIEndpoint(ENDPOINTS.participant)
        .post(postData)
        .then((res) => {
          setContext({ participantId: res.data.participantId });
          console.log(res);
          console.log(context);
          navigate("/questions");
        })
        .catch((err) => console.log(err));
    }
  };

  const validate = () => {
    const temp: { [key: string]: string } = {};
    temp.email = /^$|.+@.+..+/.test(values.email) ? "" : "Email is not valid.";
    temp.name = values.name != "" ? "" : "This field is required";

    setErrors(temp);
    return Object.values(temp).every((x) => x == "");
  };
  return (
    <form
      className="flex flex-col "
      noValidate
      autoComplete="on"
      onSubmit={login}
    >
      <input
        className={`border p-2 mb-2 ${errors.email ? "border-red-500" : ""}`}
        type="text"
        name="email"
        placeholder="E-mail"
        value={values.email}
        onChange={handleInputChange}
      />
      {errors.email && <span className="text-red-500">{errors.email}</span>}
      <input
        className={`border p-2 mb-2 ${errors.name ? "border-red-500" : ""}`}
        type="text"
        name="name"
        placeholder="Nome"
        value={values.name}
        onChange={handleInputChange}
      />
      {errors.name && <span className="text-red-500">{errors.name}</span>}
      <button
        type="submit"
        className="bg-slate-800 text-gray-100 uppercase py-2 px-4 rounded mt-2"
      >
        Iniciar
      </button>
    </form>
  );
};

export default LoginForm;
