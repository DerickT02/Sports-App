import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { connectDB } from './config/db';
import athleteRoutes from './routes/athlete.routes';
import { errorHandler } from './middlewares/errorHandler';

(async () => {
  await connectDB();

  const app = express();

  // global middleware
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));

  // routes
  app.use('/api/athletes', athleteRoutes);

  // error handler (must be last)
  app.use(errorHandler);

  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`🚀  Server on http://localhost:${port}`));
})();
