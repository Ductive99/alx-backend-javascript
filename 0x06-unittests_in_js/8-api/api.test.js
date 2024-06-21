const request = require('request');
const { expect } = require('chai');

describe('API index test', () => {
    const URL = 'http://localhost:7865';
    
    it('GET method for /', (done) => {
        request.get(`${URL}/`, (_err, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});
