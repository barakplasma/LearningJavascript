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
  "result": 'personsphotography.com' //'camadem.com'//'goldmedalwaters.com' // "testthiswix.com"//'g.co' // any extracted data from the prior module, if applicable
}

// this is the object we will return to Motion AI in the callback
var responseJSON = {
  "response": 'no result.', // what the bot will respond with (more is appended below)
  "continue": true, // denotes that Motion AI should hit this module again, rather than continue further in the flow
  "customPayload": "", // working data to examine in future calls to this function to keep track of state
  "quickReplies": null, // a JSON object containing suggested/quick replies to display to the user
  "cards": null // a cards JSON object to display a carousel to the user (see docs)
}
var spawn = require('child_process').spawn;
const whois = spawn('whois', ['testthiswix.com']);

whois.stdout.on('data',(data)=>{
    var statuses = /Status: \w*/g;
    var datt = data.toString();
    var details = datt.match(statuses) //statuses.exec(data.toString());
    details = details.filter(function (x, i, a) { 
    return a.indexOf(x) == i; 
    });
    console.log(details);
    responseJSON.response = JSON.stringify(details);
    callback(null, responseJSON);
})

function callback(err, data) {
  console.log('callback output: ', err, JSON.stringify(data,null,2));
}