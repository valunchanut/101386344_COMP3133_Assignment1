const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    signUp(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;