import type { GraphQLContext } from "../../types/graphqlContext.js";
import type { BudgetPayload } from "../../types/budget.js";
import { BudgetAPI } from "./budget.datasource.js";

const budgetAPI = new BudgetAPI();

export const budgetResolvers = {
    Query: {
        getBudget: async (
            _parent: unknown,
            args: { id: string; userId: string },
            context: GraphQLContext
        ) => {
            const { token } = context;
            const result = await budgetAPI.getBudget(args.id, args.userId, token);

            if (result.status === "error") {
                throw new Error(result.message || "Failed to get budget");
            }

            return result.data;
        },
        getBudgets: async (
            _parent: unknown,
            args: { userId: string },
            context: GraphQLContext
        ) => {
            const { token } = context;
            const result = await budgetAPI.getBudgets(args.userId, token);

            if (result.status === "error") {
                throw new Error(result.message || "Failed to get budgets");
            }

            return result.data;
        },
    },
    Mutation: {
        createBudget: async (
            _parent: unknown,
            args: { input: BudgetPayload },
            context: GraphQLContext
        ) => {
            const { token } = context;
            const result = await budgetAPI.createBudget(args.input, token);

            if (result.status === "error") {
                throw new Error(result.message || "Failed to create budget");
            }

            return result.data;
        },
        updateBudget: async (
            _parent: unknown,
            args: { id: string; input: BudgetPayload },
            context: GraphQLContext
        ) => {
            const { token } = context;
            const result = await budgetAPI.updateBudget(args.id, args.input, token);

            if (result.status === "error") {
                throw new Error(result.message || "Failed to update budget");
            }

            return result.data;
        },
        deleteBudget: async (
            _parent: unknown,
            args: { id: string; userId: string },
            context: GraphQLContext
        ) => {
            const { token } = context;
            const result = await budgetAPI.deleteBudget(args.id, args.userId, token);

            if (result.status === "error") {
                throw new Error(result.message || "Failed to delete budget");
            }

            return {
                message: result.data?.message ?? result.message ?? "Budget deleted",
            };
        },
    },
};

