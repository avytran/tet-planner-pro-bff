import { authResolvers } from "../modules/auth/auth.resolvers.js";
import { shoppingItemResolvers } from "../modules/shoppingItem/shoppingItem.resolvers.js";
import { taskResolvers } from "../modules/task/task.resolvers.js";
import { taskCategoryResolvers } from "../modules/taskCategory/taskCategory.resolvers.js";

export const resolvers = {
  Query: {
    ...authResolvers.Query,
    ...shoppingItemResolvers.Query,
    ...taskResolvers.Query,
    ...taskCategoryResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...shoppingItemResolvers.Mutation,
    ...taskResolvers.Mutation,
    ...taskCategoryResolvers.Mutation,
  },
};