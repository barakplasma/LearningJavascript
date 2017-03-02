var request = require('request');
var dns = require('dns')
var test = process.platform=='darwin'?true:false;
var input = test?process.argv[2]:event.result; //test or production env check

var responseJSON = {
    "response": "Internal Error 500", // what the bot will respond with (more is appended below)
    "continue": true, // denotes that Motion AI should hit this module again, rather than continue further in the flow
    "customPayload": "", // working data to examine in future calls to this function to keep track of state
    "quickReplies": null, // a JSON object containing suggested/quick replies to display to the user
    "cards": null, // a cards JSON object to display a carousel to the user (see docs)
    "customVars": null // an object or stringified object with key-value pairs to set custom variables eg: {"key":"value"} or '{"key":"value"}'
};

/**
 * Santa, can I have 20,000 RSU's and no tax burden for Christmas?
 */
function santa() {
    return {
        message: 'We detected a Wix site at the URL you provided. This suggests you are experiencing a local issue',
        choices: ['Continue']
    };
}

/**
 * Christmas is an overly commercialized holiday which promotes consumer debt and feelings of inadequacy
 */
function noSanta() {
    return {
        message: 'We were unable to detect a Wix site at the URL you provided.',
        choices: ['Let me try a different URL', 'How do I fix this?']
    };
}

/**
 * Returns a natural integer if I'm on the nice list, -1 if the naughty list is a lie
 */
function santaIndex(body) {
    return body === undefined ? -1 : body.indexOf('santaBase');
}

/**
 * Chooses a speech: old Saint Nick is my old friend, or the alternative fact that Santa doesn't exist.
 */
function chooseSanta(body) {
    //console.log('chooseSanta(',body,')')
    return santaIndex(body) !== -1 ? santa : noSanta;
}

/**
 * Sean Spicer packages the speech up for the media
 */
function prepareResponse(santaResponse) {
    //console.log('preparing response for callback')
    responseJSON.response = santaResponse.message
    responseJSON.quickReplies = santaResponse.choices
    return responseJSON;
}

if(input.slice(0,3)===true)input = input.slice(4)

request.get({ url: 'https://'.concat(input), timeout: 7000 }, (error, response, body) => {
        console.log('started request')
        console.log('err:',error)
        console.log('input:','https://'.concat(input))
        var _response = error ? noSanta : chooseSanta(body);
        // the speech isn't just some lines on a teleprompter, somebody's gotta beat it into the media
        callback(null, prepareResponse(_response()));
        console.log('exiting request')

});

//used to model motionAI
function callback(err, data) {
  console.log('callback output: ', err, JSON.stringify(data,null,2));
  //process.exit()
}