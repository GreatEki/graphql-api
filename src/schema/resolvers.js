import UserList from "../MockDB.js";

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
  },
};

export default resolvers;
