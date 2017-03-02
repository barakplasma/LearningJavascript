//Test detectWixSite.js to make sure changes don't break it
const chai = require('chai')
, chaihttp = require('chai-http');
const should = chai.should();

const querystring = require('querystring')

const key = require('./secrets')

const motionAiEndpoint = 'https://api.motion.ai/1.0/messageBot'

const chatBotQueryParams = {
    bot: 36231,
    msg: '',
    session: Date.now(),
    key: key.apiKey, //hidden in secret.js out of git scm
    from: ''
}

var currQuery = chatBotQueryParams;

// CONSTRUCTOR FOR QUERIES SO I DONT HAVE TO KEEP TRACK OF SESSIONS BETWEEN TESTS
function Query() {
    this.currQuery = chatBotQueryParams;
    /**
     * @param {String} m
     */
    this.m = function(m,cb){
        this.currQuery.msg = m;
        chai.request(this.d)
        .get('/')
        .end(cb)
    };
    this.currQuery.session = Date.now();
    this.d = motionAiEndpoint + '?' + querystring.stringify(this.currQuery)
}

chai.use(chaihttp)

describe('loads', () => {
    it('should return a 200 response to our GET request', (done) => {
        let q = new Query()
        q.m('hi',(err,res)=>{
            res.should.have.status(200);
            done()
        })
    })
})
describe('URL parser', () => {
    it('should not allow a bad input',(done)=>{
        let q = new Query()
        chai.request(q.m('hi'))
        .get('/')
        .end((err,res)=>{
            console.log(res.body.botResponse)
            done()
        })
    })
    it('should return a properly formatted URL from a normal URL')
})
describe.skip('detect HTTPS Wix site', () => {
    it('should detect NS connected testthiswix.com')
    it('should detect Free Site michaelsalaverry.wix.com/sandbox')
    it('should detect Pointed Domain')
})

describe.skip('detect HTTP Wix site', () => {
    it('should detect NS connected RU site')
    it('should detect Free Site michaelsalaverry.wix.com/loadingtime')
    it('should detect Pointed Domain')
})

describe.skip('report not a Wix site', () => {
    it('should fail on a non-wix site google.com')
    it('should fail when DNS correct but premium not paid for')
    it('should fail when A record wrong queendina.com')
    it('should fail when CName wrong but A record correct')
})