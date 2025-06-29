import express from "express";
import {
  issueBook,
  returnBook,
  getLoansByUser,
  getLoanById,
  getOverdueLoans,
  extendLoan,
  getStatsOverview,
  getLoanCountsByBook,
  getActiveLoansByUser,
} from "../controllers/loan.controller.js";

const router = express.Router();

router.post("/api/loans/", issueBook);
router.post("/api/loans/returns", returnBook);
router.get("/api/loans/user/:user_id", getLoansByUser);
router.get("/api/loans/:id", getLoanById);

router.get("/api/loans/stats/overview", getStatsOverview);
router.get("/api/loans/book-stats", getLoanCountsByBook);
router.get("/api/loans/active-users", getActiveLoansByUser);
router.get("/api/loans/overdue", getOverdueLoans);
router.put("/api/loans/:id/extend", extendLoan);

export default router;
