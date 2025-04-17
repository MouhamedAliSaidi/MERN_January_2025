import express from 'express';
import { getBooks, addBook, getBookById, updateBook } from '../controllers/bookController.js';
const router = express.Router();

router.get('/', getBooks);
router.post('/', addBook);
router.get('/:id', getBookById);
router.put('/:id', updateBook); 

export default router;
