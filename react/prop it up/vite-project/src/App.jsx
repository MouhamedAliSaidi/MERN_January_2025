import './App.css'
import { useState } from 'react'
import Users from './components/users.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Users name="Doe , Jae " age="45" hairColor="Black" /> 
  <Users name="Smith , John " age="88" hairColor="Brown" />
  <Users name="Fillmore , Millard " age="50" hairColor="Brown" />
  <Users name="Smith , Maria " age="62" hairColor="Brown" />


  </>

  )
}

export default App
