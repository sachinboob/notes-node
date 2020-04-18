/*jshint esversion: 6 */

// Core packages
const fs = require('fs');
const os = require('os');
const _ = require('lodash'); //lodash same as the module in dependencies
// Libray from package.json file
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Command to add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Command to remove a note',
  handler: function () {
    console.log('Removing the note!');
  }
});

// Reading the note
yargs.command({
  command: 'read',
  describe: 'Command to read the note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log('Title: ', argv.title);
  }
});

// Listing the notes
yargs.command({
  command: 'list',
  describe: 'Command to list the notes',
  handler: function () {
    console.log('Listing the notes!');
  }
});

yargs.parse();

//console.log(yargs.argv);

// notes commands - add, remove, read, list


// if (command === 'add') {
//   console.log('Adding new note...');
//   console.log(notes.add('Sachin', 'Boob'));
// } else if (command === 'read') {
//   console.log('Reading note');
// } else if (command === 'remove') {
//   console.log('Removing note');
// } else if (command === 'list') {
//   console.log('Listing notes...');
// } else {
//   console.log('Command not recognised...');
// }