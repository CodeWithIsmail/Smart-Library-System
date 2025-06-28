import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const atlasURI = process.env.MONGO_URI;

    await mongoose.connect(atlasURI);
    console.log("Connected to Book Database (book_db)!");
  } catch (error) {
    console.error("Book Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;