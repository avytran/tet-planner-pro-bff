import { TaskCategoryAPI } from "./taskCategory.datasource.js";
import { GraphQLContext } from "../../types/graphqlContext.js";
import { DeleteTaskCategoryResponse, TaskCategory, TaskCategoryInput } from "../../types/taskCategory.js";

const taskCategoryAPI = new TaskCategoryAPI();

export const taskCategoryResolvers = {
    Query: {
        getTaskCategoriesOfUser: async (_: unknown, { userId }: { userId: string }, context: GraphQLContext): Promise<TaskCategory[]> => {
            const { token } = context;

            const result = await taskCategoryAPI.getTaskCategoriesOfUser(userId, token);

            return result.data;
        },
        getTaskCategoryByIdOfUser: async (_: unknown, { userId, categoryId }: { userId: string, categoryId: string }, context: GraphQLContext): Promise<TaskCategory> => {
            const { token } = context;

            const result = await taskCategoryAPI.getTaskCategoryByIdOfUser(userId, categoryId, token);

            return result.data;
        },
    },
    Mutation: {
        createTaskCategoryOfUser: async (_: unknown, { userId, input }: { userId: string, input: TaskCategoryInput }, context: GraphQLContext): Promise<TaskCategory> => {
            const { token } = context;

            const result = await taskCategoryAPI.createTaskCategoryOfUser(userId, input, token);

            return result.data;
        },
        updateTaskCategoryOfUser: async (_: unknown, { userId, categoryId, input }: { userId: string, categoryId: string, input: TaskCategoryInput }, context: GraphQLContext): Promise<TaskCategory> => {
            const { token } = context;

            const result = await taskCategoryAPI.updateTaskCategoryOfUser(userId, categoryId, input, token);

            return result.data;
        },
        deleteTaskCategoryOfUser: async (_: unknown, { userId, categoryId }: { userId: string, categoryId: string }, context: GraphQLContext): Promise<DeleteTaskCategoryResponse> => {
            const { token } = context;

            const result = await taskCategoryAPI.deleteTaskCategoryOfUser(userId, categoryId, token);

            return result.data;
        },
    }
};