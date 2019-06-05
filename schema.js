import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type User {
    user_id: ID
    username: String
  }

  type Query {
    books: [Book]
    users: [User]
  }

  type Mutation {
    createUser(username: String): User
  }
`;
