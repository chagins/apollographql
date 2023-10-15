import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./reslovers";
import { TrackAPI } from "./datasources";

async function startApolloServer() {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
        },
      };
    },
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
