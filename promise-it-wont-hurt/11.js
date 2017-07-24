/** Create a function `alwaysThrows` that throws an `Error` withtext `"OH NOES"`;
* Create a function `iterate` that prints the first argument(an integer) to it and then returns that argument + 1;
* Create a promise chain that wraps your iterate method using Q's`fcall` then a series of iterations that attempts to perform `iterate`a total of 10 times.
* Attach `console.log` as a rejection handler at the bottom of yourchain.
* Insert a call to `alwaysThrows` after your 5th call of `iterate`
* If you have done this correctly, your code should print 1,2,3,4,5, "[Error: OH NOES]".  It's important to notice that the thrown exception was
* turned into a rejected promise which caused the rejected promise to
* travel down the promise chain to the first available rejection handler.
*/

const Q = require('q');

function alwaysThrows (){
	throw Error('OH NOES');
}

function iterate(arg=1){
	console.log(arg);
	return arg+1;
}

Q.fcall(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(alwaysThrows)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.catch(console.log)
