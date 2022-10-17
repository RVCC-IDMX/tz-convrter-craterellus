
const moment = require('moment-timezone');
const yargs = require('yargs');

moment.tz.setDefault('America/New_York');

const command = yargs.argv._[0];
console.log(yargs.argv);
// console.log(process.argv)
let targetTimezone;

if (command === false) {
    console.log("Usage: node <script-file> <timezone>");
    process.exit(1);
}

if (yargs.argv.format === true) {
    console.log(`The time at the ${command} timezone is ${moment().tz(command).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
}
else {
    console.log(`The time at the ${command} timezone is ${moment().tz(command).format()}`);
}
