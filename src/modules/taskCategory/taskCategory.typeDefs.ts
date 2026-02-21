export const taskCategoryTypeDefs = `#graphql
    type TaskCategory {
        id: String
        userId: String
        name: String
    }

    type DeleteTaskCategoryResponse {
        message: String
    }

    input TaskCategoryInput {
        name: String
    }

    type Query {
        getTaskCategoriesOfUser(userId: String!): [TaskCategory]
        getTaskCategoryByIdOfUser(userId: String!, categoryId: String!): TaskCategory
    }

    type Mutation {
        createTaskCategoryOfUser(userId: String!, input: TaskCategoryInput!): TaskCategory
        updateTaskCategoryOfUser(userId: String!, categoryId: String!, input: TaskCategoryInput!): TaskCategory
        deleteTaskCategoryOfUser(userId: String!, categoryId: String!): DeleteTaskCategoryResponse
    }
`;