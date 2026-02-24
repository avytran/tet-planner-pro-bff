import { MANAGEMENT_API_URL } from "../../config/env.js";
import type { UserTotalBudget, UpdateTotalBudgetInput } from "../../types/user.js";
import { API } from "../../utils/http.js";
import { SuccessResult } from "../../types/result.js";

export class UserAPI {
    private baseURL = `${MANAGEMENT_API_URL}/v1`;
    private api = new API(this.baseURL);

    private buildUserTotalBudgetPath(userId: string): string {
        return `/users/${userId}/total-budget`;
    }

    async getTotalBudget(userId: string, token: string): Promise<SuccessResult<UserTotalBudget>> {
        const path = this.buildUserTotalBudgetPath(userId);

        return this.api.get<SuccessResult<UserTotalBudget>>(path, {
            Authorization: `Bearer ${token}`,
        })
    }

    async updateTotalBudget(userId: string, input: UpdateTotalBudgetInput, token: string): Promise<SuccessResult<UserTotalBudget>> {
        const path = this.buildUserTotalBudgetPath(userId);

        return this.api.patch<SuccessResult<UserTotalBudget>>(path, input, {
            Authorization: `Bearer ${token}`,
        })
    }
}
