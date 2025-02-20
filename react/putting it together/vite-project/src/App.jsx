import React from 'react'
import { useState } from 'react'
import './App.css'
import Person from './components/Person'



const App = () => {
  return (  
    <div className='App'>
      <Person name='Doe, Jane' age={45} hairColor='Black'/>
      <Person name='Smith, John' age={88} hairColor='Brown'/>
    </div>
  );
}


export default App
