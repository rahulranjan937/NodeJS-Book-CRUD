import Joi from 'joi';

const createBookSchema = Joi.object({
  title: Joi.string().required().min(4).max(40).messages({
    'string.base': 'Title should be a type of string',
    'string.empty': 'Title cannot be an empty field',
    'string.min': 'Title should have a minimum length of {#limit}',
    'string.max': 'Title should have a maximum length of {#limit}',
  }),
  author: Joi.string().required().min(4).max(40).messages({
    'string.base': 'Author should be a type of string',
    'string.empty': 'Author cannot be an empty field',
    'string.min': 'Author should have a minimum length of {#limit}',
    'string.max': 'Author should have a maximum length of {#limit}',
  }),
  pageCount: Joi.number().required().messages({
    'number.base': 'Page count should be a type of number',
    'number.empty': 'Page count cannot be an empty field',
  }),
});

const updateBookSchema = Joi.object({
  title: Joi.string().optional().min(4).max(40).messages({
    'string.base': 'Title should be a type of string',
    'string.empty': 'Title cannot be an empty field',
    'string.min': 'Title should have a minimum length of {#limit}',
    'string.max': 'Title should have a maximum length of {#limit}',
  }),
  author: Joi.string().optional().min(4).max(40).messages({
    'string.base': 'Author should be a type of string',
    'string.empty': 'Author cannot be an empty field',
    'string.min': 'Author should have a minimum length of {#limit}',
    'string.max': 'Author should have a maximum length of {#limit}',
  }),
  pageCount: Joi.number().optional().messages({
    'number.base': 'Page count should be a type of number',
    'number.empty': 'Page count cannot be an empty field',
  }),
});

export { createBookSchema, updateBookSchema };
