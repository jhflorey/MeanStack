// Event: something that has happende in our app that we can responsed to 
// in Node.js, we actually talk about 2 different kinds of events
// system Events: which is come from the C++ core / libuv (things that javascript doesn't have)
// vustom events: which is come from the JS core, which is developer create (event emiiter)
// there are no event object in javascript; however we can fake it, we can create the event and sign that even to the system

// let create object properties and methods

var obj = {
	greet: 'Hello'
}

console.log(obj.greet); 
console.log(obj['greet']);

// var prop variable as a string, 'greet'
var prop = 'greet';
// then use that variable in a bracets to get a particular property on an object
console.log(obj[prop]);


// functions and arrays
var arr = [];

arr.push(function() {
	console.log('Hello world 1');
});
arr.push(function() {
	console.log('Hello world 2');
});
arr.push(function() {
	console.log('Hello world 3');
});

arr.forEach(function(item){
	item();
});










