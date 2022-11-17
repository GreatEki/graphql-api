import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
    friends: [User]
    favouriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie]
    movie(name: String!): Movie
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: String = Brazil
  }

  input updateUserInput {
    id: ID!
    name: String
    username: String
    age: Int
    nationality: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: updateUserInput!): User
    deleteUser(id: ID!): String
  }
`;

export default typeDefs;
