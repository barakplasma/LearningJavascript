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

    if (api !== '/favicon.ico') {
        if (/^\/add/.test(api)) {
            hrList.push(api.slice(5))
        }
        if (api == '/reset') {
            hrList = [];
            last = '';
            //console.log('cleared')
        }
        if (/^\/remove/.test(api)) {
            hrList.splice(hrList.indexOf('api'))
        }
        if (api == '/view') {

        }
    }
    //console.log(hrList.length)

    hrList.length > 0 ? last = hrList.pop() : '';
    //console.log(last)
    
    var page = `
<script>
function vote(staff){
    fetch('http://localhost:3000/add/'.concat(staff))
    .then(console.log('added: ',staff))
    .then(location.reload())
}
function reset(){
    fetch('http://localhost:3000/reset')
    .then(window.open('http://localhost:3000/view',"_self"))
}

</script>
<h1>HR Button</h1>
<button onclick="vote('Benny')">Benny</button>
<button onclick="vote('Dina')">Dina</button>
<button onclick="vote('Polina')">Polina</button>
<button onclick="vote('Daniel')">Daniel</button>
<button onclick="vote('Michael')">Michael</button>
<br>
${last !== ''?`${hrList.join(', ')}${hrList.length>0?', and '.concat(last,' have'):last.concat(' has')} an appointment with HR`:''}
<br>
<button onclick="reset()">Reset</button>
<button onclick="location.reload()">Refresh</button>
    `
    if (last !== '') {
        hrList.push(last)
    }
    //console.log(hrList)
    //console.log(last)
    //console.log(page)
    response.write(page)
    response.end()
});
server.listen(port)