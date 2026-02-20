import { AuthAPI } from "./auth.datasource.js";
import { GraphQLContext } from "../../types/graphqlContext.js";
import { RegisterInput } from "../../types/auth.js";

const authAPI = new AuthAPI();

export const authResolvers = {
    Query: {
        getProfile: async (_: unknown, _args: unknown, context: GraphQLContext) => {
            const { token } = context;

            const result = await authAPI.getProfile(token);

            return result.data;
        },
    },
    Mutation: {
        register: async (_: unknown, { input } : { input: RegisterInput }) => {
            const result = await authAPI.register(input);

            return result.data;
        }
    }
};