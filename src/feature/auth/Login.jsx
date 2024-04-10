import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import useAuth from "../context/authProvider";
import validateLogin from "../validator/validate-login";
import useRender from "../context/renderProvider";

function Login() {
  const { login } = useAuth();
  const { handleIsShow } = useRender();
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({});
  };


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateLogin(input);
      if (validateError) {
        setError(validateError);
      }
      if (!validateError) {
        await login(input);
      }
    } catch (error) {
      console.log(error.response?.data.message);
    }
  };

  return (
    <div className=" h-full flex justify-center items-center">
      <div className="w-[400px] border font-mono  border-gray-400 p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
          <h1 className=" text-2xl ">Hobcar</h1>
          <div className="">
            {error?.email && (
              <small className="text-red-500 absolute translate-x-1 -translate-y-4">{error?.email}</small>
            )}
            <TextField
              sx={{ width: "100%" }}
            
              label="Example@gmail.com"
              variant="outlined"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
          </div>
          <div>
            {error?.password && (
              <small className="text-red-500 absolute translate-x-1 -translate-y-4">{error?.password}</small>
            )}

            <TextField
              sx={{ width: "100%" }}
             
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-4 justify-center">
            <Button variant="contained" type="submit">
              Sign In
            </Button>
            <Button
              variant="outlined"
              type="button"
              onClick={() => handleIsShow({register:true})}
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
