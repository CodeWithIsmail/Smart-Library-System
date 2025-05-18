import mongoose from "mongoose";

const statSchema = new mongoose.Schema(
  {
    totalBooks: {
      type: Number,
      default: 0,
    },
    totalUsers: {
      type: Number,
      default: 0,
    },
    totalLoans: {
      type: Number,
      default: 0,
    },
    activeLoans: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Stat = mongoose.model("Stat", statSchema);
export default Stat;
