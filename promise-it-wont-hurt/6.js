var promise = Promise.resolve(console.log('promise fulfilled'))

var failure = Promise.reject(Error('This was always going to fail'))

promise.then(1)
promise.catch(0)

failure.then(2)