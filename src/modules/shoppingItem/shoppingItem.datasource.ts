import { MANAGEMENT_API_URL } from "../../config/env.js";

export class ShoppingItemAPI {
    private managementURL = `${MANAGEMENT_API_URL}/v1/users`;

    async getShoppingItemsOfUser(userId: string, token: string) {
        const url = `${this.managementURL}/${userId}/shopping-items`;

        const res = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
        });

        const text = await res.text();

        if (!res.ok) {
            throw new Error(`Backend error ${res.status}: ${text}`);
        }

        return JSON.parse(text);
    }

    async getShoppingItemByIdOfUser(userId: string, itemId: string, token: string) {
        const url = `${this.managementURL}/${userId}/shopping-items/${itemId}`;

        const res = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
        });

        const text = await res.text();

        if (!res.ok) {
            throw new Error(`Backend error ${res.status}: ${text}`);
        }

        return JSON.parse(text);
    }
}