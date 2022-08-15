import express from 'express';

import { loggerMiddleware, authenticateMiddleware  } from './utils/helpers.js';
import bookRoutes from './routes/books-routes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(loggerMiddleware);

app.use(authenticateMiddleware);

app.use('/api', bookRoutes);

export default app;
