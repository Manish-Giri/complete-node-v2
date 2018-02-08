const fs = require('fs');


const fetchNotes = () => {
    // fetch existing notes from file system
    try {
        let currentNoteString = fs.readFileSync('notes-data.json');
        return JSON.parse(currentNoteString);
    }
    catch (e) {
        console.log("=== Reading from file failed ===");
        return [];
    }
};

const saveNotes = notes => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    //console.log('New note successfully added!');
}

const addNote = (title, body) => {
    // console.log(`Adding note => ${title}: ${body}`);

    // create new note
    const note = {title, body};

    // prep array to store notes
    let notes = fetchNotes();

    // check if new note title is unique
    let duplicateNotes = notes.filter(note => note.title === title);


    // add new note to array if it's not duplicate
    if(duplicateNotes.length === 0) {
        notes.push(note);
        // add to file system
       saveNotes(notes);
       return note;
    }



};


const listNote = () => {
    console.log(`Listing all notes`);

};

const readNote = (title) => {
    console.log(`Fetched note => Title: ${title}, Body: ${body}`)
};


const removeNote = title => {
    // get all notes
    let notes = fetchNotes();
    let newNotes = notes.filter(note => note.title !== title);
    //save new notes
    saveNotes(newNotes);
    // return length true/false
    return newNotes.length !== notes.length;
};

module.exports = {addNote, listNote, readNote, removeNote};

// console.log(module);