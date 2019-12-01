# pact-contract-testing
An example of using pact.io to contract test a federated graphql API using [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and [pactflow](https://www.pactflow.io).

## Prerequisites

- Update the package.json publish-pact and test-provider scripts to include token and url from [pactflow](https://www.pactflow.io). 
- Install [docker](https://www.docker.com/)
- Install [docker compose](https://docs.docker.com/compose/)

## Usage

### Running the server
    $ npm install
    $ docker-compose up

### Running the tests
If first time run and no contract tests have been created run:

    $ npm run test-consumer
    $ npm run publish-pact

After tests have been published to the broker they changes can be detected by running:


    $ npm run test-provider