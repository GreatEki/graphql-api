import { BadRequestError } from "../../errors";
import { UserList } from "../../MockDB";

export function createUserService(user) {
  const existingUser = UserList.find((el) => el.email === user.email);
  if (existingUser) throw new BadRequestError("user with email already exists");
  //   get last id in UserList
  const lastId = UserList[UserList.length - 1].id;
  user.id = lastId + 1;
  UserList.push(user);
  return user;
}

export function updateUserService(user) {
  const { id, firstName, lastName, email } = user;

  let updatedUser;
  UserList.forEach((user) => {
    if (user.id === Number(id)) {
      (user.firstName = firstName),
        (user.lastName = lastName),
        (user.email = email);

      updatedUser = user;
    }
  });

  return updatedUser;
}

export function deleteUserService(userId) {
  const theUser = UserList.find((user) => user.id === Number(userId));
  if (!theUser) return null;

  UserList.filter((user) => user.id !== theUser.id);
  return `User ${theUser.firstName} deleted`;
}
