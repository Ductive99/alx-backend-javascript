const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consolespy;

  beforeEach(() => {
    if (!consolespy) {
      consolespy = sinon.spy(console);
    }
  });

  afterEach(() => {
    consolespy.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) shows "The total is: 120"', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consolespy.log.calledWith('The total is: 120')).to.be.true;
    expect(consolespy.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) shows "The total is: 20"', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consolespy.log.calledWith('The total is: 20')).to.be.true;
    expect(consolespy.log.calledOnce).to.be.true;
  });
});
