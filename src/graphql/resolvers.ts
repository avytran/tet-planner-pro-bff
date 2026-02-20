import { authResolvers } from "../modules/auth/auth.resolvers.js";
import { budgetResolvers } from "../modules/budget/budget.resolvers.js";
import { userResolvers } from "../modules/user/user.resolvers.js";

export const resolvers = {
  Query: {
    ...authResolvers.Query,
    ...budgetResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...budgetResolvers.Mutation,
    ...userResolvers.Mutation,
  }
};