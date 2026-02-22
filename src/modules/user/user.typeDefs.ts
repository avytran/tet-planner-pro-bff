export const userTypeDefs = `#graphql
    type UserTotalBudget {
        totalBudget: Float
    }

    input UpdateTotalBudgetInput {
        totalBudget: Float!
    }

    extend type Query {
        getTotalBudget(userId: String!): UserTotalBudget
    }

    extend type Mutation {
        updateTotalBudget(userId: String!, input: UpdateTotalBudgetInput!): UserTotalBudget
    }
`;
