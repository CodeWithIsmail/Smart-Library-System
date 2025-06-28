import express from "express";
import {
  createUser,
  getUserById,
  getActiveUsers,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/api/users", createUser);
router.get("/api/users/:id", getUserById);

router.get("/api/stats/users/active", getActiveUsers);

export default router;
