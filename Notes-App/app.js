// console.log("Starting app");
const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const notes = require('./notes.js');
//fs.appendFile('hello.txt', 'This is some text! ', () => {console.log("Writing to file")});


// console.log('Process', process.argv);

const command = process.argv[2];
// console.log(command);

const argv = yargs.argv;
console.log('Yargs', argv);

if(command === 'add') {
    console.log('Adding new note');
    notes.addNote(argv.title, argv.body);
}

else if(command === 'remove') {
    console.log('Removing note');
}

else if(command === 'list') {
    console.log('Listing all notes');
}

else if(command === 'read') {
    console.log('Reading note');
}

