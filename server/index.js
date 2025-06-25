import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import courseRoutes from './routes/courseRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI)
 
.then(() => {
    console.log('MongoDB Atlas Connected');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
})
.catch(err => {
    console.error('MongoDB connection error:', err.message);
});
