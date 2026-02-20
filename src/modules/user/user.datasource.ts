import { MANAGEMENT_API_URL } from "../../config/env.js";
import type { UserTotalBudget, UpdateTotalBudgetInput } from "../../types/user.js";

interface ServiceResponse<T> {
    status: "success" | "error";
    data?: T;
    message?: string;
}

export class UserAPI {
    private baseURL = `${MANAGEMENT_API_URL}/v1`;

    private buildUserTotalBudgetURL(userId: string): string {
        return `${this.baseURL}/users/${userId}/total-budget`;
    }

    private async request<T>(input: RequestInfo, init?: RequestInit): Promise<ServiceResponse<T>> {
        const res = await fetch(input, init);
        const text = await res.text();

        if (!res.ok) {
            throw new Error(`Backend error ${res.status}: ${text}`);
        }

        return JSON.parse(text);
    }

    async getTotalBudget(userId: string, token: string) {
        const url = this.buildUserTotalBudgetURL(userId);

        return this.request<UserTotalBudget>(url, {
            method: "GET",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
        });
    }

    async updateTotalBudget(userId: string, input: UpdateTotalBudgetInput, token: string) {
        const url = this.buildUserTotalBudgetURL(userId);

        return this.request<UserTotalBudget>(url, {
            method: "PATCH",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
        });
    }
}
