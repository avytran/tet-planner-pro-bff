import { authTypeDefs } from "../modules/auth/auth.typeDefs.js";
import { budgetTypeDefs } from "../modules/budget/budget.typeDefs.js";
import { userTypeDefs } from "../modules/user/user.typeDefs.js";

export const typeDefs = [
    authTypeDefs,
    budgetTypeDefs,
    userTypeDefs,
];