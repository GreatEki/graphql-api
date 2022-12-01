import { UserList, MovieList } from "../MockDB.js";
import { createUser } from "../lib/user/user.mutations";

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

    updateUser: (parent, args) => {
      const { id, name, username, age, nationality } = args.input;
      let updatedUser;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          (user.username = username),
            (user.age = age),
            (user.nationality = nationality);

          updatedUser = user;
        }
      });

      return updatedUser;
    },

    deleteUser: (parent, args) => {
      const { id } = args;
      const theUser = UserList.find((user) => user.id === Number(id));
      if (!theUser) return null;

      UserList.filter((user) => user.id !== theUser.id);
      return `User ${theUser.name} deleted`;
    },
  },
};

export default resolvers;
