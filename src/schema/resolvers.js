import { UserList } from "../MockDB.js";
import { createUser, deleteUser, updateUser } from "../lib/user/user.mutations";
import {
  createBusiness,
  deleteBusiness,
  updateBusinessInfo,
} from "../lib/business/business.mutations.js";
import {
  getBusinesses,
  getBusiness,
} from "../lib/business/business.queries.js";

import {
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "../lib/customer/customer.mutations.js";
import { getCustomer, getCustomers } from "../lib/customer/customer.queries.js";

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

    getBusinesses,
    getBusiness,
    getCustomers,
    getCustomer,
  },

  Mutation: {
    createUser,
    updateUser,
    deleteUser,
    createBusiness,
    updateBusiness: updateBusinessInfo,
    deleteBusiness,
    addCustomer,
    updateCustomer,
    deleteCustomer,
  },
};

export default resolvers;
