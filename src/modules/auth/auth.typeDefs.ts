export const authTypeDefs = `#graphql
    type Profile {
        id: String
        email: String        
        fullName: String
        createdAt: String
    }

    input RegisterInput {
        fullName: String!
        email: String!
        password: String!
    }

    type Query {
        getProfile: Profile
    }

    type Mutation {
        register(input: RegisterInput!): Profile
    }
`;