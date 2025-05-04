const Book = require('../models/books');

exports.addBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.searchBooks = async (req, res) => {
  try {
    const search = req.query.search;
    const books = await Book.find({
      $or: [
        { title: new RegExp(search, 'i') },
        { author: new RegExp(search, 'i') },
        { genre: new RegExp(search, 'i') }
      ]
    });
    res.json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};