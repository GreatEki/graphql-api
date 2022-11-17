import { UserList, MovieList } from "../MockDB.js";

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

  //   creating a resolve for custom type definitions
  User: {
    favouriteMovies: () => {
      const favMovies = MovieList.filter(
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
      return favMovies;
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      //   get last id in UserList
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },

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

      const filteredUsers = UserList.filter((user) => user.id !== theUser.id);
      return `User ${theUser.name} deleted`;
    },
  },
};

export default resolvers;
