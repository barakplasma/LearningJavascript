// Create a function all that accepts two promises as arguments. This all function should do all of the following:
function all(p1,p2){
// Create an internal promise in whatever way you see fit.
	const p = new Promise((resolve, reject)=>console.log);

// Create a counter variable with initial value of 0.
	let counter = 0;
// Attach then fulfillment handlers to both promises and increment the internal counter when the handlers are called.
	p1.resolve(counter++);
	p2.resolve(counter++);
// When the counter reaches 2, fulfill the internal promise with an array containing both values.
	if(counter === 2){
		p.fulfill([p1,p2]);
// Finally return that internal promise to the user.
		return p;
	}
}

// After you finish writing your all function, pass getPromise1() and getPromise2() into your new function and then attach console.log as a fulfillment handler to the promise returned by your function. These two promise-returning functions will be provided to you in the global scope.

all(getPromise1(),getPromise2())
	.then(console.log);
