//Test detectWixSite.js to make sure changes don't break it
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

describe('loads', ()=>{
    it('should return a 200 response to our GET request')
})
describe('URL parser', ()=>{
    it('should not allow a bad input')
    it('should return a properly formatted URL from a normal URL')
})
describe('detect Wix site',()=>{
    it('should detect NS connected testthiswix.com')
    it('should detect Free Site michaelsalaverry.wix.com/sandbox')
    it('should detect Pointed Domain')
})
describe('report not a Wix site'),()=>{
    it('should fail on a non-wix site google.com')
    it('should fail when DNS correct but premium not paid for')
    it('should fail when A record wrong queendina.com')
    it('should fail when CName wrong but A record correct')
}