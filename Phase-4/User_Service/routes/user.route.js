import express from "express";
import {
  createUser,
  getUserById,
  updateUser,
  getActiveUsers,
  countUsers,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/api/users/", createUser);
router.get("/api/users/:id", getUserById);
router.put("/api/users/:id", updateUser);
router.get("/api/users/count", countUsers);
router.get("/api/users/stats/active", getActiveUsers);

export default router;
