import express from 'express';
import Book from '../models/book.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.send(books);
});

router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).send('Book not found');
        res.send(book);
    } catch (error) {
        res.status(400).send('Invalid ID');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) return res.status(404).send('Book not found');
        res.send(book);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).send('Book not found');
        res.send({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(400).send('Invalid ID');
    }
});

export default router;
