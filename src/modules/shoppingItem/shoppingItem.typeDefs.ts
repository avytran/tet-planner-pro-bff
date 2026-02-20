export const shoppingItemTypeDefs = `#graphql
    enum Status {
        Planning
        Completed
    }

    enum Timeline {
        Pre_Tet
        During_Tet
        After_Tet
    }

    type ShoppingItemBudget {
        id: String
        name: String
    }
    
    type ShoppingItemTask {
        id: String
        title: String
    }

    type ShoppingItem {
        id: String
        budget: ShoppingItemBudget
        task: ShoppingItemTask
        name: String
        price: Float
        status: Status
        quantity: Int
        duedTime: String
        timeline: Timeline
        createdAt: String
        updatedAt: String
    }

    type GetShoppingItemsOfUserResponse {
        page: Int
        pageSize: Int
        totalItems: Int
        totalPages: Int
        items: [ShoppingItem]
    }

    type UpdateCreateShoppingItemOfUserResponse {
        id: String
        budgetId: String
        taskId: String
        name: String
        price: Float
        status: Status
        quantity: Int
        duedTime: String
        timeline: Timeline
        createdAt: String
        updatedAt: String
    }

    type DeleteShoppingItemOfUserResponse {
        message: String
    }

    input ShoppingItemInput {
        budgetId: String!
        taskId: String!
        name: String!
        price: Float!
        quantity: Int!
        duedTime: String!
        timeline: Timeline!
        status: Status!
    }

    type Query {
        getShoppingItemsOfUser(userId: String!): GetShoppingItemsOfUserResponse
        getShoppingItemByIdOfUser(userId: String!, itemId: String!): ShoppingItem
    }

    type Mutation {
        createShoppingItemOfUser(userId: String!, input: ShoppingItemInput!): UpdateCreateShoppingItemOfUserResponse
        updateShoppingItemOfUser(userId: String!, itemId: String!, input: ShoppingItemInput!): UpdateCreateShoppingItemOfUserResponse
        deleteShoppingItemOfUser(userId: String!, itemId: String!): DeleteShoppingItemOfUserResponse
    }
`