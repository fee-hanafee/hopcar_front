import Joi from "joi";
import validate from "../../utils/validate";

const userRegisterSchema = Joi.object({
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be at least 6 characters and contain only alphabet and number",
      "any.required": "Password is required",
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "string.empty": "Confirm password is required",
      "any.only": "password and Confirm password did not match",
      "any.required": "Confirm password is required",
    })
    .strip(),
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "Email address is required",
    "any.required": "Email address is required",
  }),
  firstName: Joi.string().required().trim().messages({
    "string.empty": "First name is required",
    "any.required": "First name is required",
  }),
  lastName: Joi.string().required().trim().messages({
    "string.empty": "Last name is required",
    "any.required": "Last name is required",
  }),
});

const validateUserRegister = (input) => validate(userRegisterSchema)(input);

export default validateUserRegister;
