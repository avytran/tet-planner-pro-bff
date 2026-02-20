import { ShoppingItemAPI } from "./shoppingItem.datasource.js";
import { GraphQLContext } from "../../types/graphqlContext.js";
import { getShoppingItemsOfUserResponse, ShoppingItem } from "../../types/shoppingItem.js";

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
        }
    },
};