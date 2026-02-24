import type { GraphQLContext } from "../../types/graphqlContext.js";
import type { UpdateTotalBudgetInput } from "../../types/user.js";
import { UserAPI } from "./user.datasource.js";

export const userResolvers = {
    Query: {
        getTotalBudget: async (
            _parent: unknown,
            args: { userId: string },
            context: GraphQLContext
        ) => {
            const { token, req, res } = context;

            const userAPI = new UserAPI(req, res);

            const result = await userAPI.getTotalBudget(args.userId, token);

            return result.data;
        },
    },
    Mutation: {
        updateTotalBudget: async (
            _parent: unknown,
            args: { userId: string; input: UpdateTotalBudgetInput },
            context: GraphQLContext
        ) => {
            const { token, req, res } = context;

            const userAPI = new UserAPI(req, res);
            
            const result = await userAPI.updateTotalBudget(args.userId, args.input, token);

            return result.data;
        },
    },
};
