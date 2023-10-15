import { Resolvers } from "./types";
export const resolvers: Resolvers = {
  Query: {
    // need types (codegen)
    tracksForHome: (_, __, { dataSources }, info) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }, info) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
