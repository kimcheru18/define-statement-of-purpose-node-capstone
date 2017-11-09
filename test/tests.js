const should = require('chai').should();

const someJsFile = ('/some-js-file');

describe('someJsFile', function() {
    it('should return status 200', function() {
        chai.request(app)
            .get('/some-js-file')
            .then(function(res) {
            res.should.have.status(200);
        });
    });
});
