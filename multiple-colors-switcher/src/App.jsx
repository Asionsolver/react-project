import { useEffect, useState } from "react";
import "./App.css";
import { ColorItem } from "./components/ColorItem";

function App() {
  const [switcher, setSwitcher] = useState(false);
  const colors = [
    "#2c3531",
    "#edc7b4",
    "#be2edd",
    "#f9ca24",
    "#272727",
    "#90aead",
    "#3e362e",
    "#124e66",
  ];

  useEffect(() => {
    const color = localStorage.getItem("color");
    if (color) {
      setTheme(color);
    }
  }, []);

  const setTheme = (color) => {
    document.documentElement.style.setProperty("--bg-color", color);
  };

  const setColor = (e) => {
    const currentColor = e.target.style.getPropertyValue("--bg-color");
    setTheme(currentColor);
    // console.log(currentColor);
    localStorage.setItem("color", currentColor);
  };
  return (
    <div className="App">
      <h1>React Multiple Colors Switcher App</h1>
      <div
       
        className={`color-switcher ${switcher && "color-switcher--open"}`}
      >
        <button onClick={() => setSwitcher((preState) => !preState)}>
        
          <i className="ri-settings-2-fill"></i>
        </button>
        <h1 className="heading"> Select Color</h1>
        <div className="color-list">
          {colors.map((color, index) => (
            <ColorItem key={index} setColor={setColor} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
