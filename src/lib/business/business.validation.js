import Joi from "@hapi/joi";

const CreateBusinessValSchema = Joi.object({
  name: Joi.string().required(),
  yearOfEstablishment: Joi.number().required(),
  owner: Joi.number().required(),
});

export const CreateBusinessVal = (user) => {
  const { value, error } = CreateBusinessValSchema.validate(user, {
    allowUnknown: true,
    abortEarly: false,
  });
  return { value, error };
};
