const express = require('express');
const { addBook, searchBooks, getBookById } = require('../controllers/bookController');

const router = express.Router();

router.post('/api/books', addBook);
router.get('/api/books', searchBooks);
router.get('/api/books/:id', getBookById);

module.exports = router;