import express from "express";
import cors from "cors";
import connectDB from "./db.js";

import bookRoutes from "./routes/book.route.js";
import userRoutes from "./routes/user.route.js";
import loanRoutes from "./routes/loan.route.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(bookRoutes);
app.use(userRoutes);
app.use(loanRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});