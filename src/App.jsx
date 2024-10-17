import "./App.css";
import { useState } from "react";

function App() {
  // State variables
  const [name, setName] = useState("Hamada");
  const [number, setNumber] = useState(0);
  const [age, setAge] = useState(18);
  const [theme, setTheme] = useState("light"); // Default theme

  // Function to change theme
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`App ${theme}`}>
      {/* Toggle Dark Mode */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ marginBottom: "20px" }}
      >
        Toggle Dark Mode
      </button>

      {/* Toggle Switch */}
      <div 
        className="btn-container"
        style={{ marginBottom: "20px" }}
        onChange={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}>
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>


      {/* Theme Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => changeTheme("light")}
          style={{ marginRight: "10px" }}
        >
          Light
        </button>
        <button
          onClick={() => changeTheme("dark")}
          style={{ marginRight: "10px" }}
        >
          Dark
        </button>
        <button
          onClick={() => changeTheme("pink")}
          style={{ marginRight: "10px" }}
        >
          Pink
        </button>
        <button
          onClick={() => changeTheme("yellow")}
          style={{ marginRight: "10px" }}
        >
          Yellow
        </button>
      </div>

      {/* Change Name */}
      <div style={{ marginBottom: "20px" }}>
        <h4>My Name Is {name}</h4>
        <button onClick={() => setName("Mede")}>Change Name</button>
      </div>

      {/* Counter */}
      <div style={{ marginBottom: "20px" }}>
        <h4>Number: {number}</h4>
        <button onClick={() => setNumber(number - 1)}>-</button>
        <button onClick={() => setNumber(number + 1)}>+</button>
        <button onClick={() => setNumber(0)} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>

      {/* Change Age */}
      <div>
        <h4>My Age Is {age}</h4>
        <button onClick={() => setAge(21)}>Change Age</button>
      </div>
    </div>
  );
}

export default App;
