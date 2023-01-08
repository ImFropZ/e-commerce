import Joi from "joi";

export const schema = Joi.object({
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).min(8),
  repeat_password: Joi.ref("password"),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});
