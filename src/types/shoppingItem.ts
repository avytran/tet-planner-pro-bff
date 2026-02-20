export type ITEM_STATUS_ENUM = "Planning" | "Completed";
export type ITEM_TIMELINE_ENUM = "Pre Tet" | "During Tet" | "After Tet";

export interface ShoppingItem {
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

export interface getShoppingItemsOfUserResponse {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    items: ShoppingItem[];
}