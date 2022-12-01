import { UserList, MovieList } from "../MockDB.js";
import { createUser, deleteUser, updateUser } from "../lib/user/user.mutations";
import { createBusiness } from "../lib/business/business.mutations.js";

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (_, args) => {
      const id = args.id;
      const user = UserList.find((user) => user.id === Number(id));

      return user;
    },

    movies: () => {
      return MovieList;
    },

    movie: (_, args) => {
      const name = args.name;
      const movie = MovieList.find((mv) => mv.name === name);
      return movie;
    },
  },

  Mutation: {
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    createBusiness: createBusiness,
  },
};

export default resolvers;
