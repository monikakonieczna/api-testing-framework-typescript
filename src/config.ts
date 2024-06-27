import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Export the environment variable
export const API_KEY = process.env.API_KEY || '';