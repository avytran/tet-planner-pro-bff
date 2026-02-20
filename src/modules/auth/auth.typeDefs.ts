export const authTypeDefs = `#graphql
    type Profile {
        id: String
        email: String        
        fullName: String
        createdAt: String
        updatedAt: String
    }
    
    type LoginResponse {
        accessToken: String
        refreshToken: String
        user: Profile
    }

    input RegisterInput {
        fullName: String!
        email: String!
        password: String!
    }

    input LoginInput {
        email: String!
        password: String!
    }

    type Query {
        getProfile: Profile
    }

    type Mutation {
        register(input: RegisterInput!): Profile
        login(input: LoginInput!): LoginResponse
    }
`;