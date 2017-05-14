const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../src/server/app');

describe('PUT /api/site', () => {
    it('will receive some site in the request body, and save it', (done) => {
        chai.request(server)
            .put('/api/site')
            .send({"site":0})
            .end((err, res) => {
                should.not.exist(err);
                // there should be a 200 status code
                res.status.should.equal(200);
                // the response should be JSON
                res.type.should.equal('application/json');
                done();
            });
    });

    it('overwrite the previous site', (done) => {
        chai.request(server)
            .get('/api/site')
            .end((err, res) => {
                should.not.exist(err);
                // there should be a 200 status code
                res.status.should.equal(200);
                // the response should be JSON
                res.type.should.equal('application/json');
                done();
            });
    });
});

describe('GET /api/site', (done) => {
    it('will return the saved site (as a regular json)', (done) => {
        chai.request(server)
            .get('/api/site')
            .end((err, res) => {
                should.not.exist(err);
                // there should be a 200 status code
                res.status.should.equal(200);
                // the response should be JSON
                res.type.should.equal('application/json');
                done();
            });
    });
});

describe('GET /editor', (done) => {
    it('will render a webpage; editor.html', (done) => {
        chai.request(server)
            .get('/editor')
            .end((err, res) => {
                should.not.exist(err);
                // there should be a 200 status code
                res.status.should.equal(200);
                done();
            });
    });
});

describe('GET /site', (done) => {
    it('will render a webpage; site.html', (done) => {
        chai.request(server)
            .get('/site')
            .end((err, res) => {
                should.not.exist(err);
                // there should be a 200 status code
                res.status.should.equal(200);
                done();
            });
    });
});