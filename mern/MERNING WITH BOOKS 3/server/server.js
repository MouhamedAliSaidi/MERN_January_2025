const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
