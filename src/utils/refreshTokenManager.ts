import { Request, Response } from "express";
import { AuthAPI } from "../modules/auth/auth.datasource.js";
import { NODE_ENV } from "../config/env.js";

let refreshingPromise: Promise<string> | null = null;

export class RefreshTokenManager {
  static async refresh(req: Request, res: Response): Promise<string> {

    if (!refreshingPromise) {
      refreshingPromise = (async () => {
        const refreshToken = req.cookies?.refresh_token;
        if (!refreshToken) {
          throw new Error("NO_REFRESH_TOKEN");
        }

        const authAPI = new AuthAPI(req, res);
        const { data } = await authAPI.refreshToken(refreshToken);

        const newAccessToken = data.accessToken;
        const newRefreshToken = data.refreshToken;

        res.cookie("access_token", newAccessToken, {
          httpOnly: true,
          secure: NODE_ENV === "production",
          sameSite: NODE_ENV === "production" ? "none" : "lax",
          path: "/",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.cookie("refresh_token", newRefreshToken, {
          httpOnly: true,
          secure: NODE_ENV === "production",
          sameSite: NODE_ENV === "production" ? "none" : "lax",
          path: "/",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return newAccessToken;
      })()
        .finally(() => {
          refreshingPromise = null;
        });
    }

    return refreshingPromise;
  }
}