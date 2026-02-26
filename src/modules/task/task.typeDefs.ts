export const taskTypeDefs = `#graphql
    enum Timeline {
        Pre_Tet
        During_Tet
        After_Tet
    }

    enum Priority {
        Low
        Medium
        High
    }

    enum Status {
        Todo
        In_Progress
        Done
    }

    type Task {
        id: String
        categoryId: String
        title: String
        duedTime: String
        timeline: Timeline
        priority: Priority
        status: Status
        createdAt: String
        updatedAt: String
    }

    type CategoryOfTask {
        id: String
        name: String
    }

    type GetTask {
        id: String
        category: CategoryOfTask
        title: String
        duedTime: String
        timeline: Timeline
        priority: Priority
        status: Status
        createdAt: String
        updatedAt: String
    }

    type GetTasks {
        page: Int
        pageSize: Int
        totalItems: Int
        totalPages: Int
        tasks: [GetTask]
    }

    input TaskInput {
        categoryId: String
        title: String
        duedTime: String
        priority: Priority
        status: Status
    }

    input GetTasksParams {
        categoryId: String
        timeline: Timeline
        priority: Priority
        status: Status
        page: Int
        pageSize: Int
    }

    type DeleteTaskResponse {
        message: String
    }

    type Query {
        getTasksOfUser(userId: String!, params: GetTasksParams): GetTasks
        getTaskOfUser(userId: String!, taskId: String!): GetTask
    }

    type Mutation {
        createTaskOfUser(userId: String!, input: TaskInput!): Task
        updateTaskOfUser(userId: String!, taskId: String!, input: TaskInput!): Task
        patchTaskOfUser(userId: String!, taskId: String!, input: TaskInput!): Task
        deleteTaskOfUser(userId: String!, taskId: String!): DeleteTaskResponse
    }
`;