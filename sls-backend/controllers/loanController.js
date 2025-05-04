const Loan = require('../models/loans');
const Book = require('../models/books');

exports.issueBook = async (req, res) => {
  try {
    const { user_id, book_id, due_date } = req.body;
    const book = await Book.findById(book_id);
    if (!book || book.available_copies < 1) {
      return res.status(400).json({ error: 'Book not available' });
    }

    const loan = new Loan({ user_id, book_id, due_date });
    await loan.save();

    book.available_copies -= 1;
    await book.save();

    res.status(201).json(loan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const { loan_id } = req.body;
    const loan = await Loan.findById(loan_id).populate('book_id');
    if (!loan || loan.status !== 'ACTIVE') {
      return res.status(400).json({ error: 'Invalid loan' });
    }

    loan.status = 'RETURNED';
    loan.return_date = new Date();
    await loan.save();

    const book = await Book.findById(loan.book_id);
    book.available_copies += 1;
    await book.save();

    res.json(loan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};