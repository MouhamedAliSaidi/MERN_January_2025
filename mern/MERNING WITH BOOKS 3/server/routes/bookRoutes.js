const express = require('express');
const { getBooks, addBook, getBookById, updateBook } = require('../controllers/bookController');
const router = express.Router();

router.get('/', getBooks);
router.post('/', addBook);
router.get('/:id', getBookById);
router.put('/:id', updateBook); 

module.exports = router;
