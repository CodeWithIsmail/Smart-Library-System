import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import bookRoutes from "./routes/book.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT; 

app.use(cors());
app.use(express.json());
app.use(bookRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Book Service running on port ${PORT}`);
  });
});