import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { connectDB } from './config/db';
import athleteRoutes from './routes/athlete.routes';
import authRoutes from './routes/auth.routes';
import { errorHandler } from './middlewares/errorHandler';
import { requireAuth } from './middlewares/requireAuth';

(async () => {
  await connectDB();
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
  app.use(express.json());
  app.use(morgan('dev'));

  /* ----------  ROUTES  ---------- */
  app.use('/api/auth', authRoutes);                // public
  app.use('/api/athletes', requireAuth, athleteRoutes); // protected

  app.use(errorHandler);                           // last

  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`🚀  Server on http://localhost:${port}`));
})();
