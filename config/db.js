import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("Error Name:", error.name);
    console.error("Error Message:", error.message);
    console.error("Complete Error:");
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;