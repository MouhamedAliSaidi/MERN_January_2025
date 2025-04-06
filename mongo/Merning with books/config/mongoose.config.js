import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ MongoDB Atlas Connected');
    } catch (error) {
        console.error(' MongoDB Connection Error:', error);
        throw(error);
    }
};

export default dbconnect;
