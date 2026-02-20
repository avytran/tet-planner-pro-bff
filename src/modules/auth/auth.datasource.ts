import { RegisterInput, LoginInput, RefreshTokenInput } from "../../types/auth.js";
import { AUTH_API_URL } from "../../config/env.js";

export class AuthAPI {
    private authURL = `${AUTH_API_URL}/v1/auth`;

    async getProfile(token: string) {
        const url = `${this.authURL}/profile`;

        const res = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
        });

        const text = await res.text();

        if (!res.ok) {
            throw new Error(`Backend error ${res.status}: ${text}`);
        }

        return JSON.parse(text);
    }

    async register(payload: RegisterInput) {
        const url = `${this.authURL}/register`;

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const text = await res.text();

        if (!res.ok) {
            throw new Error(`Backend error ${res.status}: ${text}`);
        }

        return JSON.parse(text);
    }

    async login(payload: LoginInput) {
        const url = `${this.authURL}/login`;

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })

        const text = await res.text();

        if (!res.ok) {
            throw new Error(`Backend error ${res.status}: ${text}`);
        }

        return JSON.parse(text);
    }

    async refreshToken(payload: RefreshTokenInput) {
        const url = `${this.authURL}/refresh-token`;

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })

        const text = await res.text();

        if (!res.ok) {
            throw new Error(`Backend error ${res.status}: ${text}`);
        }

        return JSON.parse(text);
    }
}