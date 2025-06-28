import express from "express";
import {
  issueBook,
  returnBook,
  getLoansByUser,
  getOverdueLoans,
  extendLoan,
  getStatsOverview,
} from "../controllers/loan.controller.js";

const router = express.Router();

router.post("/api/loans/", issueBook);
router.post("/api/loans/returns", returnBook);
router.get("/api/loans/overdue", getOverdueLoans);
router.get("/api/loans/:user_id", getLoansByUser);
router.put("/api/loans/:id/extend", extendLoan);

router.get("/api/stats/overview", getStatsOverview);

export default router;
