var net = require('net');
var param = process.argv;

//backend
function sendClock(test){
    let clock = new Date();
    test!=='test'? test = false : clock = Date(2017,2,14,7,29,56);
    console.log(clock.getMinutes())
    return `${clock.getFullYear()}-${(clock.getMonth()+1)%10==1?clock.getMonth()+1:'0'+(clock.getMonth()+1)}-${clock.getDate()%10!==1?clock.getDate():'0'+clock.getDate()} ${clock.getHours()%10!==1?clock.getHours():'0'+clock.getHours()}:${clock.getMinutes()%10!==1?clock.getMinutes():clock.getMinutes()}
`
}
//console.log(sendClock('test')); 
//console.assert(sendTime('test')=='2017-02-14 07:29:56','passed') //test sendTime "YYYY-MM-DD hh:mm"

//handler
var server = net.createServer(function (socket) {
    // socket handling logic
    socket.write(sendClock());
    socket.end();
})
server.listen(param[2]);