import { config } from 'dotenv';

const PATH = '.env';

if (!PATH) {
  throw new Error('The .env file is missing');
}

config({ path: PATH });

export const { NODE_ENV, PORT, MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is missing');
}

if (!PORT) {
  throw new Error('PORT is missing');
}

if (!NODE_ENV) {
  throw new Error('NODE_ENV is missing');
}
