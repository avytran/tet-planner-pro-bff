import { GraphQLContext } from "../../types/graphqlContext.js";
import { Task, TaskInput } from "../../types/task.js";
import { getTetTimelineAuto } from "../../utils/getTetTimelineAuto.js";
import { TaskAPI } from "./task.datasource.js";

const taskAPI = new TaskAPI();

export const taskResolvers = {
    Query: {
        getTasksOfUser: async (_: unknown, { userId }: { userId: string }, context: GraphQLContext): Promise<Task[]> => {
            const { token } = context;

            const result = await taskAPI.getTasksOfUser(userId, token);

            return result.data;
        },
        getTaskOfUser: async (_: unknown, { userId, taskId }: { userId: string, taskId: string }, context: GraphQLContext): Promise<Task[]> => {
            const { token } = context;

            const result = await taskAPI.getTaskOfUser(userId, taskId, token);

            return result.data;
        },
    },
    Mutation: {
        createTaskOfUser: async (_: unknown, { userId, input }: { userId: string, input: TaskInput }, context: GraphQLContext): Promise<Task[]> => {
            const { token } = context;

            const timeline = getTetTimelineAuto(input.duedTime);

            const payload = {
                ...input,
                timeline,
            };

            console.log(payload);
            

            const result = await taskAPI.createTaskOfUser(userId, payload, token);

            return result.data;
        },
    },
};