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

    type Query {
        getTasksOfUser(userId: String!): [Task]
    }
`;