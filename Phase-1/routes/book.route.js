import express from "express";
import {
  addBook,
  searchBooks,
  getBookById,
  updateBook,
  deleteBook,
  getPopularBooks,
} from "../controllers/book.controller.js";

const router = express.Router();

router.post("/api/books", addBook);
router.get("/api/books", searchBooks);
router.get("/api/books/:id", getBookById);
router.put("/api/books/:id", updateBook);
router.delete("/api/books/:id", deleteBook);

router.get("/api/stats/books/popular", getPopularBooks);

export default router;
