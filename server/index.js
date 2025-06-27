import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import userRoutes from './routes/userRoutes.js';
import courseRoutes from './routes/courseRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Static file serving
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Atlas Connected');
    app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT || 5000}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });
