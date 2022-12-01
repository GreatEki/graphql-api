import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Business {
    id: ID!
    name: String!
    yearOfEstablishment: Int!
    owner: ID!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie]
    movie(name: String!): Movie
    getBusinesses: [Business]
    getBusiness(id: ID!): Business
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

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: updateUserInput!): User
    deleteUser(id: ID!): String
    createBusiness(input: CreateBusinessInput!): Business
  }
`;

export default typeDefs;
