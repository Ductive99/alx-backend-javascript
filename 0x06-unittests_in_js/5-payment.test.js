const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    if (!spy) {
      spy = sinon.spy(console);
    }
  });

  afterEach(() => {
    spy.log.resetHistory();
  });

  it('log of sendPaymentRequestToApi(100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.log.calledWith('The total is: 120')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });

  it('log of sendPaymentRequestToApi(10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    expect(bigBrother.log.calledWith('The total is: 20')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });
});
