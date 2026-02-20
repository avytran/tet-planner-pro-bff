import { GraphQLContext } from "../../types/graphqlContext.js";
import { DeleteTaskResponse, Task, TaskInput } from "../../types/task.js";
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
        createTaskOfUser: async (_: unknown, { userId, input }: { userId: string, input: TaskInput }, context: GraphQLContext): Promise<Task> => {
            const { token } = context;

            const timeline = getTetTimelineAuto(input.duedTime);

            const payload = {
                ...input,
                timeline,
            };

            const result = await taskAPI.createTaskOfUser(userId, payload, token);

            return result.data;
        },
        updateTaskOfUser: async (_: unknown, { userId, taskId, input }: { userId: string, taskId: string, input: TaskInput }, context: GraphQLContext): Promise<Task> => {
            const { token } = context;

            const timeline = getTetTimelineAuto(input.duedTime);

            const payload = {
                ...input,
                timeline,
            };

            const result = await taskAPI.updateTaskOfUser(userId, taskId, payload, token);

            return result.data;
        },
        patchTaskOfUser: async (_: unknown, { userId, taskId, input }: { userId: string, taskId: string, input: TaskInput }, context: GraphQLContext): Promise<Task> => {
            const { token } = context;

            let payload: TaskInput = input;

            if (input.duedTime) {
                const timeline = getTetTimelineAuto(input.duedTime);

                payload = {
                    ...input,
                    timeline,
                };
            }

            const result = await taskAPI.patchTaskOfUser(userId, taskId, payload, token);

            return result.data;
        },
        deleteTaskOfUser: async (_: unknown, { userId, taskId }: { userId: string, taskId: string }, context: GraphQLContext): Promise<DeleteTaskResponse> => {
            const { token } = context;

            const result = await taskAPI.deleteTaskOfUser(userId, taskId, token);

            return result.data;
        },

    },
};