import { User } from "../../entities";
import { BadRequestError } from "../../errors";
import { CreateUserVal } from "./user.validation";

export const createUser = (parent, args) => {
  //   const { firstName, lastName, email, address, phoneNumber } = args.input;

  const { value, error } = CreateUserVal(args.input);

  console.log(error);

  if (error)
    throw new BadRequestError(
      "Failed to create user: Validation Error",
      400,
      error
    );

  console.log(value);

  return value;
};
