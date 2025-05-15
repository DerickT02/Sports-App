import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // loads .env

export const connectDB = async (): Promise<void> => {
  const uri = process.env.MONGO_URI as string;
  if (!uri) throw new Error('MONGO_URI missing from .env');

  await mongoose.connect(uri);
  console.log('🟢  Mongo connected');
};
