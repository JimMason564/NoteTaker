const router = require("express").Router()
const {notes} = require("../db/db.json")
const {v4: uuidv4} = require("uuid")
const {updateDb,createNote} = require("../lib/notes")

        router.get("/notes", function(req, res) {
            res.json(notes);
        });

        router.post("/notes", function(req, res) {
            req.body.id=uuidv4();
            let newNote = req.body;
            notes.push(newNote);
            res.json(createNote(req.body,notes));
        });

        router.delete("/notes/:id", function(req, res) {
            const params = req.params.id;
            updateDb(params, notes);
        });

        module.exports = router;