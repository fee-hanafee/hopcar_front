import Joi from "joi";
import validate from "../../utils/validate";

const schemaCreate = Joi.object({
  licenseHead: Joi.string().required().messages({
    "string.empty": "required",
    "any.required": "required",
  }),
  licenseBody: Joi.number().positive().required().messages({
    "string.empty": "required",
    "any.required": "required",
    "number.base": "license must be a number",
  }),
  city: Joi.string().required().messages({
    "string.empty": "required",
    "any.required": "required",
  }),
  model: Joi.string().required().messages({
    "string.empty": "required",
    "any.required": "required",
  }),

}).unknown(true);

const validateCreate = (input) => validate(schemaCreate)(input);

export default validateCreate;
