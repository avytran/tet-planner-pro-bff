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
