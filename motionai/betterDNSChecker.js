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
  "result": "testthiswix.com"////'personsphotography.com' //'camadem.com'//'goldmedalwaters.com' // 'g.co' // any extracted data from the prior module, if applicable
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
var dns = require('dns');
dns.setServers(['8.8.8.8','208.67.222.222','64.6.64.6','62.113.203.99']);

function checkA(err, Arecord) {
  console.log('dns.resolve A debug: err:' + err + ' ; resolve input:' + Arecord);
  if (err !== null) {
    responseJSON.response = "The domain's A record is missing.<br>";
    callback(null, responseJSON);
  } else {
    var aRecRegex = /(216\.139\.213\.144)|(23\.236\.62\.147)|(216\.185\.152\.1((4[4-9])|(5[0-9])))|(104\.197\.84\.185)/
    if (aRecRegex.test(Arecord)) {
      //tests https://regex101.com/r/nm44aQ/1
      responseJSON.response = "The domain's A record is set correctly.<br>";
      dns.resolve(event.result, 'NS', checkNS);
    } else {
      responseJSON.response = 'The domain\'s A record is ' + Arecord + '. This domain\'s A record is not set correctly.<br>You can read more about how to <a href="https://support.wix.com/en/article/adding-or-updating-a-records-in-your-wix-account">change your A record through Wix</a> if you are using Wix nameservers. If you connected your domain via pointing, you will need to change the domain\'s A record through your domain registrar.<br>'
      dns.resolve(event.result, 'NS', checkNS);
    }
  }
}
//console.log(`check a record of: ${event.result}`);
dns.resolve(event.result, 'A', checkA);

function checkNS(err, ns) {
  console.log('dns.resolve NS debug: err:' + err + ' ; resolve input:' + ns);
  if (err !== null) {
    responseJSON.response += 'The domain\'s CNAME record is missing.<br>';
    dns.resolve(event.result, 'CNAME', checkCNAME);
  } else {
    var nsRegex = /^ns\d{1,2}\.wixdns\.net/; //match is good; no match means not our NS; test online at https://regex101.com/r/v0CyH3/1
    var nsCheck;
    var nsc = ns.map((n)=>nsRegex.test(n));
    //console.log(nsc);
    nsc.find((each)=>each===false) ? nsCheck = 'not all set to the Wix Name Servers. Unless you intended to connect your domain to Wix via pointing, you should change this using <a href="https://support.wix.com/en/article/wix-name-server-records">these instructions</a>. You can change this at your domain registrar.<br>': nsCheck = 'set to the Wix name servers. <br>';
    responseJSON.response += '<br>The domain\'s NS records are ' + nsCheck;
    dns.resolve('www.' + event.result, 'CNAME', checkCNAME);
  }
}

function checkCNAME(err, cname) {
  console.log('dns.resolve CNAME debug: err:' + err + ' ; resolve input:' + cname);
  if (err !== null) {
    responseJSON.response += '!internal error!';
    callback(null, responseJSON);
  } else {
    var cnameRegex = /^www([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.wixdns\.net/; //match is good; no match means not our CNAME ; Stolen from https://github.com/wix-private/domain-troubleshooter-server/blob/8f3e69f721429744370c59252329df27f3583775/src/it/resources/domain-troubleshooter-server-config.xml 
    var cnameCheck = '';
    var cn = cname.map((n)=>cnameRegex.test(n));
    cn.find((each)=>each===false) ? cnameCheck = 'not all set correctly. Check <a href="https://support.wix.com/en/article/adding-or-update-cname-records-in-your-wix-account">how to change your cname records with Wix</a> if you connected via name servers. Otherwise, you need to fix this at your domain registrar, not via Wix.<br>': cnameCheck = 'set correctly. <br>';
    responseJSON.response += '<br>The domain\'s CNAME record is ' + cnameCheck + '<br>Please review <a href="https://support.wix.com/en/article/dns-records-needed-to-connect-your-domain-to-wix">this help center article</a> for more help setting your DNS records correctly.<br>Alternatively, you can check what your settings should be <a href="https://domain-troubleshooter.wix.com/ns-widget">here.</a><br>Is your site loading after following the instructions in our article?';
    responseJSON.quickReplies = ['yes', 'no'];
    console.log(JSON.stringify(responseJSON, null, 2));
    callback(null, responseJSON);
  }
}

function callback(err, data) {
  //console.log('callback output: ', err, JSON.stringify(data,null,2));
}