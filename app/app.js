import express from 'express';

import { loggerMiddleware } from './utils/helpers.js';
import bookRoutes from './routes/books-routes.js';

const app = express();

app.use(express.json());
app.use(loggerMiddleware);
app.use(express.urlencoded({ extended: true }));

app.use('/api', bookRoutes);

export default app;
