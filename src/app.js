import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { connectDB } from './utils/connectDB.js';
import { PORT, NODE_ENV } from './config/config.js';

import router from './routes/index.js';

console.log(`NODE_ENV: ${NODE_ENV}`);

const app = express();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Morgan Logger
app.use(
  morgan(
    `:remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
`,
  ),
);

// Cors
app.use(cors());

// Main Routes
app.use('/', router);

// UnKnown Routes
app.all('*', (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} not found`);
  err.statusCode = 404;
  next(err);
});

// Global Error Handler
app.use((err, req, res, next) => {
  err.status = err.status || 'error';
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// Start Server and Connect to DB
app.listen(PORT ?? 3333, () => {
  console.log(`  App is running at http://localhost:${PORT} in ${NODE_ENV} mode`);
  console.log('  Press CTRL-C to stop');

  connectDB();
});
