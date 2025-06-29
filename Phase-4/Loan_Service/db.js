import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const atlasURI = process.env.MONGO_URI;

    await mongoose.connect(atlasURI);
    console.log("Connected to Loan Database (loan_db)!");
  } catch (error) {
    console.error("Loan Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;