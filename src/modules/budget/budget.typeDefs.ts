export const budgetTypeDefs = `#graphql
    type Budget {
        id: String
        userId: String
        name: String
        allocatedAmount: Float
        createdAt: String
        updatedAt: String
        summary: Float
    }

    input BudgetInput {
        userId: String!
        name: String!
        allocatedAmount: Float!
    }

    type DeleteBudgetResponse {
        message: String
    }

    extend type Query {
        getBudgetByIdOfUser(id: String!, userId: String!): Budget
        getBudgetsOfUser(userId: String!): [Budget!]
    }

    extend type Mutation {
        createBudgetOfUser(input: BudgetInput!): Budget
        updateBudgetOfUser(id: String!, input: BudgetInput!): Budget
        deleteBudgetOfUser(id: String!, userId: String!): DeleteBudgetResponse
    }
`;

