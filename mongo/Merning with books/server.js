import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbconnect from './config/mongoose.config.js';
import bookRoutes from './routes/book.routes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

dbconnect();

app.use('/books', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
