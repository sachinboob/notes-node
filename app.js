/*jshint esversion: 6 */

console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const _ = require('lodash'); //lodash same as the module in dependencies
//object in package.json file
const yargs = require('yargs');
const notes = require('./notes.js');

var user = os.userInfo();

var concatinated_notes = notes.add(user.username, user.homedir);

console.log('Concatenated note:', concatinated_notes);
console.log('Result: ', notes.add('Sachin ', 'Boob'));

// with template string
// fs.appendFile('greetings.txt',`Hello ${user.username} you are ${notes.age}.`,function (err){
//   if(err){
//     console.log('Unable to write to file...');
//     console.log(err);
//   }
// });

// print all arguments passed as command line arguments
var command = yargs.argv.method;
console.log('Command: ', command);
console.log("Process: ", process.argv);
console.log("Yargs: ", yargs.argv);

if (command === 'add') {
  console.log('Adding new note...');
  console.log(notes.add('Sachin', 'Boob'));
  console.log(notes.addNote());
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('Removing note');
} else if (command === 'list') {
  console.log('Listing notes...');
} else {
  console.log('Command not recognised...');
}