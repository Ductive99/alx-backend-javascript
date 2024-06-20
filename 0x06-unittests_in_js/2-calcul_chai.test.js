const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('0.4 plus 0.4', () => {
      expect(calculateNumber('SUM', 0.4, 0.4)).to.equal(0);
    });
    it('3 plus 6.9', () => {
      expect(calculateNumber('SUM', 3, 6.9)).to.equal(10);
    });
    it('7.7 plus 1.5', () => {
      expect(calculateNumber('SUM', 7.7, 2.5)).to.equal(11);
    });
    it('1 plus 2', () => {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });
    it('1.0 plus 2.0', () => {
      expect(calculateNumber('SUM', 1.0, 2.0)).to.equal(3);
    });
    it('-0.8 plus 1.1', () => {
      expect(calculateNumber('SUM', -0.8, 1.1)).to.equal(0);
    });
    it('-0.8 plus -1.1', () => {
      expect(calculateNumber('SUM', -0.8, -1.1)).to.equal(-2);
    });
    it('0 plus 0', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('0.5 minus 0.4', () => {
      expect(calculateNumber('SUBTRACT', 0.5, 0.4)).to.equal(1);
    });
    it('7.9 minus 3', () => {
      expect(calculateNumber('SUBTRACT', 7.9, 3)).to.equal(5);
    });
    it('2.2 minus 7.7', () => {
      expect(calculateNumber('SUBTRACT', 2.2, 7.7)).to.equal(-6);
    });
    it('2.5 minus 7.7', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 7.7)).to.equal(-5);
    });
    it('2.5 minus -2.3', () => {
      expect(calculateNumber('SUBTRACT', 2.5, -2.3)).to.equal(5);
    });
    it('-1 minus 1', () => {
      expect(calculateNumber('SUBTRACT', -1, 1)).to.equal(-2);
    });
    it('1 minus 1', () => {
      expect(calculateNumber('SUBTRACT', 1, 1)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('1.2 by 0.3', () => {
      expect(calculateNumber('DIVIDE', 1.2, 0.3)).to.equal('Error');
    });
    it("2.3 by 0.0", () => {
      expect(calculateNumber('DIVIDE', 2.3, 0.0)).to.equal('Error');
    });
    it('0.7 by 4.7', () => {
      expect(calculateNumber('DIVIDE', 0.7, 4.7)).to.equal(0.2);
    });
    it('4.5 by 4.4', () => {
      expect(calculateNumber('DIVIDE', 4.5, 4.4)).to.equal(1.25);
    });
    it('-6.3 by 1.5', () => {
      expect(calculateNumber('DIVIDE', -6.3, 1.5)).to.equal(-3);
    });
    it('2 by 4', () => {
      expect(calculateNumber('DIVIDE', 2, 4)).to.equal(0.5);
    });
    it('-0.1 by 0.9', () => {
      expect(calculateNumber('DIVIDE', -0.1, 0.9)).to.equal(0);
    });
    it('-89.6 by 8.7', () => {
      expect(calculateNumber('DIVIDE', -89.6, 8.7)).to.equal(-10);
    });
    it('9.6 by 399.8', () => {
      expect(calculateNumber('DIVIDE', 9.6, 399.8)).to.equal(0.025);
    });
  });
});
