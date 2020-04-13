console.log('Starting notes.js');

// console.log(module);

module.exports.age = 28;
module.exports.addNote = () => {
console.log('addNote');
return 'New note';
};
module.exports.add = (note_1 , note_2) => {
  return `Part 1 -> ${note_1} : Part 2 -> ${note_2}`;
};
