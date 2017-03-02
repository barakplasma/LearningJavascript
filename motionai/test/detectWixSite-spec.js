//Test detectWixSite.js to make sure changes don't break it
const chai = require('chai')
, chaihttp = require('chai-http');
const should = chai.should();

const querystring = require('querystring')

const motionAiEndpoint = 'https://api.motion.ai/1.0/messageBot'

const chatBotQueryParams = {
    bot: 36231,
    msg: '',
    session: Date.now(),
    key: 'fd2e96e0e6f74353a8903226d6059102',
    from: ''
}

var currQuery = chatBotQueryParams;

function Query(msg,session){
    var currQuery = chatBotQueryParams
    currQuery.msg = msg
    currQuery.session = session
    return chai.request(motionAiEndpoint + '?' + querystring.stringify(currQuery))
}
//console.log(newQuery('hi'))

function Q(msg){
    var session = Date.now()
    return Query(msg,session)
}

chai.use(chaihttp)

describe('loads', () => {
    it('should return a 200 response to our GET request', (done) => {
        var q1 = q;
        // WRITE A CONSTRUCTOR FOR QUERIES SO I DONT HAVE TO KEEP TRACK OF SESSIONS BETWEEN TESTS
        //var session = Date.now()
        //Query('hi',session)
        done()
    })
})
describe('URL parser', () => {
    it('should not allow a bad input',(done)=>{
        done()
    })
    it('should return a properly formatted URL from a normal URL')
})
describe('detect Wix site', () => {
    it('should detect NS connected testthiswix.com')
    it('should detect Free Site michaelsalaverry.wix.com/sandbox')
    it('should detect Pointed Domain')
})
describe('report not a Wix site', () => {
    it('should fail on a non-wix site google.com')
    it('should fail when DNS correct but premium not paid for')
    it('should fail when A record wrong queendina.com')
    it('should fail when CName wrong but A record correct')
})