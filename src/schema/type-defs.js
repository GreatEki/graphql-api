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

  type Query {
    users: [User!]!
    user(id: ID!): User
    getBusinesses: [Business]
    getBusiness(id: ID!): Business
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: updateUserInput!): User
    deleteUser(id: ID!): String
    createBusiness(input: CreateBusinessInput!): Business
    updateBusiness(input: UpdateBusinessInput!): Business
    deleteBusiness(id: ID!): String
  }
`;

export default typeDefs;
