const os = require(`os`)
//current user info
const user = os.userInfo()
console.log(user);

//method returns the system times up in seconds
console.log(`The system time up is ${os.uptime} secondss`); 

//Info abous our OS
const currentOs = {
    name:os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)