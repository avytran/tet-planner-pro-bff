import { authTypeDefs } from "../modules/auth/auth.typeDefs.js";
import { budgetTypeDefs } from "../modules/budget/budget.typeDefs.js";
import { userTypeDefs } from "../modules/user/user.typeDefs.js";
import { shoppingItemTypeDefs } from "../modules/shoppingItem/shoppingItem.typeDefs.js";
import { taskTypeDefs } from "../modules/task/task.typeDefs.js";
import { taskCategoryTypeDefs } from "../modules/taskCategory/taskCategory.typeDefs.js";

export const typeDefs = [
    authTypeDefs,
    budgetTypeDefs,
    userTypeDefs,
    taskTypeDefs,
    taskCategoryTypeDefs,
    shoppingItemTypeDefs,
];