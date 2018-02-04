const addNote = (title, body) => {
    console.log(`Adding note => ${title}: ${body}`);

}


const listNote = () => {
    console.log(`Listing all notes`);

}

const readNote = (title) => {
    console.log(`Fetched note => Title: ${title}, Body: ${body}`)
}

module.exports = {addNote, listNote, readNote};

// console.log(module);