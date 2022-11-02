const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    username: String!
    body: String!
    createdAt: String!
  }
  type User {
    id: String!
    token: String!
    email: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
  }
`;