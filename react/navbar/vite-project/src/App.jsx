import React, { useState, createContext } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import "./App.css";

export const UserNameContext = createContext();

function App() {
    const [name, setName] = useState("User"); 

    return (
        <UserNameContext.Provider value={{ name, setName }}>
            <div className="app-container">
                <Navbar />
                <Form />
            </div>
        </UserNameContext.Provider>
    );
}

export default App;
