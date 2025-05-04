const express = require('express');
const { issueBook, returnBook } = require('../controllers/loanController');

const router = express.Router();

router.post('/api/loans', issueBook);
router.post('/api/returns', returnBook);

module.exports = router;