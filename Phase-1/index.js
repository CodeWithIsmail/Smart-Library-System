import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
import cors from "cors";
import bookRoutes from "./routes/book.route.js";
import userRoutes from "./routes/user.route.js";
import loanRoutes from "./routes/loan.route.js";
import statsRoutes from "./routes/stats.route.js";

dotenv.config({
  path: "./env",
});

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/stats", statsRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
