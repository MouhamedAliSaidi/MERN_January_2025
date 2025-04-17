import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='container mt-4'>
        <h1 className='text-center fs-1 fw-bold'>Notes</h1>
        <div className="d-flex justify-content-between align-items-center gap-2">
                <Link to="/notes">Home</Link>
                <Link to="/notes/create">Create</Link>
        </div>
    </div>
  )
}

export default NavBar