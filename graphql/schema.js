const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

// Queries
const { users, user, posts, post, comments, comment } = require("./queries");

// Mutations
const {
  register,
  login,
  createPost,
  addComment,
  updatePost,
  deletePost,
  updateComment,
  deleteComment,
} = require("./mutations");

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: {
    users,
    user,
    posts,
    post,
    comments,
    comment,
  },
});

const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: {
    register,
    login,
    createPost,
    addComment,
    updatePost,
    deletePost,
    updateComment,
    deleteComment,
  },
});

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

module.exports = schema;
