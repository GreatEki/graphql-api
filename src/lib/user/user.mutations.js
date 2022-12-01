import { BadRequestError } from "../../errors";
import { CreateUserVal } from "./user.validation";
import {
  createUserService,
  updateUserService,
  deleteUserService,
} from "./user.service";
import { UserList } from "../../MockDB";

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

export const deleteUser = (parent, args) => {
  const { id } = args;
  const result = deleteUserService(id);

  return result;
};
