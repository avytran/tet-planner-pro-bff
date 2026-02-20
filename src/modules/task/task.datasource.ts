import { MANAGEMENT_API_URL } from "../../config/env.js";
import { TaskInput } from "../../types/task.js";

export class TaskAPI {
    private managementURL = `${MANAGEMENT_API_URL}/v1/users`;

    async getTasksOfUser(userId: string, token: string) {
        const url = `${this.managementURL}/${userId}/tasks`;

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

    async getTaskOfUser(userId: string, taskId: string, token: string) {
        const url = `${this.managementURL}/${userId}/tasks/${taskId}`;

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

    async createTaskOfUser(userId: string, payload: TaskInput, token: string) {
        const url = `${this.managementURL}/${userId}/tasks`;

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
}