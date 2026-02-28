import { TetTimeline } from "./tetTimeline.js";

export type STATUS_ENUM = "Todo" | "In_Progress" | "Done";
export type PRIORITY_ENUM = "Low" | "Medium" | "High";

export interface Task {
    id: string
    categoryId: string
    title: string
    duedTime: string
    timeline: TetTimeline
    priority: STATUS_ENUM
    status: PRIORITY_ENUM
    createdAt: string
    updatedAt: string
}

export interface TaskCategory {
    id: string;
    name: string;
}

export interface GetTask {
    id: string
    category: TaskCategory
    title: string
    duedTime: string
    timeline: TetTimeline
    priority: STATUS_ENUM
    status: PRIORITY_ENUM
    createdAt: string
    updatedAt: string
}

export interface GetTasks {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    tasks: GetTask[]
}

export interface TaskInput {
    categoryId: string
    title: string
    duedTime: string
    timeline: TetTimeline
    priority: STATUS_ENUM
    status: PRIORITY_ENUM
}

export interface GetTasksParams {
    categoryId: string
    timeline: TetTimeline
    priority: PRIORITY_ENUM
    status: STATUS_ENUM
    page: number
    pageSize: number
}

export interface DeleteTaskResponse {
    message: string;
}

export interface DeleteAllTasksResponse {
    message: string;
    deletedTasks: number;
    deletedShoppingItems: number;
}