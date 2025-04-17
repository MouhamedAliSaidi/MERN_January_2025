import mongoose from "mongoose";


const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, 
      trim: true 
    },
    author: {
      type: String,
      required: true, 
      trim: true 
    },
    year: {
      type: Number,
      required: true, 
      min: 1000, 
      max: new Date().getFullYear(), 
    },
    available: {
      type: Boolean,
      required: true, 
      default: true 
    }
  },
  {
    timestamps: true 
  }
);


const Book = mongoose.model('Book', bookSchema);

export default Book;
