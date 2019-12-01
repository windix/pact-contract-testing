const {ApolloServer} = require('apollo-server');
const {ApolloGateway} = require('@apollo/gateway');

const { NODE_ENV, SERVER_1_URL, SERVER_2_URL } = process.env;

const gateway = new ApolloGateway({
  serviceList: [
    {name: 'test1', url: SERVER_1_URL},
    {name: 'test2', url: SERVER_2_URL},
  ],
});

const server = new ApolloServer({
  gateway,
  playground: NODE_ENV !== 'production',
  subscriptions: false,
  formatError: error => {
    console.log(error);
    return error;
  },
  formatResponse: response => {
    console.log(response);
    return response;
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Apollo Gateway Server ready at ${url}`);
});
