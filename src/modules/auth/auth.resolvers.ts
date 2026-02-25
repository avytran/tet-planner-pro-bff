import { AuthAPI } from "./auth.datasource.js";
import { GraphQLContext } from "../../types/graphqlContext.js";
import { ForgotPasswordInput, LoginInput, RegisterInput, ResetPasswordInput } from "../../types/auth.js";
import { NODE_ENV } from "../../config/env.js";

export const authResolvers = {
    Query: {
        getProfile: async (_: unknown, _args: unknown, context: GraphQLContext) => {
            const { token, req, res } = context;

            const authAPI = new AuthAPI(req, res);

            const result = await authAPI.getProfile(token);

            return result.data;
        },
    },
    Mutation: {
        register: async (_: unknown, { input }: { input: RegisterInput }, context: GraphQLContext) => {
            const { req, res } = context;

            const authAPI = new AuthAPI(req, res);

            const result = await authAPI.register(input);

            return result.data;
        },
        login: async (_: unknown, { input }: { input: LoginInput }, context: GraphQLContext) => {
            const { req, res } = context;

            const authAPI = new AuthAPI(req, res);

            const { data } = await authAPI.login(input);

            const { accessToken, refreshToken, user } = data;

            res.cookie("access_token", accessToken, {
                httpOnly: true,
                secure: NODE_ENV === "production",
                sameSite: "lax",
                path: "/", 
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });

            res.cookie("refresh_token", refreshToken, {
                httpOnly: true,
                secure: NODE_ENV === "production",
                sameSite: "lax",
                path: "/", 
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });

            return {
                success: true,
                user,
            };
        },
        refreshToken: async (_: unknown, _args: unknown, context: GraphQLContext) => {
            const { req, res } = context;

            const authAPI = new AuthAPI(req, res);

            const refreshToken = req.cookies?.refresh_token;

            if (!refreshToken) {
                throw new Error("No refresh token");
            }

            const { data } = await authAPI.refreshToken(refreshToken);
            const { accessToken } = data;

            res.cookie("access_token", accessToken, {
                httpOnly: true,
                secure: NODE_ENV === "production",
                sameSite: "lax",
                path: "/", 
                maxAge: 15 * 60 * 1000,
            });

            return {
                success: true,
            }
        },
        forgotPassword: async (_: unknown, { input }: { input: ForgotPasswordInput }, context: GraphQLContext) => {
            const { req, res } = context;

            const authAPI = new AuthAPI(req, res);

            const result = await authAPI.forgotPassword(input);

            return result.data;
        },
        resetPassword: async (_: unknown, { input }: { input: ResetPasswordInput }, context: GraphQLContext) => {
            const { req, res } = context;

            const authAPI = new AuthAPI(req, res);

            const result = await authAPI.resetPassword(input);

            return result.data;
        },
        logout: (_: unknown, _args: unknown, context: GraphQLContext) => {
            const { res } = context;
            
            res.clearCookie("access_token");
            res.clearCookie("refresh_token");
            return true;
        },
    }
};