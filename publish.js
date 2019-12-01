const pact = require("@pact-foundation/pact-node");
const path = require("path");

const { PACT_BROKER_TOKEN, PACT_BROKER_URL } = process.env;

const opts = {
  pactFilesOrDirs: [
    path.resolve(__dirname, "pacts/graphqlconsumer-graphqlprovider.json"),
  ],
  pactBroker: PACT_BROKER_URL,
  pactBrokerToken: PACT_BROKER_TOKEN,
  tags: ["test"],
  consumerVersion:
    "1.0.2"
}

pact
  .publishPacts(opts)
  .then(() => {
    console.log("Pact contract publishing complete!")
    console.log("")
    console.log(`Head over to ${PACT_BROKER_URL} and login to see your contracts.`)
  })
  .catch(e => {
    console.log("Pact contract publishing failed: ", e)
  })