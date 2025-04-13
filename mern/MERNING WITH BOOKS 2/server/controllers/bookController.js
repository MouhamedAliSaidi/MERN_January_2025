const Book = require('../models/Book'); 

const addBook = async (req, res) => {
  try {
    const { title, author, year, available } = req.body;
    const newBook = new Book({ title, author, year, available });
    await newBook.save();
    res.status(201).json(newBook); 
  } catch (err) {
    res.status(400).json({ message: 'Error adding book', error: err.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find(); // Get all books
    res.json(books); // Send books as response
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getBookById = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.json(book);
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };
  

module.exports = {
  addBook,
  getBooks,
  getBookById
};
