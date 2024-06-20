const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    it('rounding of a', () => {
        assert.equal(calculateNumber(1.78, 1), 3);
        assert.equal(calculateNumber(1.50, 6), 8);
        assert.equal(calculateNumber(1.12, 8), 9);
    });

    it('rounding of b', () => {
        assert.equal(calculateNumber(5, 5.25), 10);
        assert.equal(calculateNumber(6, 5.50), 12);
        assert.equal(calculateNumber(7, 5.75), 13);
    });

    it('suming of a and b', () => {
        assert.equal(calculateNumber(1.94, 4.3), 6);
        assert.equal(calculateNumber(9.3, 0.01), 9);
        assert.equal(calculateNumber(6.77, 2.1), 9);
    });
})
