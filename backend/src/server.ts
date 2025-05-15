import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const { PORT = 5000, MONGO_URI } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

// Routes
import athleteRouter from './routes/athlete.routes';
app.use('/api/athletes', athleteRouter);

mongoose
  .connect(MONGO_URI as string)
  .then(() => app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`)))
  .catch(err => console.error(err));
