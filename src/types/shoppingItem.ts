import { TetTimeline } from "./tetTimeline.js";

export type ITEM_STATUS_ENUM = "Planning" | "Completed";
export type SORT_BY = "dued_time" | "price" | "quantity" | "total_cost";
export type SORT_ORDER = "desc" | "asc";

export interface ShoppingItemBudget {
    id: string;
    name: string;
}

export interface ShoppingItemTask {
    id: string;
    title: string;
}

export interface ShoppingItem {
    id: string;
    budget: ShoppingItemBudget;
    task: ShoppingItemTask;
    name: string;
    price: number;
    status: ITEM_STATUS_ENUM;
    quantity: number;
    duedTime: string;
    timeline: TetTimeline;
    createdAt: string;
    updatedAt: string;
}

export interface GetShoppingItemsOfUserResponse {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    items: ShoppingItem[];
}

export interface ShoppingItemInput {
    budgetId: string;
    taskId: string;
    name: string;
    price: number;
    quantity: number;
    duedTime: string;
    timeline: TetTimeline;
    status: ITEM_STATUS_ENUM;
}

export interface UpdateCreateShoppingItemOfUserResponse {
    id: string;
    budgetId: string;
    taskId: string;
    name: string;
    price: number;
    status: ITEM_STATUS_ENUM;
    quantity: number;
    duedTime: string;
    timeline: TetTimeline;
    createdAt: string;
    updatedAt: string;
}

export interface DeleteShoppingItemOfUserResponse {
    message: string
}

export interface GetShoppingItemParams {
    budgetId: string;
    taskId: string;
    timeline: TetTimeline;
    duedTime: string;
    status: ITEM_STATUS_ENUM;
    keyword: string;
    sortBy: SORT_BY;
    sortOrder: SORT_ORDER;
    page: number;
    pageSize: number;
}

export interface SpendingTimelineSeries {
    label: string;
    data: number[];
}

export interface SpendingTimeline {
    dates: string[];
    series: SpendingTimelineSeries[];
}

export interface DeleteAllShoppingItemsResponse {
    message: string;
    deletedShoppingItems: number;
}