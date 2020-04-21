/*jshint esversion: 6 */
const fs = require('fs');
const filePath = 'notes.json';
const chalk = require('chalk');

// Read a note
const readNote = (title) => {
	const notes = loadNotes();
	const note = notes.find((note) => note.title === title);

	if (note === undefined) {
		console.log(chalk.red('No note available for title - '), chalk.yellow(title));
	} else {
		console.log(chalk.yellow(note.title), ' - ', chalk.yellow.inverse(note.body));
	}
};

// List notes
const listNotes = () => {
	const notes = loadNotes();

	if (notes.length > 0) {
		console.log(chalk.yellow('Listing note titles...'));
		notes.forEach((note) =>
			console.log(note.title)
		);
	} else {
		console.log(chalk.red("No notes available! Let's add some new ones"));
	}
};

// Add a new note by checking for duplicate
const addNote = (title, body) => {
	const notes = loadNotes();
	console.log("Current notes :- ", notes);

	// Check if duplicate note already present
	const duplicateNotes = notes.find((note) =>
		note.title === title
	);

	if (duplicateNotes === undefined) {
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
	listNotes: listNotes,
	removeNote: removeNote,
	readNote: readNote
};