const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const path = require("path");
const { query } = require("./consumer");
const { Pact, GraphQLInteraction } = require("@pact-foundation/pact");

const expect = chai.expect

chai.use(chaiAsPromised)

describe("Federated GraphQL example", () => {
    const provider = new Pact({
      port: 5000,
      log: path.resolve(process.cwd(), "logs", "mockserver-integration.log"),
      dir: path.resolve(process.cwd(), "pacts"),
      consumer: "GraphQLConsumer",
      provider: "GraphQLProvider",
    })
  
    before(() => provider.setup())
    after(() => provider.finalize())
  
    describe("query hello1 on /", () => {
      before(() => {
        const graphqlQuery = new GraphQLInteraction()
          .uponReceiving("a hello1 request")
          .withQuery(
            `
            {
              hello1
            }
          `
          )
          .withRequest({
            path: "/",
            method: "POST",
          })
          .willRespondWith({
            status: 200,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: {
              data: {
                hello1: "Hello from test1 server"
              },
            },
          })
        return provider.addInteraction(graphqlQuery)
      })
  
      it("returns the correct response", () => {
        return expect(query()).to.eventually.deep.equal({ data: { hello1: "Hello from test1 server" } })
      })
  
      // verify with Pact, and reset expectations
      afterEach(() => provider.verify())
    })
  })