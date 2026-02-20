import { authTypeDefs } from "../modules/auth/auth.typeDefs.js";
import { taskTypeDefs } from "../modules/task/task.typeDefs.js";
import { taskCategoryTypeDefs } from "../modules/taskCategory/taskCategory.typeDefs.js";

export const typeDefs = [
    authTypeDefs,
    taskTypeDefs,
    taskCategoryTypeDefs,
];