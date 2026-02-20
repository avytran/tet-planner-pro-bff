export const authTypeDefs = `#graphql
    type Profile {
        id: String
        email: String        
        fullName: String
        createdAt: String
    }

    type Query {
        getProfile: Profile
    }
`;