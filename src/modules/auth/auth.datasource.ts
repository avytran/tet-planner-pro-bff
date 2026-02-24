import { Request, Response } from "express";
import { RegisterInput, LoginInput, RefreshTokenInput, ForgotPasswordInput, ResetPasswordInput, LoginResponse, Profile, RefreshTokenResponse, ForgotPasswordResponse, ResetPasswordResponse } from "../../types/auth.js";
import { AUTH_API_URL } from "../../config/env.js";
import { API } from "../../utils/http.js";
import { SuccessResult } from "../../types/result.js";

export class AuthAPI {
    private authURL = `${AUTH_API_URL}/v1/auth`;
    private api: API;

    constructor(req: Request, res: Response) {
        this.api = new API(this.authURL, req, res);
    }

    async getProfile(token: string): Promise<SuccessResult<Profile>> {
        return this.api.get<SuccessResult<Profile>>("/profile", {
            Authorization: `Bearer ${token}`
        });
    }

    async register(payload: RegisterInput): Promise<SuccessResult<Profile>> {
        return this.api.post<SuccessResult<Profile>>("/register", payload);
    }

    async login(payload: LoginInput): Promise<SuccessResult<LoginResponse>> {
        return this.api.post<SuccessResult<LoginResponse>>("/login", payload);
    }

    async refreshToken(payload: RefreshTokenInput): Promise<SuccessResult<RefreshTokenResponse>> {
        return this.api.post<SuccessResult<RefreshTokenResponse>>("/refresh-token", { 
            refreshToken: payload 
        });
    }

    async forgotPassword(payload: ForgotPasswordInput): Promise<SuccessResult<ForgotPasswordResponse>> {
        return this.api.post<SuccessResult<ForgotPasswordResponse>>("/forgot-password", payload);
    }

    async resetPassword(payload: ResetPasswordInput): Promise<SuccessResult<ResetPasswordResponse>> {
        return this.api.post<SuccessResult<ResetPasswordResponse>>("/reset-password", payload);
    }
}