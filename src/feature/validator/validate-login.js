import Joi from "joi";
import validate from "../../utils/validate";

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
});

const validateLogin = (input) => validate(loginSchema)(input);

export default validateLogin;
