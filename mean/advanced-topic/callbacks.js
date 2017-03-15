var ninja = 'Libby';
setTimeout( function (){ console.log(ninja); }, 2000 );
console.log(ninja);

console.log("Now: ");
console.log("Declaring and assigning variable 'ninja'.");
var ninja = 'Libby';

setTimeout( function myCallbackFunction(){
	console.log("LATER: ")
	console.log(ninja, "LATER");}, 2000);
console.log("Printing ninja value.");
console.log(ninja, "NOW");

// // Now you can see how important role of the callback function, it suppied setTimeout with a chunk of code to run once its timer had elapsed 

// // Just to make sure that we are clear on the abiulity to pass a funciton as an argument into another function, considert the following synchronous code:
var a = 2;
var b = function() { console.log("something"); };

function doSomething(x) {
	console.log(typeof(x));
}

doSomething(a);
doSomething(b);

// variable a is a number,
//  variable b is a function, which we have confirmed by logging the typeof argument that was passed into our doSomething function
// now what if we wanted to alter our code so that if the data type of the argument is a function, invoke that function:

function doSomething(possibleCallback) {
	if (typeof(possibleCallback) === 'function'){
		console.log('possibleCallback is a callback');
		possibleCallback(); // we can invoke the callback!
	}
	else {
		console.log('possibleCallback: ', possibleCallback, 'is not a callback function.');
	}
}
doSomething(function myCallback(){ console.log('yes, I am a callback')});
doSomething('string');


// Another example:
// If i wanat to make penne with Alfredo sauce one day and then Bowtie (Farfalle) with Pesto 

function makePasta(pasta, makeSauce) {
	console.log("Boiling water");
	console.log("Putting " + pasta + " pasta in the water");

	// create a variable for sauce !
	var sauce = makeSauce();	// invoke makeSauce, our callback
	console.log("Mixing sauce");
	console.log("Pasta is done!");
	return pasta + " Pasta with " + sauce + " sauce! Voila!";
}
function makePesto(){
	console.log("Making Pesto");
	return "pesto";
}
function makeAlfredo(){
	console.log("Making Alfredo");
	return "alfredo";
}


// we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makePesto));

// notice lack of parentheses after makeAlfredo
// remember: we want to pass the function, not exewcute it and pass a return value.
console.log(makePasta("Farfalle", makeAlfredo));


// Boiling water
//Putting Penne pasta in the water
// Making Pesto
// Mixing sauce
// Pasta is done!
// Penne Pasta with pesto sauce! Voila!
// Boiling water
// Putting Farfalle pasta in the water
// Making Alfredo
// Mixing sauce
// Pasta is done!
// Farfalle Pasta with alfredo sauce! Voila!
























