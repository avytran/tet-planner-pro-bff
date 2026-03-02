export interface RegisterInput {
    fullName: String;
    email: String;
    password: String;
}

export interface LoginInput {
    email: String;
    password: String;
}

export interface RefreshTokenInput {
    refreshToken: String;
}

export interface ForgotPasswordInput {
    email: String;
}

export interface ResetPasswordInput {
    newPassword: String;
    token: String;
}

export interface Profile {
    id: String;
    email: String;
    fullName: String;
    createdAt: String;
    updatedAt: String;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: Profile;
}

export interface RefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
}

export interface ForgotPasswordResponse {
    message: String;
}

export interface ResetPasswordResponse {
    message: String;
}