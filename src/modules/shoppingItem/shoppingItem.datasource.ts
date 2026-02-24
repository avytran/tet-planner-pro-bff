import { MANAGEMENT_API_URL } from "../../config/env.js";
import { DeleteShoppingItemOfUserResponse, GetShoppingItemParams, GetShoppingItemsOfUserResponse, ShoppingItem, ShoppingItemInput, UpdateCreateShoppingItemOfUserResponse } from "../../types/shoppingItem.js";
import { API } from "../../utils/http.js";
import { SuccessResult } from "../../types/result.js";

export class ShoppingItemAPI {
    private managementURL = `${MANAGEMENT_API_URL}/v1`;
    private api = new API(this.managementURL);

    private buildShoppingItemPath(userId: string, itemId?: string) {
        const base = `/users/${userId}/shopping-items`;
        return itemId ? `${base}/${itemId}` : base;
    }

    async getShoppingItemsOfUser(userId: string, params: GetShoppingItemParams, token: string): Promise<SuccessResult<GetShoppingItemsOfUserResponse>> {
        const query = new URLSearchParams(params as any).toString();
        
        const path = `${this.buildShoppingItemPath(userId)}?${query}`;

        return this.api.get<SuccessResult<GetShoppingItemsOfUserResponse>>(path, {
            Authorization: `Bearer ${token}`,
        });
    }

    async getShoppingItemByIdOfUser(userId: string, itemId: string, token: string): Promise<SuccessResult<ShoppingItem>> {
        const path = this.buildShoppingItemPath(userId, itemId);

        return this.api.get<SuccessResult<ShoppingItem>>(path, {
            Authorization: `Bearer ${token}`,
        });
    }

    async createShoppingItemOfUser(userId: string, payload: ShoppingItemInput, token: string): Promise<SuccessResult<UpdateCreateShoppingItemOfUserResponse>> {
        const path = this.buildShoppingItemPath(userId);

        return this.api.post<SuccessResult<UpdateCreateShoppingItemOfUserResponse>>(path, payload, {
            Authorization: `Bearer ${token}`
        });
    }

    async updateShoppingItemOfUser(userId: string, itemId: string, payload: ShoppingItemInput, token: string): Promise<SuccessResult<UpdateCreateShoppingItemOfUserResponse>> {
        const path = this.buildShoppingItemPath(userId, itemId);

        return this.api.put<SuccessResult<UpdateCreateShoppingItemOfUserResponse>>(path, payload, {
            Authorization: `Bearer ${token}`
        });
    }

    async deleteShoppingItemOfUser(userId: string, itemId: string, token: string): Promise<SuccessResult<DeleteShoppingItemOfUserResponse>> {
        const path = this.buildShoppingItemPath(userId, itemId);

        return this.api.delete<SuccessResult<DeleteShoppingItemOfUserResponse>>(path, {
            Authorization: `Bearer ${token}`
        });
    }
}