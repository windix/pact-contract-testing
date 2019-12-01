const { Verifier } = require('@pact-foundation/pact');

const { PACT_BROKER_TOKEN, PACT_BROKER_URL } = process.env;

describe('Pact Verification', () => {
  it('validates the contract provided by the consumer', () => {
    const opts = {
      provider: 'GraphQLProvider',
      providerBaseUrl: 'http://localhost:4000',
      pactBrokerUrl: PACT_BROKER_URL,
      pactBrokerToken: PACT_BROKER_TOKEN,
      tags: ['test'],
      publishVerificationResult: true,
      providerVersion: '1.0.0',
      logLevel: 'DEBUG',
    };

    return new Verifier(opts).verifyProvider().then(output => {
      console.log('Pact Verification Completed')
      console.log(output);
    });
  });
});