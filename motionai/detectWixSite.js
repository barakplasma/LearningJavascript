exports.handler = (event, context, callback) => {
    var responseJSON = {
        "response": "Hello World!", // what the bot will respond with (more is appended below)
        "continue": true, // denotes that Motion AI should hit this module again, rather than continue further in the flow
        "customPayload": "", // working data to examine in future calls to this function to keep track of state
        "quickReplies": null, // a JSON object containing suggested/quick replies to display to the user
        "cards": null, // a cards JSON object to display a carousel to the user (see docs)
        "customVars": null // an object or stringified object with key-value pairs to set custom variables eg: {"key":"value"} or '{"key":"value"}'
    }

    var request = require('request');
    console.log(event.result);
    request('http://'.concat(event.result), (error, response, body)=>{
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        var santaDetected = body.indexOf('var santaBase')
        console.log('body:', santaDetected) // Print the HTML
        santaDetected !== -1 ? santa() : noSanta()
    })
    
    function santa(){
        var send = 'We detected a Wix site at the URL you provided. This suggests you are experiencing a local issue'
        var choices = ['Continue']
        reply(send,choices)
    }
    
    function noSanta(){
        var send = 'There may not be a Wix site at the URL you provided.'
        var choices = ['Let me try a different URL','How do I fix this?']
        reply(send,choices)
    }
    
    function reply(send,choices){
        responseJSON.response = send
        responseJSON.quickReplies = choices
        callback(null, responseJSON); 
    }
};