import { Request, Response } from "express";

export interface GraphQLContext {
    token: string;
    req: Request;
    res: Response;
}