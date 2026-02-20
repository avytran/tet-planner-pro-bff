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
        getBudget(id: String!, userId: String!): Budget
        getBudgets(userId: String!): [Budget!]
    }

    extend type Mutation {
        createBudget(input: BudgetInput!): Budget
        updateBudget(id: String!, input: BudgetInput!): Budget
        deleteBudget(id: String!, userId: String!): DeleteBudgetResponse
    }
`;

