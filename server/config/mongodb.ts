import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || '');
    console.log('Database connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;