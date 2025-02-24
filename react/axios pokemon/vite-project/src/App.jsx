import React, { useEffect, useState } from 'react';
import axios from 'axios';



const App = () => {
    // Note the second argument is an empty array
    const [responseData, setResponseData] = useState([]);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response=>{setResponseData(response.data.results)})
    }, []);  // This empty array forces useEffect to render ONLY when the component first renders
    return(
        <div>
          <h1>Pokemon API</h1>
            {responseData.length > 0 ? (
              responseData.map((poke, index) => (
                <div key={index}>{poke.name}</div>
              ))
            ) : (
              <div>Loading...</div>
            )}
        </div>
    )
}


export default App
