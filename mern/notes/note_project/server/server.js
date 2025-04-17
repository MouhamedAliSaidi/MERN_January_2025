//* Import necessary modules
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';


//* Import the router from the routes folder
import dbConnect from './config/mongoose.config.js';
import router from './routes/note.routes.js';


//* Create an instance of express application
const app = express();


//* Configure the middlewares
app.use(express.json(), cors());


//* Load the server port from environment variables
dotenv.config();


//* Retrives the server port from .env
const PORT = process.env.PORT;


//* Connect to the MONGODB database
dbConnect();

//* Add main routes for app running
app.use("/api", router)
//* Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); // Log server URL to the console
  });
  