import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewOne = () => {

    const {id} = useParams()
    const [note,setNote] = useState(null)
    useEffect(() => 
        { 
          axios.get(`http://localhost:8000/api/notes/` + id)
          .then(res => {
            console.log(res.data)
            setNote(res.data)
          })
          .catch(err => console.log(err))
        },[])


  return (
    <div>

      { note ? <ul> 
        
            <li>{note.title}</li>
            <li>{note.content}</li>
        
        </ul> : <h1>Loading...</h1>}
      
    </div>
  )
}

export default ViewOne