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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Command to remove a note',
  builder: {
    title: {
      describe: 'Title of the note to remove',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
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
  handler(argv) {
    notes.readNote(argv.title);
    //console.log('Title: ', argv.title);
  }
});

// Listing the notes
yargs.command({
  command: 'list',
  describe: 'Command to list the notes',
  handler() {
    notes.listNotes();
  }
});

yargs.parse();