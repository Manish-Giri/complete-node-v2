// console.log("Starting app");
const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const notes = require('./notes.js');
//fs.appendFile('hello.txt', 'This is some text! ', () => {console.log("Writing to file")});



// PROCESS
// console.log('Process', process.argv);
// const command = process.argv[2];
// console.log(command);

// YARGS
const argv = yargs.argv;
const command = argv._[0];
// console.log('Yargs', argv);


if(command === 'add') {
    console.log('Adding new note');
    let res  = notes.addNote(argv.title, argv.body);
    if(res) {
        console.log(`Note created: 
        Title: ${res.title} 
        Body: ${res.body}
        `);
    }
    else {
        console.log('A note with that title already exists');
    }
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

