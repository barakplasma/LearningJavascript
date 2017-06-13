const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../src/server/app');

let time = '';
function newData(){time = `${Date.now()}`;}

function verifyPut(input,done){
    chai.request(server)
            .get('/api/site')
            .end((err, res) => {
                should.not.exist(err);
                res.status.should.equal(200);
                res.type.should.equal('application/json');
                res.body.should.eql(input,`input JSON doesn't equal the output`);
                done();
            });
}

describe('POST /api/site', () => {
    it('will receive some site in the request body, and save it', (done) => {
        newData();
        
        let input = {
                title: "Hello World",
                content: time
            };
        
        chai.request(server)
            .post('/api/site')
            .send(input)
            .end((err, res) => { 
                should.not.exist(err);
                res.status.should.equal(200);
                //res.type.should.equal('application/json');
                // verifyPut(input,done); 
                done();
            });
    });

    it.skip('overwrite the previous site', (done) => {
        chai.request(server)
            .get('/api/site')
            .end((err, res) => {
                should.not.exist(err);
                res.status.should.equal(200);
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
                res.status.should.equal(200);
                res.type.should.equal('application/json');
                res.body.should.have.property('title','Hello World','Title set incorrectly');
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
                res.status.should.equal(200);
                res.type.should.equal('text/html');
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
                res.status.should.equal(200);
                //console.log(res.text);
                res.text.should.contain(time);
                res.type.should.equal('text/html');
                done();
            });
    });
});