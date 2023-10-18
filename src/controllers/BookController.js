import Book from '../models/booksModel.js';
import { isMongoObjectId } from '../utils/isMongoObjectId.js';
import { createBookSchema, updateBookSchema } from '../schema/bookSchema.js';

export class BookController {
  createBook = async (req, res, next) => {
    const { error, value } = createBookSchema.validate(req.body);

    if (error) res.status(400).json({ error: error.details[0].message });

    try {
      const payload = ({ title: req.body.title, author: req.body.author, pageCount: req.body.pageCount } = value);

      const newBook = new Book(payload);

      const savedBook = await newBook.save();

      res.status(201).json({ data: savedBook });
    } catch (err) {
      res.status(500).send('Internal Server Error');
      console.error(err.message);
    }
  };

  getAllBooks = async (req, res, next) => {
    try {
      const books = await Book.find();

      res.status(200).json({ data: books });
    } catch (err) {
      res.status(500).send('Internal Server Error');
      console.error(err.message);
    }
  };

  updateBookById = async (req, res, next) => {
    const { id } = req.params;
    if (!isMongoObjectId(id)) {
      return res.status(400).json({ error: 'Invalid book id' });
    }

    const { error, value } = updateBookSchema.validate(req.body);

    if (error) res.status(400).json({ error: error.details[0].message });

    const payload = ({ title: req.body.title, author: req.body.author, pageCount: req.body.pageCount } = value);

    try {
      const book = await Book.findOne({ _id: id });

      if (!book) return res.status(404).json({ message: 'Book not found' });

      const updatedBook = await Book.findOneAndUpdate({ _id: id }, payload, { new: true });

      res.status(200).json({ data: updatedBook });
    } catch (err) {
      res.status(500).send('Internal Server Error');
      console.error(err.message);
    }
  };

  deleteBookById = async (req, res, next) => {
    const { id } = req.params;
    if (!isMongoObjectId(id)) {
      return res.status(400).json({ error: 'Invalid site id' });
    }

    try {
      const book = await Book.findOne({ _id: id });

      if (!book) return res.status(404).json({ message: 'Book not found' });

      const deleteBook = await Book.findOneAndRemove({ _id: id });

      res.json({ message: 'Book deleted successfully' });
    } catch (err) {
      res.status(500).send('Internal Server Error');
      console.error(err.message);
    }
  };
}
