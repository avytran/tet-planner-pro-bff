import { authResolvers } from "../modules/auth/auth.resolvers.js";
import { budgetResolvers } from "../modules/budget/budget.resolvers.js";
import { userResolvers } from "../modules/user/user.resolvers.js";
import { shoppingItemResolvers } from "../modules/shoppingItem/shoppingItem.resolvers.js";
import { taskResolvers } from "../modules/task/task.resolvers.js";
import { taskCategoryResolvers } from "../modules/taskCategory/taskCategory.resolvers.js";

export const resolvers = {
  Query: {
    ...authResolvers.Query,
    ...budgetResolvers.Query,
    ...userResolvers.Query,
    ...shoppingItemResolvers.Query,
    ...taskResolvers.Query,
    ...taskCategoryResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...budgetResolvers.Mutation,
    ...userResolvers.Mutation,
    ...shoppingItemResolvers.Mutation,
    ...taskResolvers.Mutation,
    ...taskCategoryResolvers.Mutation,
  },
};