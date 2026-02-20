import { authResolvers } from "../modules/auth/auth.resolvers.js";
import { budgetResolvers } from "../modules/budget/budget.resolvers.js";

export const resolvers = {
  Query: {
    ...authResolvers.Query,
    ...budgetResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...budgetResolvers.Mutation,
  }
};