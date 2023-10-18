import { Router } from 'express';

const router = Router();

import bookRoutes from './book.route.js';

const status = (req, res) => {
  res.json({
    status: 'success',
    message: 'Server is running',
  });
};

router.route('/').get(status);

router.use('/api/book', bookRoutes);

export default router;
