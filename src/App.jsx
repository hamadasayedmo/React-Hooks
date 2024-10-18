import "./App.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_AGE":
      return { ...state, age: action.newAge };

    case "CHANGE_COUNT":
      return { ...state, count: action.numCount };

    case "CHANGE_THEMES":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

const initialData = {
  name: "Hamada",
  age: 18,
  theme: "light",
  count: 0,
};

function App() {
  // use Reducer
  const [allData, dispatch] = useReducer(reducer, initialData);

  return (
    <div className={`App ${allData.theme}`}>
      {/* Toggle Dark Mode */}
      <button
        onClick={() =>
          dispatch({
            type: "CHANGE_THEMES",
            newValue: allData.theme === "light" ? "dark" : "light",
          })
        }
        style={{ marginBottom: "20px" }}
      >
        Toggle Dark Mode
      </button>


      {/* Toggle Switch */}
      <div
        className="btn-container"
        style={{ marginBottom: "20px" }}
        onChange={() =>
          dispatch({
            type: "CHANGE_THEMES",
            newValue: allData.theme === "light" ? "dark" : "light",
          })
        }
      >
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
          onClick={() => {
            dispatch({ type: "CHANGE_THEMES", newValue: "light" });
          }}
          style={{ marginRight: "26px" }}
        >
          Light
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEMES", newValue: "dark" });
          }}
          style={{ marginRight: "26px" }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEMES", newValue: "yellow" });
          }}
          style={{ marginRight: "26px" }}
        >
          Yellow
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEMES", newValue: "pink" });
          }}
        >
          Pink
        </button>
      </div>


      {/* Change Name */}
      <div style={{ marginBottom: "20px" }}>
        <h4>My Name Is {allData.name}</h4>
        <button
          onClick={() => dispatch({ type: "CHANGE_NAME", newValue: "Medo" })}
        >
          Change Name
        </button>
      </div>


      {/* Counter */}
      <div style={{ marginBottom: "20px" }}>
        <h4>Number: {allData.count}</h4>
        <button
          onClick={() =>
            dispatch({ type: "CHANGE_COUNT", numCount: allData.count - 1 })
          }
        >
          -
        </button>
        <button
          onClick={() =>
            dispatch({ type: "CHANGE_COUNT", numCount: allData.count + 1 })
          }
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "CHANGE_COUNT", numCount: 0 })}
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>
      </div>


      {/* Change Age */}
      <div>
        <h4>My Age Is {allData.age}</h4>
        <button onClick={() => dispatch({ type: "CHANGE_AGE", newAge: 21 })}>
          Change Age
        </button>
      </div>
    </div>
  );
}

export default App;
