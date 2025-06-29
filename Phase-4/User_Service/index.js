import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import userRoutes from "./routes/user.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT; 

app.use(cors());
app.use(express.json());
app.use(userRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
  });
});