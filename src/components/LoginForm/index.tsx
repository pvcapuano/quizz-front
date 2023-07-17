"use client";
import React from "react";
import useForm from "@/hooks/useForm";
import { TextField, Button } from "@mui/material";
import { error } from "console";

const getFreshModel = () => ({
  name: "",
  email: "",
});

const LoginForm = () => {
  const { values, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  const login = (e) => {
    e.preventDefault();

    if (validate()) console.log(values);
  };

  const validate = () => {
    let temp = {};
    temp.email = /^$|.+@.+..+/.test(values.email) ? "" : "Email is not valid.";
    temp.name = values.name != "" ? "" : "This field is required";

    setErrors(temp);
    return Object.values(temp).every((x) => x == "");
  };

  return (
    <form noValidate onSubmit={login}>
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        value={values.email}
        onChange={handleInputChange}
        {...(errors.email && { error: true, helperText: errors.email })}
      />
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        value={values.name}
        onChange={handleInputChange}
        {...(errors.name && { error: true, helperText: errors.name })}
      />
      <Button
        type="submit"
        variant="outlined"
        size="large"
        sx={{ width: "90%" }}
      >
        Iniciar
      </Button>
    </form>
  );
};

export default LoginForm;
