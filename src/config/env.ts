import dotenv from "dotenv";

dotenv.config();

export const { CLIENT_URL, AUTH_API_URL, MANAGEMENT_API_URL, PORT, NODE_ENV } = process.env; 