const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('type == "SUM"', () => {
  it('0.4 + 0.4', () => {
    assert.equal(calculateNumber('SUM', 0.4, 0.4), 0);
  });
  it('3 + 6.9', () => {
    assert.equal(calculateNumber('SUM', 3, 6.9), 10);
  });
  it('7.7 + 1.5', () => {
    assert.equal(calculateNumber('SUM', 7.7, 2.5), 11);
  });
  it('1 + 2', () => {
    assert.equal(calculateNumber('SUM', 1, 2), 3);
  });
  it('1.0 + 2.0', () => {
    assert.equal(calculateNumber('SUM', 1.0, 2.0), 3);
  });
  it('-0.8 + 1.1', () => {
    assert.equal(calculateNumber('SUM', -0.8, 1.1), 0);
  });
  it('-0.8 + -1.1', () => {
    assert.equal(calculateNumber('SUM', -0.8, -1.1), -2);
  });
  it('0 + 0', () => {
    assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
  });
});

describe('type == "SUBTRACT"', () => {
  it('0.5 - 0.4', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.5, 0.4), 1);
  });
  it('7.9 - 3', () => {
    assert.equal(calculateNumber('SUBTRACT', 7.9, 3), 5);
  });
  it('2.2 - 7.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 2.2, 7.7), -6);
  });
  it('2.5 - 7.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 2.5, 7.7), -5);
  });
  it('2.5 and -2.3', () => {
    assert.equal(calculateNumber('SUBTRACT', 2.5, -2.3), 5);
  });
  it('-1 and 1', () => {
    assert.equal(calculateNumber('SUBTRACT', -1, 1), -2);
  });
  it('1 and 1', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 1), 0);
  });
});

describe('#calculateNumber() with type DIVIDE', () => {
  it('1.2 / 0.3', () => {
    assert.equal(calculateNumber('DIVIDE', 1.2, 0.3), 'Error');
  });
  it("2.3 / 0.0", () => {
    assert.equal(calculateNumber('DIVIDE', 2.3, 0.0), 'Error');
  });
  it('0.7 / 4.7', () => {
    assert.equal(calculateNumber('DIVIDE', 0.7, 4.7), 0.2);
  });
  it('4.5 / 4.4', () => {
    assert.equal(calculateNumber('DIVIDE', 4.5, 4.4), 1.25);
  });
  it('-6.3 / 1.5', () => {
    assert.equal(calculateNumber('DIVIDE', -6.3, 1.5), -3);
  });
  it('2 / 4', () => {
    assert.equal(calculateNumber('DIVIDE', 2, 4), 0.5);
  });
  it('-0.1 / 0.9', () => {
    assert.equal(calculateNumber('DIVIDE', -0.1, 0.9), 0);
  });
  it('-89.6 / 8.7', () => {
    assert.equal(calculateNumber('DIVIDE', -89.6, 8.7), -10);
  });
  it('9.6 / 399.8', () => {
    assert.equal(calculateNumber('DIVIDE', 9.6, 399.8), 0.025);
  });
});
