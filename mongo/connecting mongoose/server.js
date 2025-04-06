import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbconnect from './config/mongoose.config.js';


const app = express();
app.use(express.json(),cors())


dotenv.config();
const PORT = process.env.PORT;

dbconnect();

app.listen(process.env.PORT, () => {
console.log(`Server is running on port ${PORT}`);
}   );