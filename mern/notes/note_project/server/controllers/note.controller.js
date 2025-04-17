import Note from "../models/note.model.js";


    //* CRUD Features
    //* 1. Create a note feature
    async function createNote(req, res) {
        try {
            const note = await Note.create(req.body)
            res.json(note)
        } catch (error) {
            console.log(error)
            res.json(error)
        }
    }

    //* 2. Get All notes Features 
    async function getAllNotes(req, res) {
        try {
            const allNotes = await Note.find(); 
            res.json(allNotes);
        } catch (error) {
            console.log(error);
            res.status(400).json(error); 
        }
    }







    //* 3. Delete Note Feature
    async function deleteOneNote(req, res) {
        try {
            const deletedNote = await Note.findByIdAndDelete(req.params.id);
            res.json(deletedNote);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

    //* 4. Get One Note Feature
    async function getOneNote(req, res) {
        try {
            const oneNote = await Note.findById(req.params.id);
            res.json(oneNote);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
    //* 5. Edit One Note Feature
    async function updateNote(req, res) {
        try {
            const updated = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.json(updated)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }
    

export  {createNote, getAllNotes, deleteOneNote , getOneNote , updateNote}