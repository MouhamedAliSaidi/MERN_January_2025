import React, { useState } from 'react';

const BoxGenerator = () => {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      setBoxes([...boxes, color]);  
      setColor('');  
    }
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input 
            type="text" 
            value={color} 
            onChange={handleColorChange} 
            placeholder="Enter color "
          />
        </label>
        <button type="submit">Add</button>
      </form>

      <div style={boxContainerStyle}>
        {boxes.map((boxColor, index) => (
          <div key={index} style={{ ...boxStyle, backgroundColor: boxColor }} />
        ))}
      </div>
    </div>
  );
};

const boxContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginTop: '20px',
};

const boxStyle = {
  width: '100px',
  height: '100px',
  border: '1px solid black',
};

export default BoxGenerator;
