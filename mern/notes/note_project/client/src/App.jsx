import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Create from "./views/Create"
import Edit from "./views/Edit"
import ViewOne from "./views/ViewOne"
import Home from "./views/Home"

function App() {

  return (
    <>
      <NavBar />
      <hr style={{borderBottom: "2px solid black"}}/>
      <main>
        <Routes>
          <Route path="/notes" element={<Home />} />
          <Route path="/notes/create" element={<Create />} />
          <Route path="/notes/:id/edit" element={<Edit />} />
          <Route path="/notes/:id" element={<ViewOne />} />
        </Routes>
      </main>
    </>
  )
}

export default App
