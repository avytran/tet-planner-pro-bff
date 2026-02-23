import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";

import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import type { GraphQLContext } from "./types/graphqlContext.js";
import { CLIENT_URL } from "./config/env.js";

const app = express();

// CORS configuration
app.use(
  cors({
    origin: [CLIENT_URL as string],
    credentials: true,
  })
);

// Cookie parser
app.use(cookieParser());

// Body parser middleware
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

app.use(
  "/graphql",
  expressMiddleware(server, {
    context: async ({ req, res }): Promise<GraphQLContext> => {
      const token = req.cookies?.access_token;
      
      return { token, req, res };
    },
  })
);

export default app;