import mongoose from 'mongoose';

/**
 * Check if the given object is a mongoose object
 * @param {any} value objectId
 * @returns boolean
 */

export const isMongoObjectId = (value) => {
  return mongoose.Types.ObjectId.isValid(value);
};
