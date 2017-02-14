var http = require('http')

var args = process.argv;
var current = 2;
var temp = '';

function tryNext(current){
    http.get(args[current],function httpResp(response){
        response.on('data', function(data){
            temp+=data.toString();
            //console.log(temp)
        });
        response.on('end', () => {
            if(current<5){
                current++;
                console.log(temp);
                temp='';
                tryNext(current);
            };
        });
    });
}
tryNext(current);