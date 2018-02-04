const fs = require('fs');

const originalNote = {
    title: "First Note",
    body: "First note text - Hello World"
};

const originalNoteString = JSON.stringify(originalNote);

// fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);

console.log(typeof note);
console.log(`Original Note title: ${note.title}`);