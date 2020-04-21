/*jshint esversion: 6 */
const fs = require('fs');
const filePath = 'notes.json';
const chalk = require('chalk');

// Return notes
const getNotes = function () {

};

// Add a new note by checking for duplicate
const addNote = function (title, body) {
  const notes = loadNotes();
  console.log("Current notes :- ", notes);

  // Duplicate note already present
  const duplicateNotes = notes.filter((note) =>
    note.title === title
  );

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green('Note added'));
  } else {
    console.log("Note title already taken!!!");
  }
};

// Save note function for modularity of the code
const saveNotes = (notes) => {

  console.log("Notes after addition :- ", notes);
  fs.writeFileSync(filePath, JSON.stringify(notes));

};

// Lod all current notes from the file
const loadNotes = () => {

  console.log('Loading notes...');

  // try - catch block to handle no json input when the file is empty
  try {
    return JSON.parse(fs.readFileSync(filePath).toString());
  } catch (err) {
    return [];
  }
};

// Remove a note
const removeNote = (title) => {
  const notes = loadNotes();

  console.log("Current notes :- ", notes);

  // find index of the note to be removed
  const noteIndex = notes.findIndex((note) =>
    note.title === title
  );

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
    saveNotes(notes);
    console.log(chalk.green('Note removed!'));
  } else {
    console.log(chalk.red('Note not found!'));
  }
};

// Export the methods
module.exports = {
  addNote: addNote,
  getNotes: getNotes,
  removeNote: removeNote
};