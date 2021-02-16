import { getMovies } from "./db";

const resolvers = {
    Query: {
        getMovies: (_, { rating, limit }) => getMovies(limit, rating),
    },
};

export default resolvers;
