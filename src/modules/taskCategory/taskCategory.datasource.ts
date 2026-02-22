import { MANAGEMENT_API_URL } from "../../config/env.js";
import { TaskCategoryInput } from "../../types/taskCategory.js";

export class TaskCategoryAPI {
    private managementURL = `${MANAGEMENT_API_URL}/v1/users`;

    async getTaskCategoriesOfUser(userId: string, token: string) {
        const url = `${this.managementURL}/${userId}/task-categories`;

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

    async getTaskCategoryByIdOfUser(userId: string, categoryId: string, token: string) {
        const url = `${this.managementURL}/${userId}/task-categories/${categoryId}`;

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

    async createTaskCategoryOfUser(userId: string, payload: TaskCategoryInput, token: string) {
        const url = `${this.managementURL}/${userId}/task-categories`;

        const res = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const text = await res.text();

        if (!res.ok) {
            throw new Error(`Backend error ${res.status}: ${text}`);
        }

        return JSON.parse(text);
    }

    async updateTaskCategoryOfUser(userId: string, categoryId: string, payload: TaskCategoryInput, token: string) {
        const url = `${this.managementURL}/${userId}/task-categories/${categoryId}`;

        const res = await fetch(url, {
            method: "PUT",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const text = await res.text();

        if (!res.ok) {
            throw new Error(`Backend error ${res.status}: ${text}`);
        }

        return JSON.parse(text);
    }

    async deleteTaskCategoryOfUser(userId: string, categoryId: string, token: string) {
        const url = `${this.managementURL}/${userId}/task-categories/${categoryId}`;

        const res = await fetch(url, {
            method: "DELETE",
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