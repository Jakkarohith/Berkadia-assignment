var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () 
{
  console.log('I am Jakka rohith!');
}


eventEmitter.on('name', myEventHandler);


eventEmitter.emit('name');
