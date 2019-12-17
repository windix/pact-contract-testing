# pact-contract-testing
An example of using pact.io to contract test a federated graphql API using [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and [pactflow](https://www.pactflow.io). Read about this project at [TwentyFirstCenturyCode](https://twentyfirstcenturycode.com/other/apollo-graphql-contract-testing) or on [Medium](https://medium.com/@nialloc9/contract-testing-an-apollo-federated-gateway-with-pact-io-and-pactflow-io-3d185da2985c).

<p align="center">
  <img src="/screenshots/main.png" width="700" title="Pact tests running in cli">
</p>

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

### Making the provider tests reusable
To help with the buy in from other teams and to get them to integrate contract testing it is important to make it as easy as possible. To do this I have created a reusable abstraction over the provider tests to allow data sources to run just 1 function inside their pipeline to run against our consumer contracts in the broker. This function can be published as an npm package and ran inside their pipeline making it easy to to integrate. Also this allows us to update the contract versions without having the data source update their code. Instead we can just ask them to update their version of the package (or have them always install latest).

    `
        const { onRunPactTests } = require("./provider-abstraction");

        onRunPactTests();
    `

### Running provider abstraction tests

    $ npm run test-provider-abstraction