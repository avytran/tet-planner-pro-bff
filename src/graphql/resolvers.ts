import { authResolvers } from "../modules/auth/auth.resolvers.js";
import { taskResolvers } from "../modules/task/task.resolvers.js";

export const resolvers = {
  Query: {
    ...authResolvers.Query,
    ...taskResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...taskResolvers.Mutation,
  }
};