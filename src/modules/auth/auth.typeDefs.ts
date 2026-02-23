export const authTypeDefs = `#graphql
    type Profile {
        id: String
        email: String        
        fullName: String
        createdAt: String
        updatedAt: String
    }
    
    type LoginResponse {
        success: Boolean
        user: Profile
    }

    type RefreshTokenResponse {
        accessToken: String
        refreshToken: String
    }

    type ResetPasswordResponse {
        message: String
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

    input ForgotPasswordInput {
        email: String!
    }

    input ResetPasswordInput {
        newPassword: String!
        token: String!
    }

    type Query {
        getProfile: Profile
    }

    type Mutation {
        register(input: RegisterInput!): Profile
        login(input: LoginInput!): LoginResponse
        refreshToken: RefreshTokenResponse
        forgotPassword(input: ForgotPasswordInput!): ResetPasswordResponse
        resetPassword(input: ResetPasswordInput!): ResetPasswordResponse
        logout: Boolean
    }
`;