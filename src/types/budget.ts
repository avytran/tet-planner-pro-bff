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

