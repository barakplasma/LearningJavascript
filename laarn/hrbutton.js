//hr button
//requirements
var http = require('http')
var url = require('url')

var port = 3000
var hrList = []
var last = ''

//Write an HTTP server
var server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'html'
    })
    var path = url.parse(request.url, true)
    //console.log(path.pathname)
    var api = path.pathname
    
    if(api!=='/favicon.ico'){
        if(/^\/add/.test(api)){
            hrList.push(api.slice(5))
        }
        if(api=='/reset'){
            hrList=[];last='';
            console.log('cleared')
        }
        if(/^\/remove/.test(api)){
            hrList.splice(hrList.indexOf('api'))
        }
        if(api=='/view'){

        }
    }
    //console.log(hrList.length)
    
    hrList.length>0?last = hrList.pop():'';
    //console.log(last)
    if(last!==''){
        response.write(
`
<script>
</script>
HR Button
<button onclick="">Benny</button>
${hrList.join(', ')}${hrList.length>0?', and '.concat(last,' have'):last.concat(' has')} an appointment with HR`
        )}
    if(last!==''){
        hrList.push(last)
    }
    //console.log(hrList)
    //console.log(last)
    response.end();
});
server.listen(port)