import type { GraphQLContext } from "../../types/graphqlContext.js";
import type { UpdateTotalBudgetInput } from "../../types/user.js";
import { UserAPI } from "./user.datasource.js";

const userAPI = new UserAPI();

export const userResolvers = {
    Query: {
        getTotalBudget: async (
            _parent: unknown,
            args: { userId: string },
            context: GraphQLContext
        ) => {
            const { token } = context;
            const result = await userAPI.getTotalBudget(args.userId, token);

            if (result.status === "error") {
                throw new Error(result.message || "Failed to get total budget");
            }

            return result.data;
        },
    },
    Mutation: {
        updateTotalBudget: async (
            _parent: unknown,
            args: { userId: string; input: UpdateTotalBudgetInput },
            context: GraphQLContext
        ) => {
            const { token } = context;
            const result = await userAPI.updateTotalBudget(args.userId, args.input, token);

            if (result.status === "error") {
                throw new Error(result.message || "Failed to update total budget");
            }

            return result.data;
        },
    },
};
