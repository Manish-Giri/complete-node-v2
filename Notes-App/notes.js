const fs = require('fs');

const addNote = (title, body) => {
    console.log(`Adding note => ${title}: ${body}`);

    // create new note
    const note = {title, body};

    // prep array to store notes
    let notes = [];

    // fetch existing notes from file system
    try {
        let currentNoteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(currentNoteString);
    }
    catch (e) {
        console.log("=== Reading from file failed ===");
    }

    // check if new note title is unique
    let duplicateNotes = notes.filter(note => note.title === title);


    // add new note to array if it's not duplicate
    if(duplicateNotes.length === 0) {
        notes.push(note);
        // add to file system
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        console.log('New note successfully added!');
    }


    else {
        console.log('Sorry! A note with that title already exists');
    }


};


const listNote = () => {
    console.log(`Listing all notes`);

};

const readNote = (title) => {
    console.log(`Fetched note => Title: ${title}, Body: ${body}`)
};

module.exports = {addNote, listNote, readNote};

// console.log(module);