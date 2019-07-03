var events = require("events");
var eventEmitter =  new events.EventEmitter();

//Craete event handler
var myEventHandler =  function(){
	console.log('I hear event');
}

//Assign event handler to an event
eventEmitter.on('scream', myEventHandler);

//fire the 'scream' event
eventEmitter.emit('scream');