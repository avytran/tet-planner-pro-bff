import { ShoppingItemAPI } from "./shoppingItem.datasource.js";
import { GraphQLContext } from "../../types/graphqlContext.js";
import {
    GetShoppingItemsOfUserResponse,
    ShoppingItem,
    ShoppingItemInput,
    UpdateCreateShoppingItemOfUserResponse,
    DeleteShoppingItemOfUserResponse,
    GetShoppingItemParams,
    SpendingTimeline,
} from "../../types/shoppingItem.js";
import { getTetTimelineAuto } from "../../utils/getTetTimelineAuto.js";

export const shoppingItemResolvers = {
    Query: {
        getShoppingItemsOfUser: async (_: unknown, { userId, params }: { userId: string, params: GetShoppingItemParams }, context: GraphQLContext): Promise<GetShoppingItemsOfUserResponse> => {
            const { token, req, res } = context;

            const shoppingItemAPI = new ShoppingItemAPI(req, res);

            const result = await shoppingItemAPI.getShoppingItemsOfUser(userId, params, token);

            return result.data;
        },
        getShoppingItemByIdOfUser: async (_: unknown, { userId, itemId }: { userId: string, itemId: string }, context: GraphQLContext): Promise<ShoppingItem> => {
            const { token, req, res } = context;

            const shoppingItemAPI = new ShoppingItemAPI(req, res);

            const result = await shoppingItemAPI.getShoppingItemByIdOfUser(userId, itemId, token);

            return result.data;
        },
        getSpendingTimelineOfUser: async (
            _: unknown,
            { userId, fromDate, toDate }: { userId: string; fromDate?: string; toDate?: string },
            context: GraphQLContext,
        ): Promise<SpendingTimeline> => {
            const { token, req, res } = context;

            const shoppingItemAPI = new ShoppingItemAPI(req, res);

            const result = await shoppingItemAPI.getSpendingTimelineOfUser(userId, fromDate, toDate, token);

            return result.data;
        },
    },
    Mutation: {
        createShoppingItemOfUser: async (_: unknown, { userId, input }: { userId: string, input: ShoppingItemInput }, context: GraphQLContext): Promise<UpdateCreateShoppingItemOfUserResponse> => {
            const { token, req, res } = context;

            const shoppingItemAPI = new ShoppingItemAPI(req, res);

            const timeline = getTetTimelineAuto(input.duedTime);

            const payload = {
                ...input,
                timeline,
            }

            const result = await shoppingItemAPI.createShoppingItemOfUser(userId, payload, token);

            return result.data;
        },
        updateShoppingItemOfUser: async (_: unknown, { userId, itemId, input }: { userId: string, itemId: string, input: ShoppingItemInput }, context: GraphQLContext): Promise<UpdateCreateShoppingItemOfUserResponse> => {
            const { token, req, res } = context;

            const shoppingItemAPI = new ShoppingItemAPI(req, res);

            const timeline = getTetTimelineAuto(input.duedTime);

            const payload = {
                ...input,
                timeline,
            }

            const result = await shoppingItemAPI.updateShoppingItemOfUser(userId, itemId, payload, token);

            return result.data;
        },
        deleteShoppingItemOfUser: async (_: unknown, { userId, itemId }: { userId: string, itemId: string }, context: GraphQLContext): Promise<DeleteShoppingItemOfUserResponse> => {
            const { token, req, res } = context;

            const shoppingItemAPI = new ShoppingItemAPI(req, res);

            const result = await shoppingItemAPI.deleteShoppingItemOfUser(userId, itemId, token);

            return result.data;
        },
    },
};