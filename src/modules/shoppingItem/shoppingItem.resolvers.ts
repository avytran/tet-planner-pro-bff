import { ShoppingItemAPI } from "./shoppingItem.datasource.js";
import { GraphQLContext } from "../../types/graphqlContext.js";
import { GetShoppingItemsOfUserResponse, ShoppingItem, ShoppingItemInput, UpdateCreateShoppingItemOfUserResponse, DeleteShoppingItemOfUserResponse } from "../../types/shoppingItem.js";
import { getTetTimelineAuto } from "../../utils/getTetTimelineAuto.js";

const shoppingItemAPI = new ShoppingItemAPI();

export const shoppingItemResolvers = {
    Query: {
        getShoppingItemsOfUser: async (_: unknown, { userId }: { userId: string }, context: GraphQLContext): Promise<GetShoppingItemsOfUserResponse> => {
            const { token } = context;

            const result = await shoppingItemAPI.getShoppingItemsOfUser(userId, token);

            return result.data;
        },
        getShoppingItemByIdOfUser: async (_: unknown, { userId, itemId }: { userId: string, itemId: string }, context: GraphQLContext): Promise<ShoppingItem> => {
            const { token } = context;

            const result = await shoppingItemAPI.getShoppingItemByIdOfUser(userId, itemId, token);

            return result.data;
        },
    },
    Mutation: {
        createShoppingItemOfUser: async (_: unknown, { userId, input }: { userId: string, input: ShoppingItemInput }, context: GraphQLContext): Promise<UpdateCreateShoppingItemOfUserResponse> => {
            const { token } = context;

            const timeline = getTetTimelineAuto(input.duedTime);

            const payload = {
                ...input,
                timeline,
            }

            const result = await shoppingItemAPI.createShoppingItemOfUser(userId, payload, token);

            return result.data;
        },
        updateShoppingItemOfUser: async (_: unknown, { userId, itemId, input }: { userId: string, itemId: string, input: ShoppingItemInput }, context: GraphQLContext): Promise<UpdateCreateShoppingItemOfUserResponse> => {
            const { token } = context;

            const timeline = getTetTimelineAuto(input.duedTime);

            const payload = {
                ...input,
                timeline,
            }

            const result = await shoppingItemAPI.updateShoppingItemOfUser(userId, itemId, payload, token);

            return result.data;
        },
        deleteShoppingItemOfUser: async (_: unknown, { userId, itemId }: { userId: string, itemId: string }, context: GraphQLContext): Promise<DeleteShoppingItemOfUserResponse> => {
            const { token } = context;

            const result = await shoppingItemAPI.deleteShoppingItemOfUser(userId, itemId, token);

            return result.data;
        },
    },
};