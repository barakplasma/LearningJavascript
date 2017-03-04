var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {
        reject(Error('REJECTED!'))
    }, 300);
});

function onReject (error) {
    console.log(error)
}

promise.then(console.log,onReject())