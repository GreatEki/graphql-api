import { UserList } from "../../MockDB";

export async function createUserService(user) {
  //   get last id in UserList
  const lastId = UserList[UserList.length - 1].id;
  user.id = lastId + 1;
  UserList.push(user);
  return user;
}
