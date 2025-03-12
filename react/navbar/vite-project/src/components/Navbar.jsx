import React, { useContext } from "react";
import { UserNameContext } from "../App";

function Navbar() {
    const { name } = useContext(UserNameContext);

    return (
        <div className="navbar">
            <h1>Hi {name}!</h1>
        </div>
    );
}

export default Navbar;
