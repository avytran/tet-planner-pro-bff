export type ITEM_STATUS_ENUM = "Planning" | "Completed";
export type ITEM_TIMELINE_ENUM = "Pre Tet" | "During Tet" | "After Tet";

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
    timeline: ITEM_TIMELINE_ENUM;
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
    timeline: ITEM_TIMELINE_ENUM;
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
    timeline: ITEM_TIMELINE_ENUM;
    createdAt: string;
    updatedAt: string;
}

export interface DeleteShoppingItemOfUserResponse {
    message: string
}