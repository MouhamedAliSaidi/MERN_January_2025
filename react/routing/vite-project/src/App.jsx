import React from "react";
import {  BrowserRouter as Router,  Routes,  Route,  useParams} from "react-router-dom";

const Home = () => <h1>Welcome</h1>;

const Number = () => {
  const { number } = useParams();
  return <h1>The number is: {number}</h1>;
};

const Word = () => {
  const { word } = useParams();
  return <h1>The word is: {word}</h1>;
};

const StyledWord = () => {
  const { word, textColor, bgColor } = useParams();
  return (
    <h1 style={{ color: textColor, backgroundColor: bgColor, padding: "10px" }}>
      The word is: {word}
    </h1>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={<Number />} />
        <Route path="/:word" element={<Word />} />
        <Route path="/:word/:textColor/:bgColor" element={<StyledWord />} />
      </Routes>
    </Router>
  );
}

export default App;