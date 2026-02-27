import { RefreshTokenManager } from "./refreshTokenManager.js";
import { Request, Response } from "express";
export class BackendError extends Error {
    status: number;
    code?: string;

    constructor(status: number, message: string, code?: string) {
        super(message);
        this.status = status;
        this.code = code;
    }
}

export class API {
    url: string;
    req: Request;
    res: Response;

    constructor(url: string, req: Request, res: Response) {
        this.url = url;
        this.req = req;
        this.res = res;
    }

    private async request<T>(
        path: string,
        options: RequestInit = {},
        retry = true
    ): Promise<T> {
        const response = await fetch(`${this.url}${path}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
        });

        const data = await response.json();

        if (!response.ok) {            
            if (data.code === "TOKEN_EXPIRED" && retry) {
                const newAccessToken = await RefreshTokenManager.refresh(this.req, this.res);
                options = {
                    ...options,
                    headers: {
                        ...(options.headers || {}),
                        Authorization: `Bearer ${newAccessToken}`
                    }
                }
                return this.request<T>(path, options, false);
            } else {
                throw new BackendError(
                    response.status,
                    data?.message || "Internal server error",
                    data?.code
                );
            }
        }

        return data;
    }

    get<T>(path: string, headers: HeadersInit = {}) {
        return this.request<T>(path, {
            method: "GET",
            headers,
        });
    }

    post<T>(path: string, body?: any, headers: HeadersInit = {}) {
        return this.request<T>(path, {
            method: "POST",
            headers,
            body: body ? JSON.stringify(body) : undefined,
        });
    }

    put<T>(path: string, body?: any, headers: HeadersInit = {}) {
        return this.request<T>(path, {
            method: "PUT",
            headers,
            body: body ? JSON.stringify(body) : undefined,
        });
    }

    patch<T>(path: string, body?: any, headers: HeadersInit = {}) {
        return this.request<T>(path, {
            method: "PATCH",
            headers,
            body: body ? JSON.stringify(body) : undefined,
        });
    }

    delete<T>(path: string, headers: HeadersInit = {}) {
        return this.request<T>(path, {
            method: "DELETE",
            headers,
        });
    }
}