var request = require('request');
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
};

/**
 * Christmas is an overly commercialized holiday which promotes consumer debt and feelings of inadequacy
 */
function noSanta() {
    return {
        message: 'There may not be a Wix site at the URL you provided.',
        choices: ['Let me try a different URL', 'How do I fix this?']
    };
};

/**
 * Returns a natural integer if I'm on the nice list, -1 if the naughty list is a lie
 */
function santaIndex(body) {
    return body === undefined ? -1 : body.indexOf('var santaBase');
};

/**
 * Chooses a speech: old Saint Nick is my old friend, or the alternative fact that Santa doesn't exist.
 */
function chooseSanta(body) {
    return santaIndex(body) !== -1 ? santa : noSanta;
};

/**
 * Sean Spicer packages the speech up for the media
 */
function prepareResponse(santaResponse) {
    responseJSON.response = santaResponse.message
    responseJSON.quickReplies = santaResponse.choices
    return responseJSON;
};

exports.handler = (event, context, callback) => {
    request.get({ url: 'http://'.concat(event.result), timeout: 5000 }, (error, response, body) => {
        var _response = typeof error !== 'undefined' ? noSanta : chooseSanta(body);

        // the speech isn't just some lines on a teleprompter, somebody's gotta beat it into the media
        callback(null, prepareResponse(_response()));
    });
};
