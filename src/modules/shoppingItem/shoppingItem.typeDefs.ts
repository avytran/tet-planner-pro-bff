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

    type Query {
        getShoppingItemsOfUser(userId: String!): GetShoppingItemsOfUserResponse
        getShoppingItemByIdOfUser(userId: String!, itemId: String!): ShoppingItem
    }
`