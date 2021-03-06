//Test detectWixSite.js to make sure changes don't break it
const chai = require('chai'),
    chaihttp = require('chai-http');
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

//matching statements
const SantaDetected = 'We detected a Wix site at the URL you provided. This suggests you are experiencing a local issue'

var currQuery = chatBotQueryParams;

// CONSTRUCTOR FOR QUERIES SO I DONT HAVE TO KEEP TRACK OF SESSIONS BETWEEN TESTS
function Query() {
    this.currQuery = chatBotQueryParams;
    /**
     * Sends message to Motion.ai; completes callback on end
     * @param {String} m - message
     * @param {function} cb - callback
     */
    this.m = function (m, cb) {
        this.currQuery.msg = m;
        //console.log(this.currQuery)
        this.n(cb)
    };
    this.n = function (cb) {
        //console.log(this.d()) //verifies that we are on the same session and the fxn runs
        chai.request(this.d())
            .get('/')
            .end(cb)
    }
    this.currQuery.session = Date.now();
    this.d = function () {
        return motionAiEndpoint + '?' + querystring.stringify(this.currQuery)
    }
}

chai.use(chaihttp)

describe('loads', function () {
    this.timeout(10000);
    it('should return a 200 response to our GET request', (done) => {
        let q = new Query()
        q.m('hi', (err, res) => {
            res.should.have.status(200);
            done()
        })
    })
    it('should respond with our text', (done) => {
        let q = new Query()
        q.m('hi', (err, res) => {
            //console.log(res.body)
            res.body.should.have.property('botResponse')
            res.body.botResponse.should.equal('Welcome to the Wix Technical Assistant.\nI\'m here to help you with technical issues.\n::next::\nAre you experiencing issues with your live site or the Wix Editor?')
            done()
        })
    })
})
describe('URL parser', function () {
    this.timeout(10000);
    it('should not allow a bad input')
    it('should return a properly formatted URL from a normal URL')
    it('should handle with www')
    it('should handle without www')
})

function testSite(site,test,cb) {
    let q = new Query()
    q.m('hi', function(err, res){
        if(err)throw Error
        q.m('Live Site', function(err, res){
            if (err) throw Error
            q.m(site, function(err, res){
                if (err) throw Error
                //console.log(res.body)
                test(res)
                cb()
            })
        })
    })
}

describe('detect HTTPS Wix site', function(){
    this.timeout(10000);
    it('should detect NS connected testthiswix.com', function(done){
        testSite('testthiswix.com',function(res){
            res.body.botResponse.should.equal(SantaDetected)
        },done)
    })
    it('should detect Free Site michaelswix.wixsite.com/sandbox', function(done){
        testSite('michaelswix.wixsite.com/sandbox',function(res){
            res.body.botResponse.should.equal(SantaDetected)
        },done)
    })
    it('should detect Pointed Domain')
})

describe('detect HTTP Wix site', function(){
    this.timeout(10000);
    it('should detect NS connected RU site')
    it('should detect Free Site michaelswix.wixsite.com/loadingtime', function(done){
        testSite('michaelswix.wixsite.com/loadingtest',function(res){
            res.body.botResponse.should.equal(SantaDetected)
        },done)
    })
    it('should detect Pointed Domain')
})

describe.skip('report not a Wix site', function(){
    this.timeout(10000);
    it('should fail on a non-wix site google.com')
    it('should fail when DNS correct but premium not paid for')
    it('should fail when A record wrong queendina.com')
    it('should fail when CName wrong but A record correct')
})