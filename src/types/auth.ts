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