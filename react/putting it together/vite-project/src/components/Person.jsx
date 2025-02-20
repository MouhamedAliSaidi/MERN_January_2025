import React from "react";
import { useState } from "react";

const Person = (p) => {
    const { name , age , hairColor } = p;
    const [ age2 , setAge2 ] = useState(age);
    
    const increaseAge = () => {
        setAge2(age2 + 1);
    };

    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age2}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={increaseAge}>Birthday button for {name}</button>
        </div>
    );
}

export default Person;

