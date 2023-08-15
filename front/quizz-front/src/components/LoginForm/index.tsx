import { createAPIEndpoint } from "../../api/index";
import { ENDPOINTS } from "../../constants/config";

import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import useStateContext from "../../hooks/useStateContext";

type FormValues = {
  name: string;
  email: string;
};

const getFreshModel = () => ({
  name: "",
  email: "",
});

const LoginForm = () => {
  const { context, setContext } = useStateContext();
  const { values, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    if (validate())
      createAPIEndpoint(ENDPOINTS.participant)
        .post(values)
        .then((res) => {
          setContext({ participantId: res.data.participantId });
          console.log(res);
          console.log(context);
          navigate("/questions");
        })
        .catch((err) => console.log(err));
  };

  const validate = () => {
    let temp = {};
    temp.email = /^$|.+@.+..+/.test(values.email) ? "" : "Email is not valid.";
    temp.name = values.name != "" ? "" : "This field is required";

    setErrors(temp);
    return Object.values(temp).every((x) => x == "");
  };
  return (
    <form
      className="flex flex-col"
      noValidate
      autoComplete="on"
      onSubmit={login}
    >
      <input
        className={`border p-2 mb-2 ${errors.email ? "border-red-500" : ""}`}
        type="text"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleInputChange}
      />
      {errors.email && <span className="text-red-500">{errors.email}</span>}
      <input
        className={`border p-2 mb-2 ${errors.name ? "border-red-500" : ""}`}
        type="text"
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleInputChange}
      />
      {errors.name && <span className="text-red-500">{errors.name}</span>}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
      >
        Iniciar
      </button>
    </form>
  );
};

export default LoginForm;