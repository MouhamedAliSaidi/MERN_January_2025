import axios from 'axios'
import React , {useState} from 'react'

const Create = () => {
const [title , setTitle] = useState('')
const [content , setContent] = useState('')
const [isImportant , setisImportant] = useState(false)

const SubmitHandler = (e) => {
    e.preventDefault()
    const newData = {
        title,
        content ,
        isImportant
    }

    axios.post('http://localhost:8000/api/notes/add', newData)
    .then(res => {
        console.log("Working",res.data)
    })
    .catch(err => {
        console.log("error",err)
    })
}

return (
    <div className='container mt-4 '  >
        <h3> Add a note </h3>
        {/* title : {JSON.stringify(title)} <br/>
        content : {JSON.stringify(content)} <br/>   
        important : {JSON.stringify(isImportant)} <br/> */}
        <form onSubmit={SubmitHandler}>
            <div>
                <label>Title: </label>
                <input type ="text" value = {title} onChange={e => {setTitle(e.target.value)}} /> 
            </div>

            <div>
                <label>Content: </label>
                <input className=' ' type ="text" value = {content} onChange={e => {setContent(e.target.value)}} /> 
            </div>

            <div>
                <label>Important ? </label>
                <input type ="checkbox" value = {isImportant} onChange={e => {setisImportant(e.target.checked)}} /> 
            </div>

            <button>Add Note</button>
        </form>
        
        
        
        
    
    </div>
  )
}

export default Create