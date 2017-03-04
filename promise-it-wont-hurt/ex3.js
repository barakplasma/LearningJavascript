var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {
        reject(Error('REJECTED!'))
    }, 300);
});

function onReject (error) {
    console.log(error.message)
}

promise.then(console.log,onReject)