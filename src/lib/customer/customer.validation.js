import Joi from "@hapi/joi";

const CustomerValSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
});

export const AddCustomerVal = (user) => {
  const { value, error } = CustomerValSchema.validate(user, {
    allowUnknown: true,
    abortEarly: false,
  });
  return { value, error };
};
