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
    it('GET method for /cart/:id using a correct :id', (done) => {
        request.get(`${URL}/cart/47`, (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal('Payment methods for cart 47');
          done();
        });
    });
    it('GET for /cart/:id using negative number :id', (done) => {
        request.get(`${URL}/cart/-47`, (_err, res, _body) => {
          expect(res.statusCode).to.be.equal(404);
          done();
        });
    });
    it('GET for /cart/:id usin non-numeric value :id', (done) => {
        request.get(`${URL}/cart/hello`, (_err, res, _body) => {
          expect(res.statusCode).to.be.equal(404);
          done();
        });
    });
});
