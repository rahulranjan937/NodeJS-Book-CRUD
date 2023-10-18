import { Router } from 'express';

const router = Router();

import { BookController } from '../controllers/BookController.js';

const Books = new BookController();

router.post('/', Books.createBook);
router.get('/', Books.getAllBooks);
router.put('/:id', Books.updateBookById);
router.delete('/:id', Books.deleteBookById);

export default router;
