import { Request, Response } from "express";
import { MANAGEMENT_API_URL } from "../../config/env.js";
import { DeleteTaskCategoryResponse, TaskCategory, TaskCategoryInput } from "../../types/taskCategory.js";
import { API } from "../../utils/http.js";
import { SuccessResult } from "../../types/result.js";

export class TaskCategoryAPI {
    private managementURL = `${MANAGEMENT_API_URL}/v1`;
    private api: API;

    constructor(req: Request, res: Response) {
        this.api = new API(this.managementURL, req, res);
    }

    private buildCategoryPath(userId: string, categoryId?: string) {
        const base = `/users/${userId}/task-categories`;
        return categoryId ? `${base}/${categoryId}` : base;
    }

    async getTaskCategoriesOfUser(userId: string, token: string): Promise<SuccessResult<TaskCategory[]>> {
        const path = this.buildCategoryPath(userId);

        return this.api.get<SuccessResult<TaskCategory[]>>(path, {
            Authorization: `Bearer ${token}`
        });
    }

    async getTaskCategoryByIdOfUser(userId: string, categoryId: string, token: string): Promise<SuccessResult<TaskCategory>> {
        const path = this.buildCategoryPath(userId, categoryId);
        
        return this.api.get<SuccessResult<TaskCategory>>(path, {
            Authorization: `Bearer ${token}`
        });
    }

    async createTaskCategoryOfUser(userId: string, payload: TaskCategoryInput, token: string): Promise<SuccessResult<TaskCategory>> {
        const path = this.buildCategoryPath(userId);

        return this.api.post<SuccessResult<TaskCategory>>(path, payload, {
            Authorization: `Bearer ${token}`
        });
    }

    async updateTaskCategoryOfUser(userId: string, categoryId: string, payload: TaskCategoryInput, token: string): Promise<SuccessResult<TaskCategory>> {
        const path = this.buildCategoryPath(userId, categoryId);

        return this.api.put<SuccessResult<TaskCategory>>(path, payload, {
            Authorization: `Bearer ${token}`
        });
    }

    async deleteTaskCategoryOfUser(userId: string, categoryId: string, token: string): Promise<SuccessResult<DeleteTaskCategoryResponse>> {
        const path = this.buildCategoryPath(userId, categoryId);

        return this.api.delete<SuccessResult<DeleteTaskCategoryResponse>>(path, {
            Authorization: `Bearer ${token}`
        });
    }
}