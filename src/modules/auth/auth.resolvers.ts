import { AuthAPI } from "./auth.datasource.js";
import { GraphQLContext } from "../../types/graphqlContext.js";
import { LoginInput, RefreshTokenInput, RegisterInput } from "../../types/auth.js";

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
        },
        login: async (_: unknown, { input } : { input: LoginInput }) => {
            const result = await authAPI.login(input);

            return result.data;
        },
        refreshToken: async(_: unknown, { input } : { input: RefreshTokenInput }) => {
            const result = await authAPI.refreshToken(input);

            return result.data;
        }
    }
};