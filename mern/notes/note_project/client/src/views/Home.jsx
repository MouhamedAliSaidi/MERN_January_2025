import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Home = () => {
    const [allnotes, setAllNotes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes")
        .then((res) => {
            console.log(res.data)
            setAllNotes(res.data)
        })
        .catch(err => console.log(err))
    }, [])


    //* Function that allow us to delete a specific note from server and cleint sides
    const deleteOneNote = (id) => {
        axios.delete(`http://localhost:8000/api/notes/${id}/destroy`)
        .then((res) => {
            const upadetedNote = allnotes.filter((note) => note._id != id)
            setAllNotes(upadetedNote)
            console.log("After deleting the note this is your all new notes:", upadetedNote)
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='container mt-4'>
         {
            allnotes.map((oneNote, index) => {
                return (
                    <div className="card mb-2 bg-warning" key={index}>
                        <Link to={`/notes/${oneNote._id}`}>{oneNote.isImportant ? "📌" : ""} {oneNote.title}</Link>
                        <p>{oneNote.content}</p>
                        <div className="d-flex justify-content-between align-items-center gap-2">
                            <p>{new Date(oneNote.createdAt).toLocaleDateString("en-CA")}</p>
                            <div>
                                <Link to={`/notes/${oneNote._id}/edit`} className="btn btn-secondary">Edit</Link>
                                <button className='btn btn-danger' onClick={()=> deleteOneNote(oneNote._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })
         }   
    </div>
  )
}

export default Home