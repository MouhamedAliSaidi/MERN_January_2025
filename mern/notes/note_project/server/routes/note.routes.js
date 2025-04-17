import { Router } from "express";
import { createNote, getAllNotes, deleteOneNote , getOneNote , updateNote } from "../controllers/note.controller.js"; 

// create a new object called "router" from built-in class Router
const router = Router()

//* 1.Route for Create a Note Feature
router.route("/notes/add").post(createNote)
//* 2.Route for Get All Notes Feature
router.route("/notes").get(getAllNotes)
//* 3.Route for Delete One Note Feature
router.route("/notes/:id/destroy").delete(deleteOneNote)
//* 4.Route for Get One Note Feature
router.route("/notes/:id").get(getOneNote)
//* 5.Route for Edit One Note Feature
router.route("/notes/:id/update").put(updateNote)



export default router