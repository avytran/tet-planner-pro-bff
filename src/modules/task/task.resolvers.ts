import { GraphQLContext } from "../../types/graphqlContext.js";
import { Task } from "../../types/task.js";
import { TaskAPI } from "./task.datasource.js";

const taskAPI = new TaskAPI();

export const taskResolvers = {
    Query: {
        getTasksOfUser: async (_: unknown, { userId }: { userId: string }, context: GraphQLContext): Promise<Task[]> => {
            const { token } = context;

            const result = await taskAPI.getTasksOfUser(userId, token);

            return result.data;
        }
    },
    Mutation: {

    },
};