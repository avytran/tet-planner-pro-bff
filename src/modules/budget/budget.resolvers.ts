import type { GraphQLContext } from "../../types/graphqlContext.js";
import type { BudgetPayload } from "../../types/budget.js";
import { BudgetAPI } from "./budget.datasource.js";

const budgetAPI = new BudgetAPI();

export const budgetResolvers = {
    Query: {
        getBudgetByIdOfUser: async (
            _parent: unknown,
            args: { id: string; userId: string },
            context: GraphQLContext
        ) => {
            const { token } = context;
            const result = await budgetAPI.getBudgetByIdOfUser(args.id, args.userId, token);

            if (result.status === "error") {
                throw new Error(result.message || "Failed to get budget");
            }

            return result.data;
        },
        getBudgetsOfUser: async (
            _parent: unknown,
            args: { userId: string },
            context: GraphQLContext
        ) => {
            const { token } = context;
            const result = await budgetAPI.getBudgetsOfUser(args.userId, token);

            if (result.status === "error") {
                throw new Error(result.message || "Failed to get budgets");
            }

            return result.data;
        },
    },
    Mutation: {
        createBudgetOfUser: async (
            _parent: unknown,
            args: { input: BudgetPayload },
            context: GraphQLContext
        ) => {
            const { token } = context;
            const result = await budgetAPI.createBudgetOfUser(args.input, token);

            if (result.status === "error") {
                throw new Error(result.message || "Failed to create budget");
            }

            return result.data;
        },
        updateBudgetOfUser: async (
            _parent: unknown,
            args: { id: string; input: BudgetPayload },
            context: GraphQLContext
        ) => {
            const { token } = context;
            const result = await budgetAPI.updateBudgetOfUser(args.id, args.input, token);

            if (result.status === "error") {
                throw new Error(result.message || "Failed to update budget");
            }

            return result.data;
        },
        deleteBudgetOfUser: async (
            _parent: unknown,
            args: { id: string; userId: string },
            context: GraphQLContext
        ) => {
            const { token } = context;
            const result = await budgetAPI.deleteBudgetOfUser(args.id, args.userId, token);

            if (result.status === "error") {
                throw new Error(result.message || "Failed to delete budget");
            }

            return {
                message: result.data?.message ?? result.message ?? "Budget deleted",
            };
        },
    },
};

