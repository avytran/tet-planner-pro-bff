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

    input TaskInput {
        categoryId: String
        title: String
        duedTime: String
        priority: Priority
        status: Status
    }

    type Query {
        getTasksOfUser(userId: String!): [Task]
        getTaskOfUser(userId: String!, taskId: String!): Task
    }

    type Mutation {
        createTaskOfUser(userId: String!, input: TaskInput!): Task
    }
`;