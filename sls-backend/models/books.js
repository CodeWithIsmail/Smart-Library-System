const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  copies: { type: Number, required: true },
  available_copies: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);