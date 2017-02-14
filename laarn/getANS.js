// VIEW DOCS HERE:  https://github.com/MotionAI/nodejs-samples

//"event" object contains payload from Motion AI
var event = {
  "from": "string", // the end-user's identifier (may be FB ID, email address, Slack username etc, depends on bot type)
  "session": "string", // a unique session identifier
  "botId": "string", // the Motion AI ID of the bot
  "botType": "string", // the type of bot this is (FB, Slack etc)
  "customPayload": "string", // a developer-defined payload for carrying information
  "moduleId": "string", // the current Motion AI Module ID
  "inResponseTo": "string", // the Motion AI module that directed the conversation flow to this module
  "reply": "string", // the end-user's reply that led to this module
  "result": 'personsphotography.com'//"testthiswix.com"//'g.co' // any extracted data from the prior module, if applicable
}

// this is the object we will return to Motion AI in the callback
var responseJSON = {
  "response": 'internal err getting DNS records. Please make sure you input a valid domain.', // what the bot will respond with (more is appended below)
  "continue": true, // denotes that Motion AI should hit this module again, rather than continue further in the flow
  "customPayload": "", // working data to examine in future calls to this function to keep track of state
  "quickReplies": null, // a JSON object containing suggested/quick replies to display to the user
  "cards": null // a cards JSON object to display a carousel to the user (see docs)
}
console.log(`event: ${JSON.stringify(event.result,null,2)}`);
const dns = require('dns');
/*
const http = require('https');
function TestcheckOldDomainTS(domain){
    http.get(`https://domain-troubleshooter.wix.com/_api/wix/getUserDomainIPAddress?domainName=${domain}`,function httpResp(response){
        response.on('data', function(data){
             console.log(data.toString());
        })
    });
}
//checkOldDomainTS(event.result)
*/

function checkA(err, Arecord) {
  console.log(`dns.resolve A debug: err:${err} ; resolve input:${Arecord}`);
  if (err !== null) {
    callback(null, responseJSON);
  } else {
    if(/(216\.139\.213\.144)|(23\.236\.62\.147)|(216\.185\.152\.1((4[4-9])|(5[0-9])))|(104\.197\.84\.185)/.test(Arecord)){ //tests https://regex101.com/r/nm44aQ/1
      responseJSON.response = "The domain's A record is set correctly.<br>";
      dns.resolve(event.result, 'NS', checkNS);
    } else {
      responseJSON.response = `The domain's A record is ${Arecord}.<br>Check what your settings should be <a href="https://domain-troubleshooter.wix.com/ns-widget">here.</a><br>You can read more about how to <a href="https://support.wix.com/en/article/adding-or-updating-a-records-in-your-wix-account">change your A record through Wix</a> if you are using Wix nameservers. If you connected your domain via pointing, you will need to change the domain's A record through your domain registrar. `
      dns.resolve(event.result, 'NS', checkNS);
    }
  }
}
//console.log(`check a record of: ${event.result}`);
dns.resolve(event.result, 'A', checkA);

function checkNS(err, ns) {
  console.log(`dns.resolve NS debug: err:${err} ; resolve input:${ns}`);
  if (err !== null) {
    responseJSON.response += `!internal error!`;
    dns.resolve(event.result, 'CNAME', checkCNAME);
  } else {
    let nsRegex = /^ns\d{1,2}\.wixdns\.net/; //match is good; no match means not our NS; test online at https://regex101.com/r/v0CyH3/1
    let nsCheck = '';
    nsRegex.test(ns[0])? nsCheck = 'set correctly. <br>' : nsCheck = 'not set correctly. <br>';
    responseJSON.response += `The domain's NS record is ${nsCheck}`;
    dns.resolve('www.'+event.result, 'CNAME', checkCNAME);
  }
}

function checkCNAME(err,cname){
    console.log(`dns.resolve CNAME debug: err:${err} ; resolve input:${cname}`);
  if (err !== null) {
    responseJSON.response += `!internal error!`;
    callback(null, responseJSON);
  } else {
    let cnameRegex = /^www([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.wixdns\.net/; //match is good; no match means not our CNAME ; Stolen from https://github.com/wix-private/domain-troubleshooter-server/blob/8f3e69f721429744370c59252329df27f3583775/src/it/resources/domain-troubleshooter-server-config.xml 
    let cnameCheck = '';
    cnameRegex.test(cname[0])? cnameCheck = 'set correctly. <br>' : cnameCheck = 'not set correctly. <br>';
    responseJSON.response += `The domain's CNAME record is ${cnameCheck}`;
    console.log(JSON.stringify(responseJSON,null,2));
    callback(null, responseJSON);
  }
}

function callback(err, data) {
  //console.log('callback output: ', err, JSON.stringify(data,null,2));
}

/*
if (event.customPayload === undefined) {
    event.customPayload = "notWix.com";
  }
  if (event.customPayload == 'true') {
    responseJSON.response = "Would you like to contact Wix Support for more assistance? (yes/no)";
    responseJSON.quickReplies = ['yes', 'no'];
    //console.log(responseJSON);
    callback(null, responseJSON);
  } else {
    dns.resolve(event.customPayload, 'NS', (err, add) => {
      console.log(`dns.resolve.ns: err:${err} ; add: ${add}`);
      if (err !== null) {
        callback(null, responseJSON);
      } else {
        responseJSON.response = ['NS:'].concat(add, ` and should be in the form of nsX.wixdns.net where X is a number IF you are connecting to Wix via Name Servers. <br><br>Please review <a href="https://support.wix.com/en/article/wix-name-server-records">this help center article</a> for more help setting your DNS name server records correctly.<br><br>Is your site loading after following the instructions in our article? (If you are connected to Wix via pointing, input 'no' (yes/no)`).join(' ');
        responseJSON.quickReplies = ['yes', 'no'];

        //responseJSON.quickReplies = [{"quickReplies":"Yes; my site is now loading. Thanks! No; I still get an error message after changing my DNS records"}];
        console.log(`final response: ${responseJSON}`);
        callback(null, responseJSON);
      }
    })
  }
};
*/