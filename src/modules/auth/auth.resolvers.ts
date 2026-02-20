import { AuthAPI } from "./auth.datasource.js";
import { GraphQLContext } from "../../types/graphqlContext.js";

const authAPI = new AuthAPI();

export const authResolvers = {
    Query: {
        getProfile: async (_: unknown, _args: unknown, context: GraphQLContext) => {
            const { token } = context;

            const result = await authAPI.getProfile(token);

            return result.data;
        },
    },
};