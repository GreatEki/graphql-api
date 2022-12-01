import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Business {
    id: ID!
    name: String!
    yearOfEstablishment: Int!
    owner: ID!
  }

  type Customer {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type BusinessCustomers {
    id: ID!
    business: Business!
    customer: Customer!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
  }

  input updateUserInput {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  input CreateBusinessInput {
    name: String!
    yearOfEstablishment: Int!
    owner: ID!
  }

  input UpdateBusinessInput {
    id: ID!
    name: String!
    yearOfEstablishment: Int!
    owner: ID!
  }

  input AddCustomerInput {
    firstName: String!
    lastName: String!
    email: String!
  }

  input AddCustomerBusinessInput {
    business: ID!
    customer: ID!
  }

  input UpdateCustomerInput {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    getBusinesses: [Business]
    getBusiness(id: ID!): Business
    getCustomers: [Customer]
    getCustomer(id: ID!): Customer
    getBusinessCustomers(businessId: ID!): BusinessCustomers
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: updateUserInput!): User
    deleteUser(id: ID!): String
    createBusiness(input: CreateBusinessInput!): Business
    updateBusiness(input: UpdateBusinessInput!): Business
    deleteBusiness(id: ID!): String
    addCustomer(input: AddCustomerInput!): Customer
    updateCustomer(input: UpdateCustomerInput!): Customer
    deleteCustomer(id: ID!): String
    addCustomerToBusiness(input: AddCustomerBusinessInput!): BusinessCustomers
  }
`;

export default typeDefs;
