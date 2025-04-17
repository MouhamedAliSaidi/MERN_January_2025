import { model, Schema } from "mongoose";


const NoteSchema = new Schema({
    title: {
        type: String,
        //* Validations 
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    content: {
        type: String,
        //* Validations 
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    isImportant: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})



const Note = model("Note", NoteSchema)
export default Note;