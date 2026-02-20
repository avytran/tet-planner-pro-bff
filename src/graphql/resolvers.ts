import { authResolvers } from "../modules/auth/auth.resolvers.js";

export const resolvers = {
  Query: {
    ...authResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
  }
};