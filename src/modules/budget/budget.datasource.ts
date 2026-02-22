import { MANAGEMENT_API_URL } from "../../config/env.js";
import type { Budget, BudgetPayload } from "../../types/budget.js";

interface ServiceResponse<T> {
    status: "success" | "error";
    data?: T;
    message?: string;
}

export class BudgetAPI {
    private baseURL = `${MANAGEMENT_API_URL}/v1`;

    private buildBudgetURL(userId: string, budgetId?: string): string {
        const userBudgetsPath = `${this.baseURL}/users/${userId}/budgets`;
        return budgetId ? `${userBudgetsPath}/${budgetId}` : userBudgetsPath;
    }

    private async request<T>(input: RequestInfo, init?: RequestInit): Promise<ServiceResponse<T>> {
        const res = await fetch(input, init);
        const text = await res.text();

        if (!res.ok) {
            throw new Error(`Backend error ${res.status}: ${text}`);
        }

        return JSON.parse(text);
    }

    async getBudgetByIdOfUser(id: string, userId: string, token: string) {
        const url = this.buildBudgetURL(userId, id);

        return this.request<Budget>(url, {
            method: "GET",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
        });
    }

    async getBudgetsOfUser(userId: string, token: string) {
        const url = this.buildBudgetURL(userId);

        return this.request<Budget[]>(url, {
            method: "GET",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
        });
    }

    async createBudgetOfUser(payload: BudgetPayload, token: string) {
        const url = this.buildBudgetURL(payload.userId);

        return this.request<Budget>(url, {
            method: "POST",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
    }

    async updateBudgetOfUser(id: string, payload: BudgetPayload, token: string) {
        const url = this.buildBudgetURL(payload.userId, id);

        return this.request<Budget>(url, {
            method: "PUT",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
    }

    async deleteBudgetOfUser(id: string, userId: string, token: string) {
        const url = this.buildBudgetURL(userId, id);

        return this.request<{ message: string }>(url, {
            method: "DELETE",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
        });
    }
}

