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

    type RefreshTokenResponse {
        accessToken: String
        refreshToken: String
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

    input RefreshTokenInput {
        refreshToken: String!
    }

    type Query {
        getProfile: Profile
    }

    type Mutation {
        register(input: RegisterInput!): Profile
        login(input: LoginInput!): LoginResponse
        refreshToken(input: RefreshTokenInput!): RefreshTokenResponse
    }
`;