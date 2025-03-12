import React, { useContext } from "react";
import { UserNameContext } from "../App";

function Form() {
    const { name, setName } = useContext(UserNameContext);

    return (
        <div className="form-container">
            <label>Your Name:</label>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="name-input"
                placeholder="Enter your name"
            />
        </div>
    );
}

export default Form;
