import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const atlasURI = `mongodb+srv://ismailiitdu:119241@smart-library.d4smnnh.mongodb.net/?retryWrites=true&w=majority&appName=smart-library`;

    await mongoose.connect(atlasURI);
    console.log("MongoDB Atlas Connected!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
