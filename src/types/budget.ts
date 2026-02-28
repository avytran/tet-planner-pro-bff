export interface Budget {
    id: string;
    userId: string;
    name: string;
    allocatedAmount: number;
    createdAt: string;
    updatedAt: string;
    summary?: number;
}

export interface BudgetPayload {
    userId: string;
    name: string;
    allocatedAmount: number;
}

export interface DeleteBudgetResponse {
    message: string
}

export interface DeleteAllBudgetsResponse {
    message: string;
    deletedBudgets: number;
    deletedShoppingItems: number;
}