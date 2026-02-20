import { authResolvers } from "../modules/auth/auth.resolvers.js";
import { taskResolvers } from "../modules/task/task.resolvers.js";
import { taskCategoryResolvers } from "../modules/taskCategory/taskCategory.resolvers.js";

export const resolvers = {
  Query: {
    ...authResolvers.Query,
    ...taskResolvers.Query,
    ...taskCategoryResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...taskResolvers.Mutation,
    ...taskCategoryResolvers.Mutation,
  }
};