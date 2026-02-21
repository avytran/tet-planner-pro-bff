export interface TaskCategory {
    id: string
    userId: string
    name: string
}

export interface TaskCategoryInput {
    name: string
}

export interface DeleteTaskCategoryResponse {
    message: string
}