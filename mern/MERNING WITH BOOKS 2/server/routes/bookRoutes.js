const express = require('express');
const { getBooks, addBook , getBookById } = require('../controllers/bookController');
const router = express.Router();

router.get('/', getBooks);
router.post('/', addBook);
router.get('/:id', getBookById);


module.exports = router;
