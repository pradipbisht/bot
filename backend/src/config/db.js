import mongoose from "mongoose";

// Connect to MongoDB with retry logic
const connectDb = async () => {
  const connectWithRetry = async (retries = 5) => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
      if (retries === 0) {
        console.error(
          "❌ MongoDB connection failed after retries:",
          error.message
        );
        process.exit(1); // Exit process with failure
      } else {
        console.warn(
          `⚠️ MongoDB connection failed. Retrying... (${retries} retries left)`
        );
        setTimeout(() => connectWithRetry(retries - 1), 5000); // Retry after 5 seconds
      }
    }
  };

  await connectWithRetry();
};

export default connectDb;
