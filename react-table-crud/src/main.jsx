import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from './App';
import { CreateData } from './components/CreateData';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/create" element={<CreateData/>}/>
      </Routes>
    </React.StrictMode>
  </Router>
);
