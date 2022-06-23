const fs = require("fs")
const path = require("path")

function updateDb(id,array) {
    const deletedNote=id
    for(let i= 0; i< array.length; i++) {
        if(deletedNote === array[i].id){
            array.splice(i,1)
            fs.writeFile(path.join(__dirname,"../db/db.json"),
            JSON.stringify({notes:array}, null, 2))
        }
    }
}

function createNote(body,array) {
    const note = body;
    array.push(note)
    fs.writeFile(path.join(__dirname,"../db/db.json"),
    JSON.stringify({notes:array}, null, 2))
}

module.exports = {updateDb}