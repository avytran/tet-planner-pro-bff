import { MANAGEMENT_API_URL } from "../../config/env.js";
import { DeleteTaskResponse, Task, TaskInput } from "../../types/task.js";
import { API } from "../../utils/http.js";
import { SuccessResult } from "../../types/result.js";

export class TaskAPI {
    private managementURL = `${MANAGEMENT_API_URL}/v1`;
    private api = new API(this.managementURL);

    private buildTaskPath(userId: string, taskId?: string) {
        const base = `/users/${userId}/tasks`;
        return taskId ? `${base}/${taskId}` : base;
    }

    async getTasksOfUser(userId: string, token: string): Promise<SuccessResult<Task[]>> {
        const path = this.buildTaskPath(userId);

        return this.api.get<SuccessResult<Task[]>>(path, {
            Authorization: `Bearer ${token}`
        });
    }

    async getTaskOfUser(userId: string, taskId: string, token: string): Promise<SuccessResult<Task>> {
        const path = this.buildTaskPath(userId, taskId);

        return this.api.get<SuccessResult<Task>>(path, {
            Authorization: `Bearer ${token}`
        });
    }

    async createTaskOfUser(userId: string, payload: TaskInput, token: string): Promise<SuccessResult<Task>> {
        const path = this.buildTaskPath(userId);

        return this.api.post<SuccessResult<Task>>(path, payload, {
            Authorization: `Bearer ${token}`
        });

    }

    async updateTaskOfUser(userId: string, taskId: string, payload: TaskInput, token: string): Promise<SuccessResult<Task>> {
        const path = this.buildTaskPath(userId, taskId);

        return this.api.put<SuccessResult<Task>>(path, payload, {
            Authorization: `Bearer ${token}`
        });
    }

    async patchTaskOfUser(userId: string, taskId: string, payload: TaskInput, token: string): Promise<SuccessResult<Task>> {
        const path = this.buildTaskPath(userId, taskId);

        return this.api.patch<SuccessResult<Task>>(path, payload, {
            Authorization: `Bearer ${token}`
        });
    }

    async deleteTaskOfUser(userId: string, taskId: string, token: string): Promise<SuccessResult<DeleteTaskResponse>> {
        const path = this.buildTaskPath(userId, taskId);

        return this.api.delete<SuccessResult<DeleteTaskResponse>>(path, {
            Authorization: `Bearer ${token}`
        });
    }
}