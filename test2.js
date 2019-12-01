const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

const isProduction = process.env.NODE_ENV === 'production';

const query = gql`
  type Query {
    hello2: String
  }
`;

const resolvers = {
    Query: {
      hello2: () => "Hello from test2 server",
    },
};

const server = new ApolloServer({ 
  schema: buildFederatedSchema({
    typeDefs: query,
    resolvers
  }),
  introspection: !isProduction,
  playground: !isProduction,
  subscriptions: false,
 });

server.listen().then(({ url }) => {
    console.log(`🚀 Test2 Server ready at ${url}`);
});