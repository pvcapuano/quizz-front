"use client";
import React from "react";
import useForm from "@/hooks/useForm";
import { TextField, Button } from "@mui/material";

const getFreshModel = () => ({
  name: "",
  email: "",
});

const LoginForm = () => {
  const { values, errors, handleInputChange } = useForm(getFreshModel);

  const login = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form noValidate onSubmit={login}>
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        value={values.email}
        onChange={handleInputChange}
      />
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        value={values.name}
        onChange={handleInputChange}
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
