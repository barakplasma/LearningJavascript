var promise = new Promise((fulfill,reject)=>{
    fulfill('I FIRED')
    reject(Error('I DID NOT FIRE'))
})

function onRejected(error){
    console.log(error)
}

promise.then(console.log,onRejected)