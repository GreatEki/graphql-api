import { BadRequestError } from "../../errors";
import { CreateUserVal } from "./user.validation";
import { createUserService, updateUserService } from "./user.service";

export const createUser = (parent, args) => {
  const { value, error } = CreateUserVal(args.input);

  if (error)
    throw new BadRequestError(
      "Failed to create user: Validation Error",
      400,
      error
    );

  const user = createUserService(value);

  return user;
};

export const updateUser = (parent, args) => {
  const user = args.input;

  const updatedUser = updateUserService(user);
  return updatedUser;
};
