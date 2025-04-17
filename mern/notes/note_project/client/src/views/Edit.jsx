import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isImportant, setIsImportant] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:8000/api/notes/${id}`)
      .then(res => {
        const note = res.data
        setTitle(note.title)
        setContent(note.content)
        setIsImportant(note.isImportant)
      })
      .catch(err => console.log("Error fetching note:", err))
  }, [id])

  const SubmitHandler = (e) => {
    e.preventDefault()
    const updatedNote = {
      title,
      content,
      isImportant
    }

    axios.put(`http://localhost:8000/api/notes/${id}/update`, updatedNote)
      .then(res => {
        console.log("Note updated:", res.data)
        navigate(`/notes/${id}`) 
      })
      .catch(err => {
        console.log("Error updating note:", err)
      })
  }

  return (
    <div>
      <h3>Edit Note</h3>
      <form onSubmit={SubmitHandler}>
        <div>
          <label>Title: </label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div>
          <label>Content: </label>
          <input type="text" value={content} onChange={e => setContent(e.target.value)} />
        </div>

        <div>
          <label>Important? </label>
          <input type="checkbox" checked={isImportant} onChange={e => setIsImportant(e.target.checked)} />
        </div>

        <button>Update Note</button>
      </form>
    </div>
  )
}

export default Edit
