import express from "express";
import {
    addBook,
    searchBooks,
    getBookById,
    updateBook,
    updateBookAvailability,
    deleteBook,
    getPopularBooks,
    countBooks,
    countAvailableBooks
} from '../controllers/book.controller.js';

const router = express.Router();

router.post('/api/books/', addBook);
router.get('/api/books/', searchBooks);
router.get('/api/books/:id', getBookById);
router.put('/api/books/:id', updateBook);
router.patch('/api/books/:id/availability', updateBookAvailability);
router.delete('/api/books/:id', deleteBook);

router.get('/api/books/stats/popular', getPopularBooks);
router.get('/api/books/count', countBooks);
router.get('/api/books/available-count', countAvailableBooks);


export default router;