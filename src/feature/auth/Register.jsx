import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import useRender from "../context/renderProvider";
import validateRegister from "../validator/validate-register";
import useAuth from "../context/authProvider";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const { register } = useAuth();

  const { handleIsShow } = useRender();
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateRegister(input);
      if (validateError) {
        return setError(validateError);
      }

      if (!validateError) {
        await register(input);
        handleIsShow('login')
        setInput({});
      }
    } catch (error) {
      console.log(error);
      if (error.response?.data.message === "EMAIL_IN_USE")
        setError({ ...error, emailInUse: "Email not already in use" });
    }
  };



  return (
    <div className="flex justify-center items-center h-full ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col font-mono gap-4 border p-8 border-gray-400 rounded-lg"
      >
        <div className="flex justify-between">
          <h1 className="text-2xl">Sign Up</h1>
          <p
            onClick={() => handleIsShow({login:true})}
            className="translate-y-1 text-2xl text-red-500 hover:text-red-600"
            role="button"
          >
            X
          </p>
        </div>
        <div className="flex gap-4  ">
          <div className="flex flex-col">
            {error?.firstName && (
              <small className="text-red-500 absolute translate-x-1 -translate-y-4">{error?.firstName}</small>
            )}
            <TextField
              placeholder="First Name"
              value={input.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            {error?.lastName && (
              <small className="text-red-500 absolute translate-x-1 -translate-y-4">{error?.lastName}</small>
            )}
            <TextField
              placeholder="Last Name"
              value={input.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col">
          {error?.email && (
            <small className="text-red-500 absolute translate-x-1 -translate-y-4">{error?.email}</small>
          )}
          {error?.emailInUse && (
            <small className="text-red-500 absolute translate-x-1 -translate-y-4">{error?.emailInUse}</small>
          )}
          <TextField
            placeholder="Email"
            type="email"
            value={input.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          {error?.password && (
            <small className="text-red-500 absolute translate-x-1 -translate-y-4">{error?.password}</small>
          )}
          <TextField
            placeholder="Password"
            type="password"
            value={input.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          {error?.confirmPassword && (
            <small className="text-red-500 absolute translate-x-1 -translate-y-4">{error?.confirmPassword}</small>
          )}
          <TextField
            placeholder="Confirm Password"
            type="password"
            value={input.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
        <Button variant="contained" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default Register;
