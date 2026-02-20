import { ShoppingItemAPI } from "./shoppingItem.datasource.js";
import { GraphQLContext } from "../../types/graphqlContext.js";
import { getShoppingItemsOfUserResponse, ShoppingItem, ShoppingItemInput } from "../../types/shoppingItem.js";

const shoppingItemAPI = new ShoppingItemAPI();

export const shoppingItemResolvers = {
    Query: {
        getShoppingItemsOfUser: async (_: unknown, { userId }: { userId: string }, context: GraphQLContext): Promise<getShoppingItemsOfUserResponse> => {
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
        createShoppingItemOfUser: async (_: unknown, { userId, input }: { userId: string, input: ShoppingItemInput }, context: GraphQLContext): Promise<ShoppingItem> => {
            const { token } = context;

            const result = await shoppingItemAPI.createShoppingItemOfUser(userId, input, token);

            return result.data;
        },
        updateShoppingItemOfUser: async (_: unknown, { userId, itemId, input }: { userId: string, itemId: string, input: ShoppingItemInput }, context: GraphQLContext): Promise<ShoppingItem> => {
            const { token } = context;

            const result = await shoppingItemAPI.updateShoppingItemOfUser(userId, itemId, input, token);

            return result.data;
        },
        deleteShoppingItemOfUser: async (_: unknown, { userId, itemId }: { userId: string, itemId: string }, context: GraphQLContext): Promise<ShoppingItem> => {
            const { token } = context;

            const result = await shoppingItemAPI.deleteShoppingItemOfUser(userId, itemId, token);

            return result.data;
        },
    },
};