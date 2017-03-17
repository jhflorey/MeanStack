// Using function constructor so I can create multiple Emmitter
// In my Emitter, there is one this.events property
// and this event is empty
// Then create a prototype
// then add some message
// the fist message is called on, Emitter.prototype.on
// and set the on message as a funciton with 2 parametters, one  is a type of an event, and the other oone is the listener for the event
// then check the property (as an array) of the type of the event is exist or not? otherwise, make a new array
// then push the listener function into the array
// 



function Emitter() {
	this.events = {};
}

Emitter.prototype.on = function(type, listener) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
}
// say emit, as something happen
// if I have that property on the object
// then take the property of the object in the array and I loop over the array
// and then invoke it

Emitter.prototype.emit = function(type) {
	if (this.events[type]) {
		this.events[type].forEach(function(listener) {
			listener();
		});
	}
}

module.exports = Emitter;