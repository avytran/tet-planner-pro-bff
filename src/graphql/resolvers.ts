import { authResolvers } from "../modules/auth/auth.resolvers.js";
import { shoppingItemResolvers } from "../modules/shoppingItem/shoppingItem.resolvers.js";

export const resolvers = {
  Query: {
    ...authResolvers.Query,
    ...shoppingItemResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
  }
};