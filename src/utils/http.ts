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

    constructor(url: string) {
        this.url = url;
    }

    private async request<T>(
        path: string,
        options: RequestInit = {}
    ): Promise<T> {
        const res = await fetch(`${this.url}${path}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
        });

        const data = await res.json();

        if (!res.ok) {
            throw new BackendError(
                res.status,
                data?.message || "Internal server error",
                data?.code
            );
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