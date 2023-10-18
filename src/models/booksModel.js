import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A book must have a title'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'A book must have a author'],
      trim: true,
    },
    pageCount: {
      type: Number,
      required: [true, 'A book must have a page count'],
    },
  },

  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  },
);

const Book = mongoose.model('Book', bookSchema);

export default Book;
