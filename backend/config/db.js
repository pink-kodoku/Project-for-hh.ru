import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.black.bgWhite);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1)
  }
};

export default connectDB