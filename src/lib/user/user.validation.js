import Joi from "@hapi/joi";
import User from "./user.entity";

const UserValSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  address: Joi.string().required(),
  phoneNumber: Joi.string().required(),
});

export const CreateUserVal = (user) => {
  const { value, error } = UserValSchema.validate(user, {
    allowUnknown: true,
    abortEarly: false,
  });
  return { value, error };
};
