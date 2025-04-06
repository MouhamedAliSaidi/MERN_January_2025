import { connect } from 'mongoose';
import dotenv from 'dotenv';    


dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI ;

async function dbconnect() {
    try {
        await connect(MONGODB_URI, {
            dbName : 'ecommerce',
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log(error);
        throw error
    }
}


export default dbconnect;