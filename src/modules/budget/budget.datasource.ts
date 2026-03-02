import { Request, Response } from "express";
import { MANAGEMENT_API_URL } from "../../config/env.js";
import type { Budget, BudgetPayload, DeleteAllBudgetsResponse, DeleteBudgetResponse } from "../../types/budget.js";
import { API } from "../../utils/http.js";
import { SuccessResult } from "../../types/result.js";

export class BudgetAPI {
    private baseURL = `${MANAGEMENT_API_URL}/v1`;
    private api: API;

    constructor(req: Request, res: Response){
        this.api = new API(this.baseURL, req, res);
    }

    private buildBudgetPath(userId: string, budgetId?: string) {
        const base = `/users/${userId}/budgets`;
        return budgetId ? `${base}/${budgetId}` : base;
    }

    async getBudgetByIdOfUser(id: string, userId: string, token: string): Promise<SuccessResult<Budget>> {
        const path = this.buildBudgetPath(userId, id);

        return this.api.get<SuccessResult<Budget>>(path, {
            Authorization: `Bearer ${token}`
        });
    }

    async getBudgetsOfUser(userId: string, token: string): Promise<SuccessResult<Budget[]>> {
        const path = this.buildBudgetPath(userId);

        return this.api.get<SuccessResult<Budget[]>>(path, {
            Authorization: `Bearer ${token}`
        });
    }

    async createBudgetOfUser(payload: BudgetPayload, token: string): Promise<SuccessResult<Budget>> {
        const path = this.buildBudgetPath(payload.userId);

        return this.api.post<SuccessResult<Budget>>(path, payload, {
            Authorization: `Bearer ${token}`
        });
    }

    async updateBudgetOfUser(id: string, payload: BudgetPayload, token: string): Promise<SuccessResult<Budget>> {
        const path = this.buildBudgetPath(payload.userId, id);

        return this.api.put<SuccessResult<Budget>>(path, payload, {
            Authorization: `Bearer ${token}`
        });
    }

    async deleteBudgetOfUser(id: string, userId: string, token: string): Promise<SuccessResult<DeleteBudgetResponse>> {
        const path = this.buildBudgetPath(userId, id);

        return this.api.delete<SuccessResult<DeleteBudgetResponse>>(path, {
            Authorization: `Bearer ${token}`
        });
    }

    async deleteAllBudgetsOfUser(userId: string, token: string): Promise<SuccessResult<DeleteAllBudgetsResponse>> {
        const path = this.buildBudgetPath(userId);

        return this.api.delete<SuccessResult<DeleteAllBudgetsResponse>>(path, {
            Authorization: `Bearer ${token}`
        });
    }
}

