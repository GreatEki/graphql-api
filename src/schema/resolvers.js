import { UserList } from "../MockDB.js";
import { createUser, deleteUser, updateUser } from "../lib/user/user.mutations";
import {
  createBusiness,
  deleteBusiness,
  updateBusinessInfo,
} from "../lib/business/business.mutations.js";
import {
  getBusinessess,
  getBusiness,
} from "../lib/business/business.queries.js";

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

    getBusinesses: getBusinessess,
    getBusiness: getBusiness,
  },

  Mutation: {
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    createBusiness: createBusiness,
    updateBusiness: updateBusinessInfo,
    deleteBusiness: deleteBusiness,
  },
};

export default resolvers;
