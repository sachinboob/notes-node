/*jshint esversion: 6 */
const fs = require('fs');
const filePath = 'notes.json';

const getNotes = function () {
  console.log('Returning notes...');
};

const addNote = function (title, body) {
  console.log('Adding note...');
  const notes = loadNotes();
  console.log("Current notes :- ", notes);

  notes.push({
    title: title,
    body: body
  });

  saveNotes(notes);
};

const saveNotes = function (notes) {

  console.log("Notes after addition :- ", notes);
  fs.writeFileSync(filePath, JSON.stringify(notes));

};

const loadNotes = function () {

  console.log('Loading notes...');

  try {
    return JSON.parse(fs.readFileSync(filePath).toString());
  } catch (err) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  getNotes: getNotes
};

// module.exports.add = (note_1, note_2) => {
//   return `Part 1 -> ${note_1} : Part 2 -> ${note_2}`;
// };