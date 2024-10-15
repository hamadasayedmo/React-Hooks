import "./App.css";
import { useState } from "react";

function App() {
  
  const [name, setName] = useState("Hamada");
  const [number, setNumber] = useState(0);
  const [age, setAge] = useState(18);
  

  return (
    <div>
      {/* Change Name */}
      <h4>My Name Is {name}</h4>
      <button onClick={ () => setName("Mede")}>Chang </button>

      {/* +  , - number */}
      <h4>{number}</h4>
      <button
        onClick={() => {
          {
            setNumber(number - 1);
          }
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          {
            setNumber(number + 1);
          }
        }}
      >
        +
      </button>
      <br />
      <button
        onClick={() => {
          {
            setNumber(0);
          }
        }}
      >
        Reset
      </button>

      {/* Change Age */}
      <h4>My Age Is {age}</h4>
      <button onClick={ () => setAge(21)}>Chang </button>

    </div>
  );
}

export default App;
