import type { GraphQLContext } from "../../types/graphqlContext.js";
import type { BudgetPayload, DeleteAllBudgetsResponse } from "../../types/budget.js";
import { BudgetAPI } from "./budget.datasource.js";

export const budgetResolvers = {
    Query: {
        getBudgetByIdOfUser: async (
            _parent: unknown,
            args: { id: string; userId: string },
            context: GraphQLContext
        ) => {
            const { token, req, res } = context;

            const budgetAPI = new BudgetAPI(req, res);

            const result = await budgetAPI.getBudgetByIdOfUser(args.id, args.userId, token);

            return result.data;
        },
        getBudgetsOfUser: async (
            _parent: unknown,
            args: { userId: string },
            context: GraphQLContext
        ) => {
            const { token, req, res } = context;
            
            const budgetAPI = new BudgetAPI(req, res);

            const result = await budgetAPI.getBudgetsOfUser(args.userId, token);

            return result.data;
        },
    },
    Mutation: {
        createBudgetOfUser: async (
            _parent: unknown,
            args: { input: BudgetPayload },
            context: GraphQLContext
        ) => {
            const { token, req, res } = context;
            
            const budgetAPI = new BudgetAPI(req, res);
            
            const result = await budgetAPI.createBudgetOfUser(args.input, token);

            return result.data;
        },
        updateBudgetOfUser: async (
            _parent: unknown,
            args: { id: string; input: BudgetPayload },
            context: GraphQLContext
        ) => {
            const { token, req, res } = context;
            
            const budgetAPI = new BudgetAPI(req, res);

            const result = await budgetAPI.updateBudgetOfUser(args.id, args.input, token);

            return result.data;
        },
        deleteBudgetOfUser: async (
            _parent: unknown,
            args: { id: string; userId: string },
            context: GraphQLContext
        ) => {
            const { token, req, res } = context;
            
            const budgetAPI = new BudgetAPI(req, res);
            
            const result = await budgetAPI.deleteBudgetOfUser(args.id, args.userId, token);

            return {
                message: result.data?.message,
            };
        },
        deleteAllBudgetsOfUser: async (
            _parent: unknown,
            args: { userId: string },
            context: GraphQLContext
        ): Promise<DeleteAllBudgetsResponse> => {
            const { token, req, res } = context;
            const budgetAPI = new BudgetAPI(req, res);

            const result = await budgetAPI.deleteAllBudgetsOfUser(args.userId, token);

            return result.data;
        }
    },
};

