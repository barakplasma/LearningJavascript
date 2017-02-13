var http = require('http')

var args = process.argv;

function* urlList(){
    yield args[2];
    yield args[3];
    yield args[4];
}
var nu = urlList();

function tryNext(){
    http.get(nu.next().value,function httpResp(response){
        response.on('data', function(data){
            console.log(data.toString());
        });
        res.on('end', () => {
            tryNext();
        });
    });
}