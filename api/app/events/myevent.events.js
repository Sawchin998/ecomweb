const events = require("events");
const myEvent = new events.EventEmitter();


myEvent.on('send-register-email', (data) => {
    console.log(data)
})

module.exports = myEvent;