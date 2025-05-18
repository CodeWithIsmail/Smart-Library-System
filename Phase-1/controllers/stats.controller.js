import { getLoanCountsByBook } from "./loan.controller.js";
import { getBook } from "./book.controller.js";
import { countBooks, countAvailableBooks } from "./book.controller.js";
import { countUsers } from "./user.controller.js";
import Loan from "../models/loan.model.js";

import {
  countLoansToday,
  countReturnsToday,
  countOverdueLoans,
} from "./loan.controller.js";

export const getStatsOverview = async (req, res) => {
  try {
    const totalBooks = await countBooks();
    const totalUsers = await countUsers();
    const booksAvailable = await countAvailableBooks();
    const booksBorrowed = await Loan.countDocuments({ status: "ACTIVE" });
    const overdueLoans = await countOverdueLoans();
    const loansToday = await countLoansToday();
    const returnsToday = await countReturnsToday();

    res.status(200).json({
      total_books: totalBooks,
      total_users: totalUsers,
      books_available: booksAvailable,
      books_borrowed: booksBorrowed,
      overdue_loans: overdueLoans,
      loans_today: loansToday,
      returns_today: returnsToday,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching stats overview", error: error.message });
  }
};

export const getActiveUsers = async (req, res) => {
  try {
    const users = await Loan.aggregate([
      {
        $group: {
          _id: "$user_id",
          books_borrowed: { $sum: 1 },
          current_borrows: {
            $sum: { $cond: [{ $eq: ["$status", "ACTIVE"] }, 1, 0] },
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $project: {
          user_id: "$user._id",
          name: "$user.name",
          books_borrowed: 1,
          current_borrows: 1,
        },
      },
      { $sort: { books_borrowed: -1 } },
    ]);
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching active users", error: error.message });
  }
};

export const getPopularBooks = async (req, res) => {
  try {
    const loanCounts = await getLoanCountsByBook();
    const popularBooks = [];

    for (const loan of loanCounts.slice(0, 5)) {
      const bookResponse = await getBook(loan._id);
      if (bookResponse.book) {
        popularBooks.push({
          book_id: loan._id,
          title: bookResponse.book.title,
          author: bookResponse.book.author,
          borrow_count: loan.borrow_count,
        });
      }
    }

    res.status(200).json(popularBooks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching popular books", error: error.message });
  }
};
