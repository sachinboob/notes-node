/*jshint esversion: 6 */
const fs = require('fs');
const filePath = 'notes.json';

// Return notes
const getNotes = function () {
  console.log('Returning notes...');
};

// Add a new note by checking for duplicate
const addNote = function (title, body) {
  console.log('Adding note...');
  const notes = loadNotes();
  console.log("Current notes :- ", notes);

  // Duplicate note already present
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
  } else {
    console.log("Note title already taken!!!");
  }
};

// Save note function for modularity of the code
const saveNotes = function (notes) {

  console.log("Notes after addition :- ", notes);
  fs.writeFileSync(filePath, JSON.stringify(notes));

};

// Lod all current notes from the file
const loadNotes = function () {

  console.log('Loading notes...');

  // try - catch block to handle no json input when the file is empty
  try {
    return JSON.parse(fs.readFileSync(filePath).toString());
  } catch (err) {
    return [];
  }
};

// Export the methods
module.exports = {
  addNote: addNote,
  getNotes: getNotes
};