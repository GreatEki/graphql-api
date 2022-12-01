import { UserList } from "../../MockDB";

export function createUserService(user) {
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
