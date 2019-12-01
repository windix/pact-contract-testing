const { Verifier } = require('@pact-foundation/pact');

const { PACT_BROKER_URL, PACT_BROKER_USERNAME, PACT_BROKER_PASSWORD } = process.env;

describe('Pact Verification', () => {
  it('validates the contract provided by the consumer', () => {
    const opts = {
      provider: 'Provider',
      providerBaseUrl: 'http://localhost:4000',
      pactBrokerUrl: PACT_BROKER_URL,
      tags: ['production', 'test'],
      pactBrokerUsername: PACT_BROKER_USERNAME,
      pactBrokerPassword: PACT_BROKER_PASSWORD,
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